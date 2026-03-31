import React from "react";

export default function NavTabs({ tabs, active, setActive, tabIcons }) {
  return (
    <nav className="nav">
      {tabs.map(t => (
        <button key={t} className={`tab ${active === t ? "active" : ""}`} onClick={() => setActive(t)}>
          {tabIcons[t]}
        </button>
      ))}
    </nav>
  );
}
