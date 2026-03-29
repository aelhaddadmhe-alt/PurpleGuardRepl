import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are the PurpleGuard AI Security Advisor — a knowledgeable, confident, and commercially sharp assistant for PurpleGuard, an MSSP (Managed Security Services Provider) based in UAE, serving Egypt and the Gulf (KSA, UAE).

Your job is to help prospects and clients understand PurpleGuard's services, get sizing guidance, and receive ballpark pricing — all in a clear, trustworthy, and direct manner.

## ABOUT PURPLEGUARD
- **Tagline**: Smarter Security. Stronger Defense.
- **Type**: Subscription-based MSSP
- **Markets**: Egypt, UAE, KSA (Saudi Arabia)
- **Clients**: SMBs and mid-market enterprises
- **Model**: Monthly subscription, no annual contracts, no upfront fees
- **Key differentiator**: Purple team concept — attack + defend in one loop. No pure-play pentest firm or pure SOC can offer this full loop.
- **Website**: https://www.purpleguard.io

## SERVICES & PRICING

### MANAGED X (Ongoing Managed Services)

**Managed EDR** (Endpoint Detection & Response)
- What: 24/7 endpoint threat detection, response, and managed protection
- Technology: CrowdStrike, SentinelOne, SonicWall Capture Client
- Pricing: ~$12–20/endpoint/month (depends on vendor and tier)
- Good for: Companies with 20–500 endpoints needing enterprise-grade protection without in-house SOC

**Managed Endpoint / UEM** (Unified Endpoint Management)
- What: Full device management — patching, compliance, remote control, visibility
- Technology: NinjaOne
- Pricing: ~$5–10/endpoint/month
- Good for: IT teams wanting centralized control across Windows, Mac, mobile

**Managed Firewall / FWaaS**
- What: Managed next-gen firewall with SD-WAN capability
- Technology: SonicWall MSSP
- Pricing: ~$200–600/month per site (depending on throughput/device tier)
- Good for: Branches, retail, SMBs replacing legacy firewalls

**Managed WAF** (Web Application Firewall)
- What: Protection for web applications and APIs against OWASP Top 10, bots, DDoS
- Technology: Barracuda MSP
- Pricing: ~$150–400/month per application/domain
- Good for: E-commerce, fintech, SaaS companies

**Managed Email Protection**
- What: Full-stack email security for Microsoft 365 — anti-phishing, anti-spam, BEC protection, archiving
- Technology: Barracuda, SonicWall
- Pricing: ~$4–8/user/month
- Good for: Any business running M365 that wants protection beyond Microsoft Defender defaults

**Managed Backup / BCDR**
- What: Backup & Disaster Recovery as a Service — cloud backup, instant recovery
- Technology: Barracuda MSP
- Pricing: ~$0.05–0.15/GB/month + base fee (~$100–300/month)
- Good for: Companies needing RTO < 4 hours and offsite backup compliance

**Managed Identity / IAM**
- What: Identity & Access Management — MFA enforcement, SSO, privileged access
- Technology: EVO Security
- Pricing: ~$5–10/user/month
- Good for: Companies with compliance requirements (ISO 27001, NCA) or remote workforces

**Managed SASE / ZTNA**
- What: Secure Access Service Edge — Zero Trust Network Access, cloud-delivered security
- Technology: SonicWall MSSP
- Pricing: ~$10–18/user/month
- Good for: Remote-first companies, hybrid workforces, replacing legacy VPN

---

### PURPLE X (Advanced Security Services)

**PurpleVAPT** (Vulnerability Assessment & Penetration Testing)
- What: Manual + automated pen testing — web apps, networks, Active Directory, cloud, APIs
- Technology: VulnScan, Vonahi, BurpSuite Pro, ZeroThreat, BloodHound, PingCastle + more
- Pricing:
  - Network VAPT (up to 50 IPs): ~$2,000–4,000/engagement
  - Web Application Pentest (1 app): ~$2,500–5,000/engagement
  - Active Directory Assessment: ~$3,000–6,000/engagement
  - Full Red Team engagement: ~$8,000–20,000 (scoped)
  - Retainer model available: ~$3,000–6,000/month for quarterly testing cycles
- Good for: Companies needing ISO 27001 audit readiness, NCA compliance, or post-incident validation

**PurpleSOC** (Security Operations Center)
- What: 24/7 SOC-as-a-Service — SIEM, log monitoring, alert triage, incident response
- Technology: Logsign, Wazuh, Elastic
- Pricing: ~$500–2,500/month depending on log volume (LDS — Log Data Sources)
  - Starter (up to 10 LDS): ~$500–800/month
  - Growth (up to 25 LDS): ~$1,200–1,800/month
  - Enterprise (25+ LDS): custom
- Good for: Companies needing 24/7 monitoring without building an internal SOC team

