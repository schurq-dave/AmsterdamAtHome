"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Bot, X, MessageCircle, Send, User } from "lucide-react";
import { getMarketResponse } from "@/components/chat/chat-utils";
import type { ChatMarketData, ChatMsg } from "@/lib/types";

interface StickyChatWidgetProps {
  welcomeHtml: string;
  marketData: ChatMarketData;
}

export function StickyChatWidget({ welcomeHtml, marketData }: StickyChatWidgetProps) {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const target = document.getElementById("hero-chat-container");
    if (!target) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(!e.isIntersecting)),
      { threshold: 0 },
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const handleSubmit = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setMessages((p) => [...p, { id: `u${Date.now()}`, text, isUser: true }]);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((p) => [
          ...p,
          { id: `a${Date.now()}`, text: getMarketResponse(text, marketData), isUser: false },
        ]);
      }, 1000);
    },
    [marketData],
  );

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-boutique-paper border border-boutique-stone shadow-2xl rounded-lg w-80 md:w-96 mb-4 origin-bottom-right transition-all duration-500 ease-out overflow-hidden ${chatOpen ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"}`}
      >
        <div className="bg-boutique-dark text-white p-5 flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-boutique-beige/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-boutique-paper text-boutique-dark flex items-center justify-center shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Woningmarkt Specialist</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-boutique-beige mt-0.5">Amsterdam at Home</p>
            </div>
          </div>
          <button onClick={() => setChatOpen(false)} className="relative z-10 hover:text-boutique-orange transition-colors p-1" aria-label="Sluit chat">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={messagesRef} className="h-80 overflow-y-auto p-4 bg-boutique-offwhite space-y-4 font-sans text-sm">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-boutique-stone flex items-center justify-center text-boutique-dark flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div
              className="bg-boutique-paper p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-sm text-gray-600 border border-gray-100"
              dangerouslySetInnerHTML={{ __html: welcomeHtml }}
            />
          </div>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-2 ${msg.isUser ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isUser ? "bg-boutique-orange text-white" : "bg-boutique-stone text-boutique-dark"}`}
              >
                {msg.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={`p-3 rounded-lg shadow-sm max-w-[80%] ${msg.isUser ? "bg-boutique-dark text-white" : "bg-boutique-paper text-gray-600 border border-gray-100"}`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          ))}
          {typing && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-boutique-stone flex items-center justify-center text-boutique-dark flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-boutique-paper p-3 rounded-lg shadow-sm border border-gray-100 flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-boutique-paper border-t border-gray-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const v = inputRef.current?.value.trim();
              if (!v) return;
              handleSubmit(v);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Vraag over de woningmarkt..."
              className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-boutique-beige font-sans rounded-sm"
            />
            <button
              type="submit"
              className="bg-boutique-dark text-white p-2 hover:bg-boutique-orange transition-colors rounded-sm"
              aria-label="Verstuur"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => setChatOpen((p) => !p)}
        className="bg-boutique-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-boutique-orange transition-all duration-300 hover:scale-110 group relative"
        aria-label="Open chat"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
