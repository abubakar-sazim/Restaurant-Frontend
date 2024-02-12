"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantList from "./restaurantList";
import { useChatContext } from "@/context/chatContext";

const HomePage = () => {
  const [question, setQuestion] = useState("");
  const { botQuestion, answer, context, updateChatContext } = useChatContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:8000/chat`,
        {
          question: question,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      updateChatContext(data.question, data.answer, data.context);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(question.trim() === "" || loading);
  }, [question, loading]);

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">DishDive</h1>
      <p className="text-lg mb-8">
        An AI-powered restaurant finder tailored to your needs.
      </p>
      <Input
        className="mb-4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        variant="outline"
        onClick={handleButtonClick}
        disabled={buttonDisabled}
      >
        {loading ? "Finding perfect restaurant for you..." : "Find"}
      </Button>
      <div>
        {botQuestion && (
          <p>
            Looking for <b>{botQuestion}</b>
          </p>
        )}
      </div>
      <div>
        {context && <RestaurantList restaurants={Object.values(context)} />}
      </div>
    </div>
  );
};

export default HomePage;
