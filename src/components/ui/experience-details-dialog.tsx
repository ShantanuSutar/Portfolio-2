"use client";

import { X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

type ExperienceDetailsDialogProps = {
  children: ReactNode;
  dialogId: string;
  trigger: ReactNode;
};

function isOutsideDialog(
  dialog: HTMLDialogElement,
  clientX: number,
  clientY: number,
) {
  const bounds = dialog.getBoundingClientRect();

  return (
    clientX < bounds.left ||
    clientX > bounds.right ||
    clientY < bounds.top ||
    clientY > bounds.bottom
  );
}

export function ExperienceDetailsDialog({
  children,
  dialogId,
  trigger,
}: ExperienceDetailsDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = `${dialogId}-title`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pointerStartedOutside = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      const padding = Number.parseFloat(
        window.getComputedStyle(document.body).paddingRight,
      );
      document.body.style.paddingRight = `${padding + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  const openDialog = (triggerElement: HTMLButtonElement) => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) {
      return;
    }

    triggerRef.current = triggerElement;
    triggerElement.setAttribute("aria-expanded", "true");
    dialog.showModal();
    dialog.scrollTop = 0;
    closeRef.current?.focus({ preventScroll: true });

    const detailIndex = triggerElement.dataset.experienceIndex;
    const selectedDetails = detailIndex
      ? dialog.querySelector<HTMLElement>(
          `[data-experience-detail="${detailIndex}"]`,
        )
      : null;
    const header = dialog.querySelector<HTMLElement>(
      ".experience-details-dialog__header",
    );

    if (selectedDetails && header) {
      dialog.scrollTop = Math.max(
        0,
        selectedDetails.offsetTop - header.offsetHeight - 16,
      );
    }

    setIsOpen(true);
  };

  const handleTriggerClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const triggerElement = target.closest<HTMLButtonElement>(
      "[data-experience-dialog-trigger]",
    );

    if (!triggerElement || !event.currentTarget.contains(triggerElement)) {
      return;
    }

    openDialog(triggerElement);
  };

  return (
    <>
      <div className="experience-details-controller" onClick={handleTriggerClick}>
        {trigger}
      </div>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className="experience-details-dialog"
        aria-labelledby={titleId}
        onClose={() => {
          setIsOpen(false);
          pointerStartedOutside.current = false;
          triggerRef.current?.setAttribute("aria-expanded", "false");
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onPointerDown={(event) => {
          pointerStartedOutside.current =
            event.target === event.currentTarget &&
            isOutsideDialog(event.currentTarget, event.clientX, event.clientY);
        }}
        onClick={(event) => {
          if (
            pointerStartedOutside.current &&
            event.target === event.currentTarget &&
            isOutsideDialog(event.currentTarget, event.clientX, event.clientY)
          ) {
            event.currentTarget.close();
          }
          pointerStartedOutside.current = false;
        }}
      >
        <header className="experience-details-dialog__header">
          <h2 id={titleId}>Experience details</h2>
          <button
            ref={closeRef}
            className="experience-details-dialog__close"
            type="button"
            aria-label="Close experience details"
            onClick={() => dialogRef.current?.close()}
          >
            <X aria-hidden="true" size={18} strokeWidth={1.75} />
          </button>
        </header>
        <div className="experience-details-dialog__content">{children}</div>
      </dialog>
    </>
  );
}
