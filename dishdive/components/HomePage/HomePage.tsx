"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
import { useChatContext } from "@/context/chatContext";
import RestaurantSkeleton from "./RestaurantSkeleton/RestaurnatSkeleton";

interface Message {
  type: string;
  message: string;
}

const HomePage = () => {
  const [question, setQuestion] = useState("");
  const { botQuestion, answer, context, updateChatContext, clearChatContext } =
    useChatContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const [initialMessagesAdded, setInitialMessagesAdded] = useState(false);
  const numberOfSkeletons = 3;

  useEffect(() => {
    if (conversationHistory.length === 0 && !initialMessagesAdded) {
      const initialConversation = [
        { type: "Human", message: "Hello" },
        { type: "AI", message: "Hi there, how can I assist you?" },
      ];
      setConversationHistory(initialConversation);
      setInitialMessagesAdded(true);
    }
  }, [conversationHistory, initialMessagesAdded]);

  const handleButtonClick = async () => {
    setLoading(true);
    clearChatContext();
    try {
      let history = "";
      conversationHistory.forEach((msg, index) => {
        if (msg.type === "Human") {
          history += `Human: ${msg.message}`;
        } else if (msg.type === "AI") {
          history += `AI: ${msg.message}`;
        }
        if (index < conversationHistory.length - 1) {
          history += "\n";
        }
      });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BE_URL}/chat`,
        {
          question: question,
          history: history,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      const newConversation = [
        ...conversationHistory,
        { type: "Human", message: question },
        { type: "AI", message: data.answer },
      ];
      setConversationHistory(newConversation);
      updateChatContext(data.question, data.answer, data.context, data.reviews);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(question.trim() === "" || loading);
  }, [question, loading]);

  useEffect(() => {
    sessionStorage.setItem(
      "conversationHistory",
      JSON.stringify(conversationHistory)
    );
  }, [conversationHistory]);

  return (
    <div className="text-center mt-8 mb-3">
      <h1 className="text-3xl font-bold mb-4">DishDive</h1>
      <p className="text-lg mb-8">
        An AI-powered restaurant finder tailored to your needs.
      </p>
      <Input
        className="mb-4 rounded-full"
        value={question}
        placeholder="What type of restaurant you want to find?"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        variant="outline"
        onClick={handleButtonClick}
        disabled={buttonDisabled}
      >
        {loading ? "Finding perfect restaurant for you..." : "Find"}
      </Button>
      {loading && (
        <>
          {loading && (
            <>
              {[...Array(numberOfSkeletons)].map((_, index) => (
                <RestaurantSkeleton key={index} />
              ))}
            </>
          )}
        </>
      )}
      <div className="mt-4">
        {botQuestion && (
          <p>
            Results for <b>{botQuestion}</b>
          </p>
        )}
      </div>
      <div className="mt-4">
        {context && <RestaurantList restaurants={Object.values(context)} />}
      </div>
    </div>
  );
};

export default HomePage;
