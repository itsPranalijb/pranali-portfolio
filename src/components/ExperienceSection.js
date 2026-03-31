import React, { useState } from "react";

export default function ExperienceSection({ profile }) {
  const [expOpen, setExpOpen] = useState(0);
  return (
    <div className="timeline">
      {profile.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: 22, position: "relative", animation: `slideLeft 0.5s ease ${i * 0.15}s both` }}>
          <div className="tl-dot" style={{ background: exp.color, boxShadow: `0 0 14px ${exp.color}66` }} />
          <div className="card tl-card" onClick={() => setExpOpen(expOpen === i ? -1 : i)} style={{ borderLeftColor: exp.color, marginBottom: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#e2e8f0" }}>{exp.icon} {exp.company}</div>
                <div style={{ fontSize: 13, color: exp.color, marginTop: 3, fontWeight: 600, fontFamily: "'Courier New',monospace" }}>{exp.role}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "#4a5568", background: "rgba(255,255,255,0.03)", padding: "3px 10px", borderRadius: 4, fontFamily: "'Courier New',monospace" }}>{exp.period}</div>
                <div style={{ fontSize: 11, color: "#4a5568", marginTop: 4 }}>📍 {exp.location}</div>
              </div>
            </div>
            <div style={{ overflow: "hidden", maxHeight: expOpen === i ? 600 : 0, transition: "max-height 0.5s cubic-bezier(.4,0,.2,1)", marginTop: expOpen === i ? 14 : 0 }}>
              {exp.highlights.map((h, j) => (
                <div key={j} className="highlight-row" style={{ animation: expOpen === i ? `fadeInStagger 0.4s ease ${j * 0.08}s both` : "none" }}>
                  <span className="highlight-arrow" style={{ color: exp.color }}>▸</span><span>{h}</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 10, fontSize: 16, color: "#2a3545", transition: "transform 0.3s", transform: expOpen === i ? "rotate(180deg)" : "rotate(0)" }}>⌄</div>
          </div>
        </div>
      ))}
    </div>
  );
}
