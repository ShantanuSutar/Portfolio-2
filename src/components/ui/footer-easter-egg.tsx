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
        <span className="time-travel-trigger__symbol" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
        </span>
        <span>Click to time travel</span>
      </button>
      {dialog}
    </>
  );
}
