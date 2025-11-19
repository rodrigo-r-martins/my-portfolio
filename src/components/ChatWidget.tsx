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

const MAX_OUT_OF_SCOPE_QUESTIONS = 3;
const SESSION_STORAGE_KEY = "chat_out_of_scope_count";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [outOfScopeCount, setOutOfScopeCount] = useState(0);
  const [isChatDisabled, setIsChatDisabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load out-of-scope count from session storage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      const count = parseInt(stored, 10);
      setOutOfScopeCount(count);
      setIsChatDisabled(count >= MAX_OUT_OF_SCOPE_QUESTIONS);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  async function askQuestion() {
    const question = input.trim();
    if (!question || isLoading || isChatDisabled) return;

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
        body: JSON.stringify({ question, sessionId }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", content: data.error },
        ]);
        return;
      }

      // Handle out-of-scope questions
      if (data.outOfScope) {
        const newCount = outOfScopeCount + 1;
        setOutOfScopeCount(newCount);
        sessionStorage.setItem(SESSION_STORAGE_KEY, newCount.toString());

        if (newCount >= MAX_OUT_OF_SCOPE_QUESTIONS) {
          setIsChatDisabled(true);
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: "assistant",
              content:
                "Chat is disabled due to excessive off-topic questions. Please contact the author directly.",
            },
          ]);
          return;
        }
      }

      const answer = data.answer || "Sorry, I couldn't answer that.";
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
          id="open-chat-widget"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg hover:bg-silver-tree-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:hover:bg-silver-tree-500"
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
              id="close-chat-widget"
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
            {messages.length === 0 && !isChatDisabled && (
              <div className="rounded-md bg-silver-tree-50 p-3 text-xs text-silver-tree-700 dark:bg-silver-tree-950 dark:text-silver-tree-200">
                Ask anything about me, such as: my experience, projects, fun
                facts, personal life, interests, etc. This chat will only
                answers questions about me 🙃.
              </div>
            )}
            {messages.length === 0 && isChatDisabled && (
              <div className="rounded-md bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950 dark:text-red-200">
                Chat is disabled due to excessive off-topic questions. Please
                contact the author directly.
              </div>
            )}
            {outOfScopeCount > 0 &&
              outOfScopeCount < MAX_OUT_OF_SCOPE_QUESTIONS && (
                <div className="rounded-md bg-yellow-50 p-3 text-xs text-yellow-700 dark:bg-yellow-950 dark:text-yellow-200">
                  {MAX_OUT_OF_SCOPE_QUESTIONS - outOfScopeCount} off-topic
                  questions remaining before chat is disabled.
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
                      ? "bg-primary text-primary-foreground"
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
                placeholder={
                  isChatDisabled ? "Chat disabled" : "Ask any question about me"
                }
                disabled={isLoading || isChatDisabled}
                className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-gray-100 disabled:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:disabled:bg-gray-800"
                aria-label="Your question"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || isChatDisabled}
                className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-silver-tree-600 disabled:opacity-50 dark:hover:bg-silver-tree-500"
                aria-disabled={isLoading || !input.trim() || isChatDisabled}
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
