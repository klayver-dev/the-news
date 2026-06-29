"use client";

import { SendHorizontal } from "lucide-react";
import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message); // 🔥 envia pro ChatPage
    setMessage("");
  };

  return (
    <footer
      className="sticky bottom-0 border-t bg-bg-secondary px-4 py-3"
      style={{ borderColor: "#4D4D4D" }}
    >
      <div className="flex items-center gap-3">
        {/* Input */}
        <div
          className="flex flex-1 items-center rounded-full px-4 py-3"
          style={{
            background: "rgb(11 10 15 / 75%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Mensagem..."
            className="w-full bg-transparent text-sm text-text-secondary placeholder:text-text-secondary outline-none"
          />
        </div>

        {/* Botão */}
        <button
          onClick={handleSend}
          aria-label="Enviar mensagem"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            transition-all
            duration-200
            hover:scale-105
            active:scale-95
          "
          style={{
            background: "rgb(11 10 15 / 75%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <SendHorizontal
            size={20}
            strokeWidth={2.2}
            className="-rotate-45 text-text-secondary"
          />
        </button>
      </div>
    </footer>
  );
}
