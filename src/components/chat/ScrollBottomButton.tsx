"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollBottomButtonProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollBottomButton({ containerRef }: ScrollBottomButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;

      // Se estiver a mais de 80px do final, mostra o botão
      setVisible(distanceFromBottom > 80);
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const scrollToBottom = () => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      aria-label="Ir para mensagens recentes"
      className={`
        fixed
        bottom-24
        right-4
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-bg-secondary/70
        text-text-primary
        shadow-lg
        transition-all
        duration-300
        backdrop-blur-3xl
        cursor-pointer
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
      style={{
        backdropFilter: "blur(6px)",
      }}
    >
      <ChevronDown size={22} strokeWidth={2.5} />
    </button>
  );
}
