"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

import {
  defaultTheme,
  isThemeId,
  themes,
  themeStorageKey,
  type ThemeId,
} from "@/lib/themes";

const themeChangeEvent = "portfolio-theme-change";

function getThemeSnapshot(): ThemeId {
  const activeTheme = document.documentElement.dataset.theme ?? null;
  return isThemeId(activeTheme) ? activeTheme : defaultTheme;
}

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => window.removeEventListener(themeChangeEvent, onStoreChange);
}

function updateThemeColor(theme: ThemeId) {
  const selectedTheme = themes.find((option) => option.id === theme);
  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  if (selectedTheme && themeColor) {
    themeColor.setAttribute("content", selectedTheme.background);
  }
}

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTheme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => defaultTheme,
  );
  const selectorId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    updateThemeColor(selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const applyTheme = (theme: ThemeId) => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The visual choice still applies when storage is unavailable.
    }

    window.dispatchEvent(new Event(themeChangeEvent));
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % themes.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + themes.length) % themes.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = themes.length - 1;
    }

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    const nextTheme = themes[nextIndex];
    applyTheme(nextTheme.id);
    optionRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        ref={triggerRef}
        className="theme-switcher__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={selectorId}
        aria-haspopup="dialog"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="theme-switcher__current-swatch" aria-hidden="true" />
        <span>Theme</span>
        <span className="sr-only">: {themes.find((theme) => theme.id === selectedTheme)?.name}</span>
      </button>

      {isOpen ? (
        <div
          className="theme-switcher__popover"
          id={selectorId}
          role="dialog"
          aria-label="Choose a color theme"
        >
          <div className="theme-switcher__options" role="radiogroup">
            {themes.map((theme, index) => (
              <button
                key={theme.id}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                className="theme-switcher__option"
                type="button"
                role="radio"
                aria-checked={selectedTheme === theme.id}
                tabIndex={selectedTheme === theme.id ? 0 : -1}
                onClick={() => applyTheme(theme.id)}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
              >
                <span
                  className="theme-switcher__swatch"
                  style={{
                    "--swatch-background": theme.background,
                    "--swatch-accent": theme.accent,
                  } as React.CSSProperties}
                  aria-hidden="true"
                />
                <span className="theme-switcher__option-copy">
                  <span>{theme.name}</span>
                  <small>{theme.description}</small>
                </span>
                <span className="theme-switcher__check" aria-hidden="true">
                  {selectedTheme === theme.id ? "✓" : ""}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
