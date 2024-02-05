"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantList from "./restaurantList";

const HomePage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [context, setContext] = useState({});

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/chat`, {
        params: { question },
      });

      const data = response.data;
      setAnswer(data.answer);
      setContext(data.context);

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
      <Button variant="outline" onClick={handleButtonClick}>
        Button
      </Button>
      <div>
      <RestaurantList restaurants={Object.values(context)} />
      </div>
    </div>
  );
};

export default HomePage;
