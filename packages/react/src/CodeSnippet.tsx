// @ts-nocheck
import React, { useState } from "react";

/**
 * CodeSnippet
 * React wrapper for Mayvio UI Code Snippet viewer.
 * Displays tabs for code snippets (HTML, CSS, JS) and handles copy to clipboard action.
 *
 * Props:
 * - snippets: object containing tab keys and string contents, e.g. { html: '<div></div>', css: '.div{}' }
 * - className: custom class names
 */
export function CodeSnippet({ snippets = {}, className = "" }) {
  const availableTabs = Object.keys(snippets).filter((key) => snippets[key]);
  const [activeTab, setActiveTab] = useState(availableTabs[0] || "");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = snippets[activeTab] || "";
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (availableTabs.length === 0) return null;

  return (
    <div className={`snippet-section ${className}`}>
      <div className="snippet-tabs" role="tablist" aria-label="Code language selection">
        {availableTabs.map((tab) => (
          <button
            key={tab}
            className={`snippet-tab ${tab === activeTab ? "active" : ""}`}
            role="tab"
            aria-selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="code-block">
        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          type="button"
          aria-label={copied ? "Copied code" : "Copy code"}
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
        <pre>
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}
