import React from "react";

const skillPcts = { Java:95,"Spring Boot":92,"Spring DataJPA":88,Hibernate:85,Microservices:90,"REST APIs":94,React:91,JavaScript:93,HTML5:90,CSS3:88,MySQL:89,PostgreSQL:84,Git:92,"VS Code":90,Postman:88,"SQL WorkBench":82,AWS:78 };

function SkillBar({ name, pct }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-label"><span>{name}</span><span className="skill-pct">{pct}%</span></div>
      <div className="skill-track"><div className="skill-fill" style={{ "--bar-w": pct + "%" }} /></div>
    </div>
  );
}

export default function SkillsSection({ profile }) {
  return (
    <div>
      {Object.entries(profile.skills).map(([cat, items], ci) => (
        <div className="card" key={cat} style={{ marginBottom: 16 }}>
          <h3 className="section-title">{cat === "Backend" ? "⚙️" : cat === "Frontend" ? "🎨" : cat === "Databases" ? "🗄️" : "🛠️"} {cat.toLowerCase()}</h3>
          {items.map((sk, si) => <SkillBar key={sk} name={sk} pct={skillPcts[sk] || 80} />)}
        </div>
      ))}
      <div className="card">
        <h3 className="section-title">import * from 'skills'</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {Object.values(profile.skills).flat().map((sk, i) => {
            const colors = ["#86B6F6", "#B6F686", "#F6D686", "#F686B6"];
            const c = colors[i % colors.length];
            return <span key={sk} className="badge" style={{ background: `${c}12`, color: c, border: `1px solid ${c}25` }}>{sk}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
