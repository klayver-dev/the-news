"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function ChatHeader() {
  const router = useRouter();
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/5 bg-bg-secondary"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="flex h-16 items-center gap-3 px-4">
        <button
          aria-label="Voltar"
          onClick={() => router.push("/")}
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/5"
        >
          <ArrowLeft
            size={22}
            className="text-text-primary"
            strokeWidth={2.2}
          />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <Image
              src="https://assets.thenewscc.com.br/MORNING.png"
              alt="the news"
              width={30}
              height={30}
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm font-semibold leading-none text-text-primary">
              the news
            </h1>

            <span className="mt-1 text-xs text-text-secondary">
              22 participantes
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
