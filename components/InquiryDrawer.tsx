"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";

/** Vertical "Inquiry Form" tab on the right edge that slides open a form drawer. */
export default function InquiryDrawer() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      document.addEventListener("keydown", onKey);
      wasOpen.current = true;
      return () => document.removeEventListener("keydown", onKey);
    }
    // Hand focus back to the tab after closing, but not on first mount
    if (wasOpen.current) tabRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        ref={tabRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`fixed top-1/2 right-0 z-990 flex -translate-y-1/2 rotate-180 cursor-pointer items-center rounded-r-md border border-l-0 border-grey-200 bg-white px-2.5 py-4 text-sm font-semibold tracking-[.12em] text-navy-800 uppercase shadow-md transition-[background-color,color,translate,opacity] [writing-mode:vertical-rl] hover:bg-grey-100 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 ${
          open ? "pointer-events-none translate-x-full opacity-0" : ""
        }`}
      >
        Inquiry Form
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-1000 bg-navy-900/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Inquiry form"
        inert={!open}
        className={`fixed top-0 right-0 z-1001 flex h-dvh w-full max-w-md flex-col bg-white shadow-lg transition-[translate] duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close inquiry form"
          className="absolute top-3 right-3 flex size-10 cursor-pointer items-center justify-center rounded-md text-grey-600 transition-colors hover:bg-grey-100 hover:text-navy-800 focus-visible:outline-2 focus-visible:outline-cyan-500"
        >
          <X className="size-5" />
        </button>
        {/* my-auto centres the form; it only scrolls on screens too short to fit it */}
        <div className="flex flex-1 overflow-y-auto px-6 pt-14 pb-6">
          <div className="my-auto w-full">
            <ContactForm stacked />
          </div>
        </div>
      </aside>
    </>
  );
}
