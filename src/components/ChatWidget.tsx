"use client";

import { useState, useEffect, useRef } from "react";
import {
  collection, addDoc, onSnapshot, query,
  orderBy, serverTimestamp, doc, setDoc, updateDoc
} from "firebase/firestore";
import { ref, onValue, set, serverTimestamp as rtServerTimestamp } from "firebase/database";
import { db, rtdb } from "@/lib/firebase";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "visitor" | "admin";
  createdAt: Date | null;
};

function generateSessionId() {
  return `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [adminOnline, setAdminOnline] = useState(false);
  const [unread, setUnread] = useState(0);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Check admin online status via Realtime DB
  useEffect(() => {
    const adminRef = ref(rtdb, "admin/online");
    const unsub = onValue(adminRef, (snap) => {
      setAdminOnline(snap.val() === true);
    });
    return () => unsub();
  }, []);

  // Start session
  const startSession = async (visitorName: string) => {
    const sid = generateSessionId();
    setSessionId(sid);

    await setDoc(doc(db, "chats", sid), {
      visitorName,
      lastMessage: "",
      lastMessageAt: serverTimestamp(),
      isRead: false,
      createdAt: serverTimestamp(),
    });

    // Set visitor presence in RTDB
    await set(ref(rtdb, `sessions/${sid}/typing`), false);
  };

  // Listen to messages
  useEffect(() => {
    if (!sessionId) return;

    const q = query(
      collection(db, "chats", sessionId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snap) => {
      const msgs = snap.docs.map((d) => ({
        id: d.id,
        text: d.data().text,
        sender: d.data().sender,
        createdAt: d.data().createdAt?.toDate() ?? null,
      }));
      setMessages(msgs);

      // Count unread admin messages
      if (!open) {
        const newUnread = msgs.filter((m) => m.sender === "admin").length;
        setUnread(newUnread);
      }
    });

    return () => unsub();
  }, [sessionId, open]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Reset unread when open
  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setError("");
    try {
      await startSession(name.trim());
      setNameSubmitted(true);
    } catch (err) {
      console.error("Failed to start chat session:", err);
      setError("Gagal memulai chat. Coba lagi.");
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !sessionId || sending) return;
    const text = input.trim();
    setInput("");
    setSending(true);
    setError("");
    try {
      await addDoc(collection(db, "chats", sessionId, "messages"), {
        text,
        sender: "visitor",
        createdAt: serverTimestamp(),
      });

      await updateDoc(doc(db, "chats", sessionId), {
        lastMessage: text,
        lastMessageAt: serverTimestamp(),
        isRead: false,
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("Pesan gagal terkirim. Coba lagi.");
      setInput(text); // restore so the user doesn't lose their message
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#480E6A" }}
        aria-label="Chat dengan kami"
      >
        {open ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: "420px", backgroundColor: "#fff" }}>

          {/* Header */}
          <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#480E6A" }}>
            <div>
              <p className="text-white font-semibold text-sm">Alvin Dio Prakosa</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                {adminOnline ? "🟢 Online" : "⚪ Offline"}
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {!nameSubmitted ? (
              <form onSubmit={handleNameSubmit} className="p-3">
                <p className="text-sm text-gray-600 mb-3">Halo! Boleh kenalan dulu? 👋</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama kamu"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 mb-2"
                  style={{ "--tw-ring-color": "#480E6A" } as React.CSSProperties}
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg text-white text-sm font-semibold"
                  style={{ backgroundColor: "#480E6A" }}
                >
                  Mulai Chat
                </button>
              </form>
            ) : (
              <>
                <div className="text-center text-xs text-gray-400 py-2">
                  Chat dimulai. Kami akan segera membalas!
                </div>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "visitor" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[75%] px-3 py-2 rounded-2xl text-sm"
                      style={msg.sender === "visitor"
                        ? { backgroundColor: "#480E6A", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#200033", border: "1px solid #e5e7eb" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Error banner */}
          {error && (
            <div className="px-3 py-2 text-xs text-red-600 bg-red-50 border-t border-red-100">
              {error}
            </div>
          )}

          {/* Input */}
          {nameSubmitted && (
            <div className="p-3 border-t border-gray-100 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ketik pesan..."
                className="flex-1 px-3 py-2 rounded-full text-sm border border-gray-200 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full flex items-center justify-center disabled:opacity-40 transition-opacity"
                style={{ backgroundColor: "#480E6A" }}
              >
                <Send size={15} className="text-white" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
