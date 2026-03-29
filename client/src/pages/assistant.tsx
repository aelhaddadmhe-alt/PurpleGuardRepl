import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SUGGESTED_QUESTIONS = [
  "What services does PurpleGuard offer?",
  "How much does Managed EDR cost for 100 endpoints?",
  "We need a pentest for our web app — what's the price?",
  "What's the difference between PurpleSOC and PurpleSentinel?",
  "Can you create a proposal for email protection + EDR for 80 users?",
  "Do you support ISO 27001 compliance?",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const LoadingDots = () => (
  <span style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#a855f7",
          display: "inline-block",
          animation: `pgPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}
      />
    ))}
  </span>
);

function formatMessage(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("## "))
      return (
        <p
          key={i}
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: "#a855f7",
            marginTop: 16,
            marginBottom: 4,
          }}
        >
          {line.replace("## ", "")}
        </p>
      );
    if (line.startsWith("**") && line.endsWith("**"))
      return (
        <p key={i} style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>
          {line.replace(/\*\*/g, "")}
        </p>
      );
    if (line.startsWith("- "))
      return (
        <p
          key={i}
          style={{ paddingLeft: 14, borderLeft: "2px solid #4c1d95", marginBottom: 3, color: "#cbd5e1" }}
        >
          {"· " + line.slice(2)}
        </p>
      );
    if (line.trim() === "") return <div key={i} style={{ height: 8 }} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ color: "#cbd5e1", marginBottom: 2, lineHeight: 1.65 }}>
        {parts.map((p, j) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={j} style={{ color: "#e2e8f0" }}>
              {p.replace(/\*\*/g, "")}
            </strong>
          ) : (
            p
          )
        )}
      </p>
    );
  });
}

interface InputBarProps {
  input: string;
  setInput: (v: string) => void;
  loading: boolean;
  sendMessage: (text?: string) => void;
  handleKey: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

function InputBar({ input, setInput, loading, sendMessage, handleKey, inputRef }: InputBarProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        margin: "0 auto",
        background: "rgba(15,15,28,0.95)",
        border: "1px solid rgba(124,58,237,0.25)",
        borderRadius: 16,
        display: "flex",
        alignItems: "flex-end",
        gap: 10,
        padding: "10px 10px 10px 16px",
        boxShadow: "0 0 40px rgba(124,58,237,0.1), 0 8px 32px rgba(0,0,0,0.4)",
        animation: "pgGlowPulse 3s ease-in-out infinite",
      }}
    >
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Ask about services, pricing, or request a proposal..."
        rows={1}
        style={{
          flex: 1,
          background: "transparent",
          border: "1px solid transparent",
          borderRadius: 8,
          padding: "6px 4px",
          fontSize: 13.5,
          color: "#e2e8f0",
          fontFamily: "inherit",
          lineHeight: 1.5,
          maxHeight: 120,
          overflowY: "auto",
          caretColor: "#a855f7",
          transition: "border-color 0.2s, box-shadow 0.2s",
          resize: "none",
          outline: "none",
        }}
        onInput={(e) => {
          const el = e.target as HTMLTextAreaElement;
          el.style.height = "auto";
          el.style.height = Math.min(el.scrollHeight, 120) + "px";
        }}
      />
      <button
        onClick={() => sendMessage()}
        disabled={loading || !input.trim()}
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          flexShrink: 0,
          background: input.trim() && !loading ? "#7c3aed" : "rgba(124,58,237,0.2)",
          border: "none",
          cursor: input.trim() && !loading ? "pointer" : "not-allowed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          color: "white",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    setStarted(true);

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes pgPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes pgFadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pgGlowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.15), 0 8px 32px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 0 40px rgba(168,85,247,0.3), 0 8px 32px rgba(0,0,0,0.4); }
        }
        .pg-msg-enter { animation: pgFadeSlideUp 0.3s ease forwards; }
        .pg-chip:hover {
          background: rgba(168,85,247,0.15) !important;
          border-color: #a855f7 !important;
          color: #c084fc !important;
          cursor: pointer;
        }
        .pg-send-btn:hover:not(:disabled) { background: #6d28d9 !important; }
        .pg-chat-scroll::-webkit-scrollbar { width: 4px; }
        .pg-chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .pg-chat-scroll::-webkit-scrollbar-thumb { background: #4c1d95; border-radius: 2px; }
      `}</style>

      <div className="flex flex-col min-h-screen">
        <Navigation />

        {/* Chat canvas */}
        <div
          style={{
            flex: 1,
            background: "#080810",
            display: "flex",
            flexDirection: "column",
            fontFamily: "'DM Sans', sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: `
                linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }}
          />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              top: -200,
              left: "50%",
              transform: "translateX(-50%)",
              width: 800,
              height: 600,
              background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Status bar */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              borderBottom: "1px solid rgba(124,58,237,0.15)",
              background: "rgba(8,8,16,0.7)",
              backdropFilter: "blur(12px)",
              padding: "10px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "#a855f7",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                AI Security Advisor
              </div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 1 }}>
                Sizing · Assessment · Technical Scoping
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              />
              <span style={{ fontSize: 11, color: "#64748b", fontFamily: "monospace" }}>ONLINE</span>
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              zIndex: 5,
              maxWidth: 780,
              width: "100%",
              margin: "0 auto",
              padding: "0 16px",
            }}
          >
            {!started ? (
              /* Landing state */
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "48px 0",
                  animation: "pgFadeSlideUp 0.5s ease",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.3)",
                      borderRadius: 100,
                      padding: "6px 16px",
                      fontSize: 11,
                      color: "#a855f7",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      marginBottom: 20,
                    }}
                  >
                    Attack + Defend · Full Loop Security
                  </div>

                  <h1
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(28px, 5vw, 44px)",
                      color: "#f1f5f9",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      marginBottom: 14,
                    }}
                  >
                    Your Security Advisor,
                    <br />
                    <span
                      style={{
                        background: "linear-gradient(90deg, #7c3aed, #c084fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Available 24/7
                    </span>
                  </h1>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 15,
                      maxWidth: 420,
                      margin: "0 auto",
                      lineHeight: 1.7,
                    }}
                  >
                    Ask about our services, get sizing estimates, explore pricing, or request a
                    tailored proposal — instantly.
                  </p>
                </div>

                {/* Suggested chips */}
                <div style={{ width: "100%", maxWidth: 640, marginBottom: 32 }}>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#475569",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      marginBottom: 12,
                      textAlign: "center",
                    }}
                  >
                    Try asking
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}
                  >
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        className="pg-chip"
                        onClick={() => sendMessage(q)}
                        style={{
                          background: "rgba(124,58,237,0.08)",
                          border: "1px solid rgba(124,58,237,0.2)",
                          borderRadius: 100,
                          padding: "8px 14px",
                          fontSize: 12.5,
                          color: "#94a3b8",
                          fontFamily: "inherit",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <InputBar
                  input={input}
                  setInput={setInput}
                  loading={loading}
                  sendMessage={sendMessage}
                  handleKey={handleKey}
                  inputRef={inputRef}
                />
              </div>
            ) : (
              /* Chat state */
              <>
                <div
                  className="pg-chat-scroll"
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "24px 0 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    minHeight: 0,
                    maxHeight: "calc(100vh - 280px)",
                  }}
                >
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className="pg-msg-enter"
                      style={{
                        display: "flex",
                        justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      {msg.role === "assistant" && (
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 7,
                            flexShrink: 0,
                            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 800,
                            color: "white",
                            marginTop: 2,
                            boxShadow: "0 0 14px rgba(168,85,247,0.35)",
                          }}
                        >
                          P
                        </div>
                      )}
                      <div
                        style={{
                          maxWidth: "82%",
                          background:
                            msg.role === "user"
                              ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                              : "rgba(15,15,28,0.9)",
                          border:
                            msg.role === "user"
                              ? "none"
                              : "1px solid rgba(124,58,237,0.2)",
                          borderRadius:
                            msg.role === "user"
                              ? "16px 4px 16px 16px"
                              : "4px 16px 16px 16px",
                          padding: "12px 16px",
                          fontSize: 13.5,
                          lineHeight: 1.65,
                          color: msg.role === "user" ? "#f1f5f9" : "#cbd5e1",
                          boxShadow:
                            msg.role === "assistant"
                              ? "0 4px 24px rgba(0,0,0,0.3)"
                              : "none",
                        }}
                      >
                        {msg.role === "assistant"
                          ? formatMessage(msg.content)
                          : msg.content}
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div
                      className="pg-msg-enter"
                      style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 7,
                          flexShrink: 0,
                          background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                          color: "white",
                        }}
                      >
                        P
                      </div>
                      <div
                        style={{
                          background: "rgba(15,15,28,0.9)",
                          border: "1px solid rgba(124,58,237,0.2)",
                          borderRadius: "4px 16px 16px 16px",
                          padding: "14px 18px",
                        }}
                      >
                        <LoadingDots />
                      </div>
                    </div>
                  )}

                  <div ref={bottomRef} />
                </div>

                <div style={{ paddingBottom: 20, paddingTop: 8 }}>
                  <InputBar
                    input={input}
                    setInput={setInput}
                    loading={loading}
                    sendMessage={sendMessage}
                    handleKey={handleKey}
                    inputRef={inputRef}
                  />
                </div>
              </>
            )}
          </div>

          {/* Chat footer note */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              padding: "10px",
              borderTop: "1px solid rgba(124,58,237,0.1)",
              fontSize: 11,
              color: "#334155",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            PURPLEGUARD · SMARTER SECURITY. STRONGER DEFENSE. ·{" "}
            <a href="https://www.purpleguard.io" style={{ color: "#7c3aed", textDecoration: "none" }}>
              purpleguard.io
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
