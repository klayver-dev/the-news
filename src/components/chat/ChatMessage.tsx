interface ChatMessageProps {
  name: string;
  color: string;
  text: string;
  time: string;
  isOwn?: boolean;
}

export function ChatMessage({
  name,
  color,
  text,
  time,
  isOwn = false,
}: ChatMessageProps) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`w-fit max-w-[85%] rounded-2xl px-4 py-3 ${
          isOwn ? "rounded-br-md" : "rounded-bl-md"
        }`}
        style={{
          backgroundColor: "var(--color-bg-glass)",
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        }}
      >
        {!isOwn && (
          <p className="mb-2 text-xs font-semibold" style={{ color }}>
            {name}
          </p>
        )}

        <div className="flex items-end gap-3">
          <p className="flex-1 whitespace-pre-wrap break-words text-[14px] leading-6 text-text-primary">
            {text}
          </p>

          <span className="shrink-0 text-[11px] text-text-secondary">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