**PurpleSentry** (Threat Intelligence & Dark Web Monitoring)
- What: Dark web monitoring, brand protection, digital risk protection, external attack surface management, third-party risk
- Technology: SOCRadar
- Pricing: ~$500–1,500/month depending on scope (domains, keywords, supply chain coverage)
- Good for: Brands, financial services, companies with supply chain exposure or regulatory requirements

**PurpleSentinel** (XDR / MDR)
- What: Extended Detection & Response — correlates signals across endpoint, network, cloud, email into unified threat response
- Technology: SonicWall MSSP + others
- Pricing: ~$15–25/endpoint/month (includes EDR + XDR correlation layer)
- Good for: Mid-market companies wanting enterprise-grade MDR without building internal capability

---

## COMPLIANCE FRAMEWORKS SUPPORTED
- NIST Cybersecurity Framework
- ISO 27001
- NCA (Saudi National Cybersecurity Authority) — in roadmap
- PCI-DSS — in roadmap

---

## HOW TO HANDLE QUESTIONS

**General questions**: Answer clearly and directly. Educate without jargon overload.

**Sizing questions**: Ask clarifying questions — number of endpoints, users, applications, sites — then give a tailored estimate.

**Pricing questions**: Give ballpark ranges openly. Always clarify these are estimates and final pricing is confirmed after a brief scoping call. Never refuse to give a range.

**Proposal requests**: Generate a structured scope of work with service description, what's included, pricing estimate, and next steps. Format it clearly.

**Comparison questions**: Be honest about what PurpleGuard does well (full-loop purple team, flexible subscription, MENA-focused). Don't trash competitors.

**Out of scope questions**: If something is clearly outside cybersecurity/PurpleGuard, politely redirect.

---

## TONE & STYLE
- Confident, direct, commercially aware
- Not salesy — be a trusted advisor
- Concise answers unless a detailed breakdown is needed
- Use bullet points for service features and pricing breakdowns
- Always end with a clear next step or offer to go deeper

