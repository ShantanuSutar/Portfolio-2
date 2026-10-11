"use client";

import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { previousPortfolioLink } from "@/data/portfolio";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function FooterEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const triggerElement = triggerRef.current;
    const pageContent = document.querySelector<HTMLElement>(".portfolio-frame");
    const wasPageInert = pageContent?.inert ?? false;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const currentPadding = Number.parseFloat(
        window.getComputedStyle(document.body).paddingRight,
      );
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }
    if (pageContent) {
      pageContent.inert = true;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements.at(0);
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (pageContent) {
        pageContent.inert = wasPageInert;
      }
      triggerElement?.focus();
    };
  }, [isOpen]);

  const dialog = isOpen
    ? createPortal(
        <div
          className="time-travel-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            ref={dialogRef}
            id={dialogId}
            className="time-travel-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              className="time-travel-dialog__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close time-travel preview"
            >
              <X aria-hidden="true" size={18} strokeWidth={1.75} />
            </button>

            <div className="time-travel-dialog__heading">
              <span>Portfolio archive</span>
              <h2 id={titleId}>Previous portfolio</h2>
            </div>

            <div className="time-travel-stage">
              <div className="time-travel-portal" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="time-travel-window">
                <Image
                  src="/images/previous-portfolio-preview.png"
                  alt="Preview of Shantanu Sutar's previous portfolio homepage"
                  width={1440}
                  height={900}
                  sizes="(max-width: 640px) 78vw, 35rem"
                />
              </div>
            </div>

            <a
              className="time-travel-dialog__link"
              href={previousPortfolioLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit previous portfolio (opens in a new tab)"
            >
              <span>Visit previous portfolio</span>
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.75} />
            </a>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        ref={triggerRef}
        className="time-travel-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="time-travel-trigger__object"
          width="96"
          height="120"
          viewBox="0 0 96 120"
          aria-hidden="true"
          focusable="false"
          fill="none"
        >
          <g strokeLinejoin="round" strokeLinecap="round">
            <path
              d="M13 25v72m70-72v72"
              stroke="var(--accent)"
              strokeWidth="5"
              opacity="0.42"
            />
            <path
              d="M28 28c-1 16 4 23 15 32 3 2 3 6 0 8-11 9-16 16-15 32h40c1-16-4-23-15-32-3-2-3-6 0-8 11-9 16-16 15-32Z"
              fill="var(--surface)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <path
              d="M32 42c3 8 8 13 15 18h2c7-5 12-10 15-18-9 3-23 3-32 0Z"
              fill="var(--accent)"
              opacity="0.8"
            />
            <path
              d="M31 98c3-3 8-5 12-10 2-2 3-5 5-6 2 1 3 4 5 6 4 5 9 7 12 10Z"
              fill="var(--accent)"
              opacity="0.8"
            />
            <path
              className="time-travel-trigger__sand"
              d="M48 64v17"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="1 3"
            />
            <path
              d="M33 33c0 10 2 16 8 22m-8 37c0-8 3-14 8-19"
              stroke="var(--foreground)"
              strokeWidth="2"
              opacity="0.38"
            />
            <path
              d="M20 27v73m56-73v73"
              stroke="var(--accent)"
              strokeWidth="4"
            />
            <path
              d="M19 29v69m56-69v69"
              stroke="var(--foreground)"
              opacity="0.32"
            />
            <path
              d="M9 22v7c0 6 17 10 39 10s39-4 39-10v-7M9 101v7c0 6 17 10 39 10s39-4 39-10v-7"
              fill="var(--accent)"
              stroke="var(--accent)"
              opacity="0.72"
            />
            <ellipse cx="48" cy="101" rx="39" ry="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <ellipse cx="48" cy="22" rx="39" ry="9" fill="var(--accent)" />
            <ellipse cx="48" cy="21" rx="31" ry="6" fill="var(--surface)" />
            <path d="M15 28c14 7 52 7 66 0m-66 81c14 7 52 7 66 0" stroke="var(--foreground)" opacity="0.3" />
            <path d="M54 22a7 3 0 1 0-7 3m0 0-3-2m3 2-4 1" stroke="var(--accent)" strokeWidth="1.4" />
            <circle cx="48" cy="109" r="2" fill="var(--accent)" />
          </g>
        </svg>
        <span className="sr-only">Click to time travel</span>
      </button>
      {dialog}
    </>
  );
}
