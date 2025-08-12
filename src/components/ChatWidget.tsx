"use client";

import { useEffect, useRef, useState } from "react";
import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  // No question limit; keep widget simple

  async function askQuestion() {
    const question = input.trim();
    if (!question || isLoading) return;

    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: question },
    ]);
    setInput("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      const answer =
        data.answer || data.error || "Sorry, I couldn't answer that.";
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Network error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          aria-label="Open AI chat"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
          Ask me anything
        </button>
      ) : (
        <div className="flex h-[440px] w-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 dark:border-gray-800">
            <div className="text-sm font-semibold">
              Chat with Rodrigo's Personal AI
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={containerRef}
            className="flex-1 space-y-2 overflow-y-auto p-3"
          >
            {messages.length === 0 && (
              <div className="rounded-md bg-blue-50 p-3 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-200">
                Ask anything about me, such as: my experience, projects, fun
                facts, personal life, interests, etc. This chat will only
                answers questions about me 🙃.
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={
                    "inline-block max-w-[80%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm " +
                    (m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100")
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-2 dark:border-gray-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                askQuestion();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={"Ask any question about me"}
                disabled={isLoading}
                className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
                aria-label="Your question"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-500 disabled:opacity-50"
                aria-disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  <PaperAirplaneIcon className="h-5 w-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