If a prospect seems ready or asks about getting started, suggest: "You can reach our team at https://www.purpleguard.io or I can help you draft a scope of work right now."`;

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
          animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}
      />
    ))}
  </span>
);

const SUGGESTED_QUESTIONS = [
  "What services does PurpleGuard offer?",
  "How much does Managed EDR cost for 100 endpoints?",
  "We need a pentest for our web app — what's the price?",
  "What's the difference between PurpleSOC and PurpleSentinel?",
  "Can you create a proposal for email protection + EDR for 80 users?",
  "Do you support ISO 27001 compliance?",
];

export default function PurpleGuardAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    setStarted(true);

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.find((b) => b.type === "text")?.text || "Sorry, I couldn't generate a response.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) return <p key={i} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a855f7", marginTop: 16, marginBottom: 4 }}>{line.replace("## ", "")}</p>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{line.replace(/\*\*/g, "")}</p>;
      if (line.startsWith("- ")) return <p key={i} style={{ paddingLeft: 14, borderLeft: "2px solid #4c1d95", marginBottom: 3, color: "#cbd5e1" }}>{"· " + line.slice(2)}</p>;
      if (line.trim() === "") return <div key={i} style={{ height: 8 }} />;
      // inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} style={{ color: "#cbd5e1", marginBottom: 2, lineHeight: 1.65 }}>
          {parts.map((p, j) =>
            p.startsWith("**") && p.endsWith("**")
              ? <strong key={j} style={{ color: "#e2e8f0" }}>{p.replace(/\*\*/g, "")}</strong>
              : p
          )}
        </p>
      );
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080810; }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(168,85,247,0.15)} 50%{box-shadow:0 0 40px rgba(168,85,247,0.3)} }
        .msg-enter { animation: fadeSlideUp 0.3s ease forwards; }
        .send-btn:hover { background: #7c3aed !important; }
        .send-btn:active { transform: scale(0.95); }
        .chip:hover { background: rgba(168,85,247,0.15) !important; border-color: #a855f7 !important; color: #c084fc !important; cursor: pointer; }
        textarea:focus { outline: none; border-color: #7c3aed !important; box-shadow: 0 0 0 2px rgba(124,58,237,0.2) !important; }
        textarea { resize: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #4c1d95; border-radius: 2px; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#080810",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background grid */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        {/* Radial glow top */}
        <div style={{
          position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 600,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Header */}
        <header style={{
          position: "relative", zIndex: 10,
          borderBottom: "1px solid rgba(124,58,237,0.2)",
          background: "rgba(8,8,16,0.8)",
          backdropFilter: "blur(20px)",
          padding: "16px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Logo mark */}
            <div style={{
              width: 36, height: 36,
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "white",
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}>P</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "#f1f5f9", letterSpacing: "-0.02em" }}>PurpleGuard</div>
              <div style={{ fontSize: 10, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>AI Security Advisor</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span style={{ fontSize: 11, color: "#64748b", fontFamily: "'DM Mono', monospace" }}>ONLINE</span>
          </div>
        </header>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 5, maxWidth: 780, width: "100%", margin: "0 auto", padding: "0 16px" }}>

          {!started ? (
            /* Hero / Landing state */
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0", animation: "fadeSlideUp 0.5s ease" }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{
                  display: "inline-block",
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: 100,
                  padding: "6px 16px",
                  fontSize: 11,
                  color: "#a855f7",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: 20,
                }}>Attack + Defend · Full Loop Security</div>
                <h1 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 5vw, 44px)",
                  color: "#f1f5f9",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: 14,
                }}>
                  Your Security Advisor,<br />
                  <span style={{ background: "linear-gradient(90deg, #7c3aed, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Available 24/7
                  </span>
                </h1>
                <p style={{ color: "#64748b", fontSize: 15, maxWidth: 420, margin: "0 auto", lineHeight: 1.7 }}>
                  Ask about our services, get sizing estimates, explore pricing, or request a tailored proposal — instantly.
                </p>
              </div>

              {/* Suggested chips */}
              <div style={{ width: "100%", maxWidth: 640, marginBottom: 32 }}>
                <p style={{ fontSize: 11, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: 12, textAlign: "center" }}>Try asking</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button key={i} className="chip" onClick={() => sendMessage(q)} style={{
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: 100,
                      padding: "8px 14px",
                      fontSize: 12.5,
                      color: "#94a3b8",
                      fontFamily: "'DM Sans', sans-serif",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}>{q}</button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <InputBar input={input} setInput={setInput} loading={loading} sendMessage={sendMessage} handleKey={handleKey} inputRef={inputRef} />
            </div>
          ) : (
            /* Chat state */
            <>
              <div style={{ flex: 1, overflowY: "auto", padding: "24px 0 16px", display: "flex", flexDirection: "column", gap: 20 }}>
                {messages.map((msg, i) => (
                  <div key={i} className="msg-enter" style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                    gap: 10,
                    alignItems: "flex-start",
                  }}>
                    {msg.role === "assistant" && (
                      <div style={{
                        width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                        background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: 800, color: "white",
                        fontFamily: "'Syne', sans-serif",
                        marginTop: 2,
                        boxShadow: "0 0 14px rgba(168,85,247,0.35)",
                      }}>P</div>
                    )}
                    <div style={{
                      maxWidth: "82%",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                        : "rgba(15,15,28,0.9)",
                      border: msg.role === "user" ? "none" : "1px solid rgba(124,58,237,0.2)",
                      borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                      padding: "12px 16px",
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: msg.role === "user" ? "#f1f5f9" : "#cbd5e1",
                      boxShadow: msg.role === "assistant" ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
                    }}>
                      {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="msg-enter" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 800, color: "white", fontFamily: "'Syne', sans-serif",
                    }}>P</div>
                    <div style={{
                      background: "rgba(15,15,28,0.9)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: "4px 16px 16px 16px",
                      padding: "14px 18px",
                    }}>
                      <LoadingDots />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              <div style={{ paddingBottom: 20 }}>
                <InputBar input={input} setInput={setInput} loading={loading} sendMessage={sendMessage} handleKey={handleKey} inputRef={inputRef} />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{
          position: "relative", zIndex: 10,
          textAlign: "center", padding: "12px",
          borderTop: "1px solid rgba(124,58,237,0.1)",
          fontSize: 11, color: "#334155", fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.05em",
        }}>
          PURPLEGUARD · SMARTER SECURITY. STRONGER DEFENSE. · <a href="https://www.purpleguard.io" style={{ color: "#7c3aed", textDecoration: "none" }}>purpleguard.io</a>
        </div>
      </div>
    </>
  );
}

function InputBar({ input, setInput, loading, sendMessage, handleKey, inputRef }) {
  return (
    <div style={{
      width: "100%", maxWidth: 640, margin: "0 auto",
      background: "rgba(15,15,28,0.95)",
      border: "1px solid rgba(124,58,237,0.25)",
      borderRadius: 16,
      display: "flex", alignItems: "flex-end", gap: 10,
      padding: "10px 10px 10px 16px",
      boxShadow: "0 0 40px rgba(124,58,237,0.1), 0 8px 32px rgba(0,0,0,0.4)",
      animation: "glowPulse 3s ease-in-out infinite",
    }}>
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
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.5,
          maxHeight: 120,
          overflowY: "auto",
          caretColor: "#a855f7",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
        }}
      />
      <button
        className="send-btn"
        onClick={() => sendMessage()}
        disabled={loading || !input.trim()}
        style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: input.trim() && !loading ? "#7c3aed" : "rgba(124,58,237,0.2)",
          border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
          color: "white",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}
