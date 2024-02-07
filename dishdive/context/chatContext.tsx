"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

interface ChatContextType {
  botQuestion: string;
  answer: string;
  context: any;
  updateChatContext: (
    newBotQuestion: string,
    newAnswer: string,
    newContext: any
  ) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC = ({ children }) => {
  const [botQuestion, setBotQuestion] = useState<string>(
    localStorage.getItem("botQuestion") || ""
  );
  const [answer, setAnswer] = useState<string>(
    localStorage.getItem("answer") || ""
  );
  const [context, setContext] = useState<any>(
    JSON.parse(localStorage.getItem("context") || "null")
  );

  const updateChatContext = (
    newBotQuestion: string,
    newAnswer: string,
    newContext: any
  ) => {
    setBotQuestion(newBotQuestion);
    setAnswer(newAnswer);
    setContext(newContext);
  };

  useEffect(() => {
    localStorage.setItem("botQuestion", botQuestion);
    localStorage.setItem("answer", answer);
    localStorage.setItem("context", JSON.stringify(context));
  }, [botQuestion, answer, context]);

  const contextValue: ChatContextType = {
    botQuestion,
    answer,
    context,
    updateChatContext,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};
