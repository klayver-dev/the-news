"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Logo from "@/assets/logo.png";

export default function Home() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 700);

    const timer2 = setTimeout(() => {
      router.replace("/chat");
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router]);

  return (
    <main
      className={`flex min-h-dvh items-center justify-center bg-black px-6 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src={Logo}
        alt="the news"
        priority
        className="w-10/12 max-w-sm h-auto"
      />
    </main>
  );
}
