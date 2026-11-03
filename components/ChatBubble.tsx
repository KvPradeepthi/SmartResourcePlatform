'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles, BookOpen, Calendar, HelpCircle } from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  time: string
}

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: 'Hello Pradeepthi! 👋 I am starBOT, your PEC.UP Academic AI Assistant. How can I help you with your studies or exam prep today?',
      time: 'Just now'
    }
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase()

    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return "Hello! How can I assist your exam preparation today? You can ask about DBMS, Compiler Design, exam dates, or syllabus notes."
    }

    if (q.includes('dbms') || q.includes('database')) {
      return "📚 For Database Management Systems:\n• Unit 1: ER Models, Relational Algebra, and Data Independence.\n• Unit 2: SQL DDL/DML, Joins, and Relational Calculus.\n• Unit 3: Normalization (1NF, 2NF, 3NF, BCNF) and B+ Trees Indexing.\n\nYou can click and view the Unit Notes and Mid-1 Question Papers right from your Home dashboard Prime Section!"
    }

    if (q.includes('compiler') || q.includes('cd') || q.includes('parsing')) {
      return "⚙️ For Compiler Design:\n• Unit 1: Lexical Analyzer & Lex specifications, DFA minimization.\n• Unit 2: Top-down parsing (LL1) and Bottom-up parsing (LR0, SLR, LALR).\n• Unit 3: Syntax-directed translation and Intermediate code generation.\n\nAll unit lecture notes and question papers are available on your dashboard."
    }

    if (q.includes('exam') || q.includes('date') || q.includes('schedule') || q.includes('when')) {
      return "📅 Upcoming Examinations (IT Department • Year 2 • Semester 2):\n1. Database Management Systems — 10 Sept 2026\n2. Compiler Design — 12 Sept 2026\n\nMake sure to review the 2025 Mid-1 Question Papers available in your Prime Section!"
    }

    if (q.includes('note') || q.includes('resource') || q.includes('book') || q.includes('material')) {
      return "📖 All subject notes, solved assignments, and previous question papers are organized in the 'Resources' tab. You can also directly view PDFs from the Prime Section on the Home page."
    }

    if (q.includes('who are you') || q.includes('pecup') || q.includes('creator') || q.includes('about')) {
      return "🤖 I am starBOT, the AI Academic Assistant built into PEC.UP by Kamichetty Veera Pradeepthi (Roll No: 23A91A1225). I help students quickly find course materials, track deadlines, and understand syllabus topics."
    }

    if (q.includes('assignment') || q.includes('homework') || q.includes('lab')) {
      return "📝 Assignment Status:\n• DBMS Assignment 1 (SQL Queries & Views) — Due Sept 08\n• Solutions are available under Resources > Assignments."
    }

    return `That's a great question regarding "${query}"! In your Information Technology 2nd year curriculum, you can find full syllabus breakdowns, lecture notes, and question papers under the Resources section. Is there a specific subject like DBMS or Compiler Design you'd like notes on?`
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input
    if (!text.trim()) return

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botReply = getBotResponse(text)
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 600)
  }

  const quickPrompts = [
    { label: 'DBMS Important Topics', text: 'What are the important topics for DBMS?' },
    { label: 'Compiler Design Notes', text: 'Give me Compiler Design key concepts' },
    { label: 'Upcoming Exams', text: 'What are my upcoming exam dates?' }
  ]

  return (
    <>
      {/* Floating Chat Widget Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[360px] max-w-[calc(100vw-32px)] h-[520px] max-h-[calc(100vh-100px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1.5">
                  starBOT
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-primary-foreground/80">PEC.UP Academic AI Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
              aria-label="Close Chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-muted/20 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 whitespace-pre-line text-[13px] leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-card border border-border text-foreground rounded-tl-none'
                  }`}
                >
                  {m.text}
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-muted-foreground italic">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-card border border-border px-3 py-1.5 rounded-2xl flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 bg-background border-t border-border/50 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p.text)}
                className="whitespace-nowrap text-[11px] bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-full border border-border/50 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2.5 bg-background border-t border-border flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
              placeholder="Ask starBOT anything about your subjects..."
              className="flex-1 bg-muted/40 border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 transition-all"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open starBOT Academic Assistant"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:scale-105 hover:bg-primary/90 active:scale-95 transition-all duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
