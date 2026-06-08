// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";

/**
 * CommandPalette
 * React wrapper for Mayvio UI Command Palette.
 *
 * Props:
 * - isOpen: boolean showing display state
 * - onClose: callback event when closed (or when triggering open state toggles)
 * - commands: array of { command: string, title: string, description: string, shortcut: string }
 * - onCommandSelect: callback triggered when item is chosen
 * - placeholder: input search placeholder
 * - className: custom class names
 */
export function CommandPalette({
  isOpen = false,
  onClose,
  commands = [],
  onCommandSelect,
  placeholder = "Search commands…",
  className = ""
}) {
  const [query, setQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setFocusedIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleGlobalKeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose(); else onClose(true);
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, [isOpen, onClose]);

  const filteredCommands =
    query.trim() === ""
      ? commands
      : commands.filter(
          (cmd) =>
            (cmd.title || cmd.command || "").toLowerCase().includes(query.toLowerCase()) ||
            (cmd.description || "").toLowerCase().includes(query.toLowerCase())
        );

  const handleKeyDown = (e) => {
    if (filteredCommands.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const idx = focusedIndex >= 0 ? focusedIndex : 0;
      const cmd = filteredCommands[idx];
      if (cmd) {
        onCommandSelect(cmd);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`command-palette is-open ${className}`}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="command-palette-panel">
        <div className="command-palette-header">
          <h3>Command Palette</h3>
          <button className="command-palette-close" aria-label="Close command palette" onClick={onClose}>
            ×
          </button>
        </div>
        <input
          ref={inputRef}
          className="command-palette-input"
          type="search"
          placeholder={placeholder}
          aria-label="Search commands"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setFocusedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
        />
        <div className="command-palette-list" role="listbox">
          {filteredCommands.map((cmd, index) => (
            <button
              key={cmd.command}
              className={`command-palette-item ${index === focusedIndex ? "focused" : ""}`}
              data-command={cmd.command}
              role="option"
              aria-selected={index === focusedIndex}
              onClick={() => {
                onCommandSelect(cmd);
                onClose();
              }}
              type="button"
            >
              <div>
                <h4>{cmd.title || cmd.command}</h4>
                {cmd.description && <p>{cmd.description}</p>}
              </div>
              {cmd.shortcut && <span>{cmd.shortcut}</span>}
            </button>
          ))}
          {filteredCommands.length === 0 && (
            <div style={{ padding: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              No results found
            </div>
          )}
        </div>
        <p className="command-palette-note">Tip: press Ctrl + K or Cmd + K to open quickly.</p>
      </div>
    </div>
  );
}
