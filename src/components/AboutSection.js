import React from "react";

export default function AboutSection({ profile }) {
  return (
    <div>
      <div className="card">
        <h3 className="section-title">whoami</h3>
        <p style={{ lineHeight: 1.8, color: "#8892a4", fontSize: 14, margin: 0 }}>{profile.summary}</p>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 className="section-title">stats --verbose</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 14 }}>
          {[{ l: "Experience", v: "5 Years", icon: "💼", d: 0 }, { l: "Domain", v: "Fintech", icon: "🏦", d: 1 }, { l: "Companies", v: "2", icon: "🏢", d: 2 }, { l: "CGPA", v: "8.29", icon: "🎓", d: 3 }].map(q => (
            <div key={q.l} className="stat-card">
              <div className="stat-icon">{q.icon}</div>
              <div className="stat-val">{q.v}</div>
              <div style={{ fontSize: 11, color: "#4a5568", marginTop: 3, fontFamily: "'Courier New',monospace" }}>{q.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 className="section-title">tech.stack()</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {Object.values(profile.skills).flat().map((sk, i) => (
            <span key={sk} className="badge" style={{ background: "rgba(134,182,246,0.08)", color: "#86B6F6", border: "1px solid rgba(134,182,246,0.15)" }}>{sk}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 16 }}>
        <div className="card">
          <h3 className="section-title" style={{ fontSize: 14 }}>publication</h3>
          <div className="pub-card">
            <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 13 }}>{profile.publications[0].title}</div>
            <div style={{ fontSize: 11, color: "#4a5568", marginTop: 4 }}>{profile.publications[0].source} · {profile.publications[0].date}</div>
          </div>
        </div>
        <div className="card">
          <h3 className="section-title" style={{ fontSize: 14 }}>certifications[{profile.certifications.length}]</h3>
          {profile.certifications.map((cert, ci) => {
            const colors = ["#B6F686", "#86B6F6", "#F6D686", "#F686B6"];
            return <div key={ci} className="pub-card" style={{ borderLeftColor: colors[ci % colors.length], marginBottom: ci < profile.certifications.length - 1 ? 10 : 0 }}>
              <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 13 }}>{cert.title}</div>
              <div style={{ fontSize: 11, color: "#4a5568", marginTop: 4, display: "flex", justifyContent: "space-between" }}>
                <span>{cert.source}</span><span style={{ color: colors[ci % colors.length] }}>{cert.date}</span>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
