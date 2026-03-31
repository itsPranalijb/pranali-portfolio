import React from "react";

export default function EducationSection({ profile }) {
  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
          <div className="edu-icon">🎓</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#e2e8f0" }}>{profile.education.university}</div>
            <div style={{ fontSize: 13, color: "#86B6F6", marginTop: 5, fontWeight: 600, fontFamily: "'Courier New',monospace" }}>{profile.education.degree}</div>
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span className="badge" style={{ background: "rgba(182,246,134,0.1)", color: "#B6F686", border: "1px solid rgba(182,246,134,0.2)", fontSize: 12, fontWeight: 700 }}>{profile.education.cgpa}</span>
              <span style={{ fontSize: 12, color: "#4a5568", fontFamily: "'Courier New',monospace" }}>{profile.education.period} · {profile.education.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 className="section-title">research.publish()</h3>
        <div className="pub-card">
          <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 14 }}>{profile.publications[0].title}</div>
          <div style={{ fontSize: 12, color: "#4a5568", marginTop: 5, fontFamily: "'Courier New',monospace" }}>{profile.publications[0].source} · {profile.publications[0].date}</div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 className="section-title">cert.verifyAll({profile.certifications.length})</h3>
        {profile.certifications.map((cert, ci) => {
          const colors = ["#B6F686", "#86B6F6", "#F6D686", "#F686B6"];
          return <div key={ci} className="pub-card" style={{ borderLeftColor: colors[ci % colors.length], marginBottom: ci < profile.certifications.length - 1 ? 10 : 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6 }}>
              <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 14 }}>{cert.title}</div>
              <span className="badge" style={{ background: `${colors[ci % colors.length]}15`, color: colors[ci % colors.length], border: `1px solid ${colors[ci % colors.length]}30`, margin: 0 }}>{cert.source}</span>
            </div>
            <div style={{ fontSize: 12, color: "#4a5568", marginTop: 5, fontFamily: "'Courier New',monospace" }}>{cert.date}</div>
          </div>;
        })}
      </div>
    </div>
  );
}
