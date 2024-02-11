"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

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

export const ChatProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [botQuestion, setBotQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [context, setContext] = useState<any>(null);

  const updateChatContext = (
    newBotQuestion: string,
    newAnswer: string,
    newContext: any
  ) => {
    setBotQuestion(newBotQuestion);
    setAnswer(newAnswer);
    setContext(newContext);
  };

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
