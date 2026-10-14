"use client";

import { useEffect } from "react";
import { EMAIL } from "@/lib/site";

// The tenant, rental-analysis, and management-question forms below POST
// here. Deploy apps-script/Code.gs as a Google Apps Script Web App (see
// the setup steps in that file) and paste the resulting /exec URL below —
// every submission then lands as a row in your Google Sheet and emails you.
// Until this is set, the forms show a reminder instead of pretending to send.
const HOSTLY_FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwAgUeSBCrRlD17rEED69ssBunFGLAzqcqqQdvAsMLDKj5IIhENxTgj-FwKVT7KPiX-vA/exec";

export default function HostlyScript() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    if (menuBtn && nav) {
      const onMenuClick = () => {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      };
      const onNavClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === "A") {
          nav.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        }
      };
      menuBtn.addEventListener("click", onMenuClick);
      nav.addEventListener("click", onNavClick);
      cleanups.push(() => {
        menuBtn.removeEventListener("click", onMenuClick);
        nav.removeEventListener("click", onNavClick);
      });
    }

    // contact tabs
    const tabs = [
      {
        tab: document.getElementById("tab-analysis"),
        panel: document.getElementById("panel-analysis") as HTMLElement | null,
      },
      {
        tab: document.getElementById("tab-question"),
        panel: document.getElementById("panel-question") as HTMLElement | null,
      },
    ];
    tabs.forEach((item) => {
      if (!item.tab) return;
      const onClick = () => {
        tabs.forEach((other) => {
          const active = other === item;
          other.tab?.setAttribute("aria-selected", String(active));
          if (other.panel) other.panel.hidden = !active;
        });
      };
      item.tab.addEventListener("click", onClick);
      cleanups.push(() => item.tab?.removeEventListener("click", onClick));
    });

    // real form submissions — tenant enquiry, rental analysis, management
    // question. Each POSTs to HOSTLY_FORM_ENDPOINT (a Google Apps Script Web
    // App) which appends a row to a Sheet and emails a notification.
    document.querySelectorAll<HTMLFormElement>(".form-card").forEach((form) => {
      const btn = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]'
      );
      const note = form.querySelector<HTMLElement>(".form-note");
      if (!btn) return;
      const idleLabel = btn.textContent;
      const idleNote = note ? note.textContent : "";
      let resetTimer: ReturnType<typeof setTimeout> | null = null;

      const setNote = (text: string) => {
        if (note) note.textContent = text;
      };
      const restoreAfter = (ms: number) => {
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          btn.textContent = idleLabel;
          setNote(idleNote || "");
        }, ms);
      };

      const onSubmit = (e: Event) => {
        e.preventDefault();

        if (!HOSTLY_FORM_ENDPOINT || HOSTLY_FORM_ENDPOINT.indexOf("PASTE_YOUR") === 0) {
          setNote("Form isn't connected yet — see apps-script/Code.gs to enable it.");
          restoreAfter(4000);
          return;
        }

        const data: Record<string, string> = {};
        new FormData(form).forEach((value, key) => {
          data[key] = String(value);
        });
        data.formType = form.dataset.formType || "unknown";

        btn.disabled = true;
        btn.textContent = "Sending…";
        setNote("");

        fetch(HOSTLY_FORM_ENDPOINT, {
          method: "POST",
          // text/plain avoids a CORS preflight that Apps Script web apps can't answer
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.status !== "ok") throw new Error(res.message || "Unknown error");
            btn.textContent = form.dataset.done || "Thanks — we'll be in touch";
            setNote("Received — thank you!");
            form.reset();
          })
          .catch((err) => {
            btn.textContent = idleLabel;
            setNote(`Something went wrong — please email ${EMAIL} directly.`);
            console.error("Hostly form submission failed:", err);
          })
          .finally(() => {
            btn.disabled = false;
            restoreAfter(5000);
          });
      };

      form.addEventListener("submit", onSubmit);
      cleanups.push(() => {
        form.removeEventListener("submit", onSubmit);
        if (resetTimer) clearTimeout(resetTimer);
      });
    });

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
