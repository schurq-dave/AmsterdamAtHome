"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Bot, X, MessageCircle, Send } from "lucide-react";
import { getMarketResponse } from "@/components/chat/chat-utils";
import type { ChatMarketData, ChatMsg } from "@/lib/types";

interface HeroChatWidgetProps {
  previewTitle: string;
  previewSubtitle: string;
  badge: string;
  welcomeHtml: string;
  quickReplies: { label: string; query: string }[];
  marketData: ChatMarketData;
}

export function HeroChatWidget({
  previewTitle,
  previewSubtitle,
  welcomeHtml,
  quickReplies,
  marketData,
}: HeroChatWidgetProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      }, 800);
    },
    [marketData],
  );

  return (
    <div id="hero-chat-container" className="relative w-full max-w-sm">
      {/* Preview Card */}
      <div
        onClick={() => setChatOpen(true)}
        className={`bg-boutique-paper shadow-2xl p-4 md:p-5 flex items-center gap-4 cursor-pointer hover:bg-boutique-stone transition-all duration-500 group relative overflow-hidden border border-boutique-dark/10 ${chatOpen ? "opacity-0 invisible scale-90" : ""}`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-boutique-orange transition-all duration-500 group-hover:w-1.5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-boutique-beige/20 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
        
        <div className="relative z-10 pl-2">
          <div className="w-12 h-12 rounded-full bg-boutique-dark flex items-center justify-center text-boutique-paper shadow-md group-hover:bg-boutique-orange transition-colors duration-500">
            <Bot className="w-5 h-5" />
          </div>
        </div>
        
        <div className="flex-1 z-10 pl-1">
          <h3 className="font-serif text-lg md:text-xl text-boutique-dark group-hover:text-boutique-orange transition-colors duration-300">
            {previewTitle}
          </h3>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-1">
            {previewSubtitle}
          </p>
        </div>
        
        <div className="relative flex items-center justify-center z-10 pr-2">
          <div className="w-8 h-8 rounded-full border border-boutique-dark/20 flex items-center justify-center group-hover:border-boutique-orange group-hover:text-boutique-orange transition-colors duration-300 text-boutique-dark">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Full Chat */}
      <div
        className={`absolute bottom-0 right-0 w-full bg-boutique-paper/95 backdrop-blur-xl overflow-hidden shadow-2xl border border-white/20 origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${chatOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"}`}
      >
        <div className="bg-boutique-dark p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-boutique-stone flex items-center justify-center text-boutique-dark border-2 border-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-boutique-dark rounded-full" />
            </div>
            <div>
              <h3 className="font-serif text-white text-lg italic tracking-wide">{previewTitle}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-boutique-beige">
                Amsterdam at Home
              </p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setChatOpen(false); }}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Sluit chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={messagesRef}
          className="h-64 overflow-y-auto p-5 bg-gradient-to-b from-boutique-offwhite to-white space-y-4 font-sans text-sm scroll-smooth"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-boutique-stone flex items-center justify-center text-boutique-dark flex-shrink-0 text-xs font-bold border border-boutique-dark/10">
              AI
            </div>
            <div
              className="bg-boutique-paper p-4 shadow-sm text-gray-600 border border-gray-100 leading-relaxed text-[13px]"
              dangerouslySetInnerHTML={{ __html: welcomeHtml }}
            />
          </div>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.isUser ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${msg.isUser ? "bg-boutique-orange text-white border border-white/20" : "bg-boutique-stone text-boutique-dark border border-boutique-dark/10"}`}
              >
                {msg.isUser ? "U" : "AI"}
              </div>
              <div
                className={`p-4 shadow-sm leading-relaxed text-[13px] max-w-[85%] ${msg.isUser ? "bg-boutique-dark text-white" : "bg-boutique-paper text-gray-600 border border-gray-100"}`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          ))}
          {typing && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-boutique-stone flex items-center justify-center text-boutique-dark flex-shrink-0 text-xs font-bold border border-boutique-dark/10">
                AI
              </div>
              <div className="bg-boutique-paper p-4 shadow-sm border border-gray-100 flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot" />
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
            className="relative flex items-center"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Bijv: Overbieding in De Pijp?"
              className="w-full bg-gray-50 border border-gray-200 pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-boutique-beige focus:ring-1 focus:ring-boutique-beige font-sans transition-all shadow-inner text-boutique-dark placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-boutique-dark text-white p-2 hover:bg-boutique-orange transition-all shadow-md group"
              aria-label="Verstuur"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
          <div className="mt-3 flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {quickReplies.map((qr) => (
              <button
                key={qr.label}
                onClick={() => handleSubmit(qr.query)}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:bg-boutique-stone hover:text-boutique-dark transition-colors"
              >
                {qr.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
