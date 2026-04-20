"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "pg_consent";

type Choice = "accepted" | "rejected";

function dispatchChange(accepted: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("pg-consent-changed", { detail: { accepted } })
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored !== "accepted" && stored !== "rejected") {
      setVisible(true);
    }
  }, []);

  const choose = (choice: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    dispatchChange(choice === "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-start gap-3 sm:flex-1">
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="text-sm leading-relaxed text-slate-200">
              <p className="font-medium text-white">We use cookies</p>
              <p className="mt-1 text-slate-300">
                We use a small number of cookies to understand how visitors use
                our site (Google Analytics). You can accept or reject this — your
                choice is saved in your browser. See our{" "}
                <Link
                  href="/privacy#cookies"
                  className="font-medium text-purple-400 underline-offset-2 hover:underline"
                >
                  privacy policy
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 text-sm font-medium text-slate-200 transition hover:bg-white/5"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-purple-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-400"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
