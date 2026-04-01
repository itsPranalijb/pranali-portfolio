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
          <a className="chip" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer">📧 {profile.email}</a>
          <a className="chip" href={`tel:${profile.phone.replace(/[^+0-9]/g, '')}`}>📱 {profile.phone}</a>
          <a className="chip" href={profile.linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(profile.name)}`} target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a className="chip" href={profile.github || `https://github.com/${encodeURIComponent(profile.name.replace(/\s+/g, ''))}`} target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
        </div>
      </div>
    </div>
  );
}
