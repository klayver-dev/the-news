"use client";

import { useEffect, useRef, useState } from "react";

import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { DayDivider } from "@/components/chat/DayDivider";
import { ScrollBottomButton } from "@/components/chat/ScrollBottomButton";

import { messages as initialMessages } from "@/data/messages";

export default function ChatPage() {
  const messagesRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState(initialMessages);

  // 🔥 scroll inicial
  useEffect(() => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }, []);

  // 🔥 scroll sempre que nova mensagem chega
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // ✅ adicionar mensagem
  function handleSendMessage(text: string) {
    const newMessage = {
      id: crypto.randomUUID(),
      name: "Você",
      color: "#fff",
      text,
      time: new Date().toLocaleTimeString().slice(0, 5),
      isOwn: true,
    };

    setMessages((prev) => [...prev, newMessage]);
  }

  return (
    <main className="flex h-dvh w-full flex-col bg-bg-primary text-text-primary">
      {/* Header */}
      <ChatHeader />

      {/* Lista de mensagens */}
      <section
        ref={messagesRef}
        className="relative flex-1 overflow-y-auto scroll-smooth"
      >
        <div className="mx-auto flex w-full flex-col px-4 py-4 sm:px-6 lg:px-8">
          <DayDivider label="Hoje" />

          <div className="mt-2 flex flex-col gap-3">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                name={message.name}
                color={message.color}
                text={message.text}
                time={message.time}
                isOwn={message.isOwn}
              />
            ))}
          </div>

          <div ref={bottomRef} />
        </div>

        <ScrollBottomButton containerRef={messagesRef} />
      </section>

      {/* Campo de envio */}
      <ChatInput onSend={handleSendMessage} />
    </main>
  );
}
