import React from "react";

export default function Hero({ profile, ready }) {
  return (
    <div className="hero">
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="avatar-wrap" style={{ animation: ready ? "scaleIn 0.7s cubic-bezier(.2,.8,.3,1.2) both" : "none" }}>
          <div className="avatar-ring" /><div className="avatar-ring" /><div className="avatar-ring" />
          <div className="avatar">
            <img src="/profile.jpg" alt="Pranali Babhulgaonkar" onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = 'PB'; }} />
          </div>
          <div className="orbit-dot" /><div className="orbit-dot" />
        </div>
        <div style={{ textAlign: "center", animation: ready ? "slideUp 0.6s ease 0.3s both" : "none" }}>
          <div className="hero-name-wrap">
            <span className="hero-name">{profile.name}</span>
            <div className="hero-name-line" />
          </div>
        </div>
        <div style={{ overflow: "hidden", textAlign: "center", marginTop: 6 }}>
          <div className="hero-title">{profile.title}</div>
        </div>
        <div className="hero-loc">📍 {profile.location}</div>
        <div className="contact-row">
          {[`📧 ${profile.email}`, `📱 ${profile.phone}`, "🔗 LinkedIn"].map((c, i) => (
            <span key={i} className="chip">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
