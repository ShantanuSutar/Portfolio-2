"use client";

import { useEffect } from "react";

const pointerQuery = "(hover: hover) and (pointer: fine)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function InteractiveBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const pointerMedia = window.matchMedia(pointerQuery);
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery);
    let animationFrame: number | undefined;
    let trackingEnabled = false;
    let pointerX = 0;
    let pointerY = 0;

    const hideBackground = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
      }

      root.style.setProperty("--cursor-opacity", "0");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;

      if (animationFrame !== undefined) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${pointerX}px`);
        root.style.setProperty("--cursor-y", `${pointerY}px`);
        root.style.setProperty("--cursor-opacity", "0.28");
        animationFrame = undefined;
      });
    };

    const enableTracking = () => {
      if (trackingEnabled) {
        return;
      }

      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("blur", hideBackground);
      document.documentElement.addEventListener("pointerleave", hideBackground);
      trackingEnabled = true;
    };

    const disableTracking = () => {
      if (!trackingEnabled) {
        return;
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideBackground);
      document.documentElement.removeEventListener("pointerleave", hideBackground);
      trackingEnabled = false;
      hideBackground();
    };

    const syncTracking = () => {
      if (pointerMedia.matches && !reducedMotionMedia.matches) {
        enableTracking();
      } else {
        disableTracking();
      }
    };

    pointerMedia.addEventListener("change", syncTracking);
    reducedMotionMedia.addEventListener("change", syncTracking);
    syncTracking();

    return () => {
      pointerMedia.removeEventListener("change", syncTracking);
      reducedMotionMedia.removeEventListener("change", syncTracking);
      disableTracking();
      root.style.removeProperty("--cursor-x");
      root.style.removeProperty("--cursor-y");
      root.style.removeProperty("--cursor-opacity");
    };
  }, []);

  return null;
}
