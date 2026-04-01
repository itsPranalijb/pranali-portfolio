
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import NavTabs from "./components/NavTabs";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";

const profile = {
  name: "PRANALI BABHULGAONKAR",
  title: "Senior Full-Stack Developer",
  location: "Mumbai, Maharashtra, India",
  phone: "+91-9146132605",
  email: "itspranalijb@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranalijbabhulgaonkar/",
  summary: "Passionate Full-Stack Developer with 5 years of experience delivering scalable, high-performance applications using Java, Spring Boot, and React. Proven expertise in building robust RESTful APIs and responsive user interfaces in the fintech domain.",
  skills: {
    Backend: ["Java","Spring Boot","Spring DataJPA","Hibernate","Microservices","REST APIs"],
    Frontend: ["React","JavaScript","HTML5","CSS3"],
    Databases: ["MySQL","PostgreSQL"],
    Tools: ["Git","VS Code","Postman","SQL WorkBench","AWS"],
  },
  experience: [
    { company:"Deloitte USI", role:"Senior Full Stack Developer", location:"Mumbai, India", period:"July 2025 – Present", color:"#86B6F6", icon:"🏢",
      highlights:["Developing full-stack fintech applications using Java, Spring Boot, React, and MySQL for an Investment Management platform","Designed scalable RESTful APIs for portfolio holdings, financial data processing, and transaction management","Implemented complex portfolio calculations including asset allocation, CAGR, and real-time performance insights","Developed responsive React dashboards for portfolio tracking and investment analytics","Optimized backend performance with caching, efficient queries, and auth mechanisms","Leveraging GitHub Copilot to accelerate development and improve code quality"] },
    { company:"Birlasoft Limited", role:"Full Stack Developer", location:"Mumbai, Maharashtra", period:"Aug 2021 – June 2025", color:"#B6F686", icon:"💻",
      highlights:["Developed full-stack web apps for a credit card approval system using Java, Spring Boot, React, and MySQL","Built RESTful APIs for customer applications, real-time validation, and backend integrations","Integrated front-end and back-end components for seamless data flow and reduced latency","Designed and optimized SQL databases and managed data storage using UCM","Implemented unit testing using JUnit and Jest across backend and frontend modules","Performed NVDA and 508 accessibility testing for compliance and inclusivity"] },
    { company:"PHN Technology, Inc", role:"Software Developer Intern", location:"Pune, Maharashtra", period:"May 2020 – July 2020", color:"#F6D686", icon:"🚀",
      highlights:["Developed website applications using HTML5, CSS3, JavaScript","Worked on template designing for effective website accessibility"] },
    { company:"Hindustan Aeronautics Limited", role:"Software Engineer Intern", location:"Nashik, Maharashtra", period:"May 2019 – June 2019", color:"#F686B6", icon:"✈️",
      highlights:["Worked on IT department support for manufacturing and overhauling of aircrafts","Optimized IT department groups including MFG, IMM, payroll, networking and maintenance"] },
  ],
  education:{ university:"Savitribai Phule Pune University", degree:"Bachelor's of Engineering in Information Technology", cgpa:"8.29 CGPA", period:"June 2018 – Aug 2021", location:"Pune, Maharashtra" },
  publications:[{ title:"Mind Reading Computer Technology", source:"IJSRCSEIT Journal", date:"Aug 2017" }],
  certifications:[
    { title:"Learning the JavaScript Language", source:"LinkedIn", date:"Jun 2021" },
    { title:"React - The Complete Guide", source:"Udemy", date:"Dec 2021" },
    { title:"Java Programming Masterclass", source:"Udemy", date:"Mar 2022" },
    { title:"GenAI Models & Tooling", source:"Coursera", date:"May 2025" },
  ],
};

const codeSnippets = [
  `@RestController\n@RequestMapping("/api/v1")\npublic class PortfolioController {\n  @Autowired\n  private PortfolioService service;\n\n  @GetMapping("/holdings")\n  public ResponseEntity<List<Holding>>\n    getHoldings() {\n    return ResponseEntity.ok(\n      service.getAllHoldings());\n  }\n}`,
  `const Dashboard = () => {\n  const [data, setData] =\n    useState([]);\n  useEffect(() => {\n    fetch('/api/v1/portfolio')\n      .then(res => res.json())\n      .then(setData);\n  }, []);\n  return (\n    <div className="grid">\n      {data.map(item =>\n        <Card key={item.id}\n          data={item} />\n      )}\n    </div>\n  );\n};`,
  `@Service\npublic class TransactionService {\n  @Transactional\n  public Transaction process(\n    TransactionDTO dto) {\n    validate(dto);\n    Transaction tx =\n      mapper.toEntity(dto);\n    tx.setStatus("COMPLETED");\n    return repo.save(tx);\n  }\n}`,
  `SELECT p.portfolio_id,\n  p.name AS portfolio,\n  SUM(h.quantity *\n    h.current_price)\n    AS total_value,\n  COUNT(h.holding_id)\n    AS num_holdings\nFROM portfolios p\nJOIN holdings h\n  ON p.portfolio_id =\n    h.portfolio_id\nGROUP BY p.portfolio_id\nORDER BY total_value DESC;`,
  `@SpringBootApplication\n@EnableCaching\npublic class FinApp {\n  public static void main(\n    String[] args) {\n    SpringApplication\n      .run(FinApp.class, args);\n  }\n  @Bean\n  public SecurityFilterChain\n    filterChain(HttpSecurity http)\n    throws Exception {\n    return http.csrf()\n      .disable().build();\n  }\n}`,
  `import { Router } from 'react';\nimport Portfolio from\n  './Portfolio';\nimport Analytics from\n  './Analytics';\n\nconst App = () => (\n  <Router>\n    <Nav />\n    <Route path="/portfolio"\n      component={Portfolio} />\n    <Route path="/analytics"\n      component={Analytics} />\n  </Router>\n);`,
  `@Entity\n@Table(name = "holdings")\npublic class Holding {\n  @Id\n  @GeneratedValue\n  private Long id;\n\n  @Column(nullable = false)\n  private String ticker;\n\n  private Double quantity;\n  private Double avgPrice;\n  private Double currentPrice;\n\n  @ManyToOne\n  @JoinColumn(name =\n    "portfolio_id")\n  private Portfolio portfolio;\n}`,
  `function calculateCAGR(\n  beginVal, endVal, years) {\n  return (\n    Math.pow(\n      endVal / beginVal,\n      1 / years\n    ) - 1\n  ) * 100;\n}\n\nconst roi = calculateCAGR(\n  100000, 185000, 3);\nconsole.log(\n  roi.toFixed(2) + '%');`,
];

const CSS = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 20px rgba(134,182,246,0.3)} 50%{box-shadow:0 0 40px rgba(134,182,246,0.6),0 0 80px rgba(134,182,246,0.2)} }
  @keyframes glow { 0%,100%{text-shadow:0 0 10px rgba(134,182,246,0.5)} 50%{text-shadow:0 0 25px rgba(134,182,246,0.8),0 0 50px rgba(182,246,134,0.3)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes borderGlow { 0%,100%{border-color:rgba(134,182,246,0.15)} 50%{border-color:rgba(134,182,246,0.45)} }
  @keyframes slideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideLeft { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
  @keyframes scaleIn { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
  @keyframes typing { from{width:0} to{width:100%} }
  @keyframes blink { 0%,100%{border-color:transparent} 50%{border-color:#86B6F6} }
  @keyframes orbit { 0%{transform:rotate(0deg) translateX(60px) rotate(0deg)} 100%{transform:rotate(360deg) translateX(60px) rotate(-360deg)} }
  @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes fadeInStagger { from{opacity:0;transform:translateY(15px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ring { 0%{transform:scale(0.8);opacity:0.8} 100%{transform:scale(2.2);opacity:0} }
  @keyframes barFill { from{width:0%} to{width:var(--bar-w)} }
  @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes scanline { 0%{top:-5%} 100%{top:105%} }
  @keyframes termFlicker { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.8} 94%{opacity:1} 96%{opacity:0.9} 97%{opacity:1} }

  .profile-page { min-height:100vh; background:#0a0e14; color:#e2e8f0; font-family:'Segoe UI',system-ui,sans-serif; overflow-x:hidden; position:relative; }

  /* CODE RAIN BACKGROUND */
  .code-bg { position:fixed; inset:0; overflow:hidden; z-index:0; pointer-events:none; }
  .code-col { position:absolute; top:0; font-family:'Courier New',monospace; font-size:13px; line-height:1.6; white-space:pre; color:rgba(134,182,246,0.07); animation:termFlicker 8s ease infinite; }
  .code-col .kw { color:rgba(198,120,221,0.12); }
  .code-col .str { color:rgba(152,195,121,0.10); }
  .code-col .fn { color:rgba(97,175,239,0.12); }
  .code-col .cm { color:rgba(92,99,112,0.12); font-style:italic; }
  .code-col .num { color:rgba(209,154,102,0.10); }
  .code-col .ann { color:rgba(229,192,123,0.12); }

  /* Typing columns — highlighted active ones */
  .code-col-active { position:absolute; top:0; font-family:'Courier New',monospace; font-size:13px; line-height:1.6; white-space:pre; overflow:hidden; }
  .code-col-active .kw { color:rgba(198,120,221,0.45); }
  .code-col-active .str { color:rgba(152,195,121,0.40); }
  .code-col-active .fn { color:rgba(97,175,239,0.45); }
  .code-col-active .cm { color:rgba(92,99,112,0.35); font-style:italic; }
  .code-col-active .num { color:rgba(209,154,102,0.40); }
  .code-col-active .ann { color:rgba(229,192,123,0.45); }
  .code-col-active .typed-text { color:rgba(134,182,246,0.35); }
  .code-cursor { display:inline-block; width:8px; height:16px; background:rgba(134,182,246,0.6); animation:cursorBlink 0.8s step-end infinite; vertical-align:middle; margin-left:1px; box-shadow:0 0 8px rgba(134,182,246,0.4); }

  /* Scanline overlay */
  .scanline { position:fixed; inset:0; z-index:1; pointer-events:none; background:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px); }
  .scanline::after { content:''; position:absolute; left:0; width:100%; height:8%; background:linear-gradient(180deg, transparent, rgba(134,182,246,0.02), transparent); animation:scanline 8s linear infinite; }

  /* Terminal header bar */
  .term-bar { display:flex; align-items:center; gap:7px; padding:10px 16px; background:rgba(30,35,50,0.9); border-bottom:1px solid rgba(134,182,246,0.1); position:sticky; top:0; z-index:20; backdrop-filter:blur(16px); }
  .term-dot { width:12px; height:12px; border-radius:50%; }
  .term-title { flex:1; text-align:center; font-family:'Courier New',monospace; font-size:13px; color:#6b7c93; letter-spacing:1px; }
  .term-path { font-family:'Courier New',monospace; font-size:11px; color:rgba(134,182,246,0.5); }

  .hero { position:relative; padding:50px 24px 30px; text-align:center; z-index:5; }
  .avatar-wrap { position:relative; width:130px; height:130px; margin:0 auto 24px; }
  .avatar { width:130px; height:130px; border-radius:50%; background:linear-gradient(135deg,#86B6F6,#B6F686,#F686B6); display:flex; align-items:center; justify-content:center; font-size:42px; font-weight:800; color:#0a0f1a; animation:pulse 3s ease-in-out infinite; position:relative; z-index:2; overflow:hidden; border:3px solid rgba(134,182,246,0.3); }
  .avatar img { width:100%; height:100%; object-fit:cover; border-radius:50%; }
  .avatar-ring { position:absolute; inset:-8px; border-radius:50%; border:2px solid rgba(134,182,246,0.25); animation:ring 2.5s ease-out infinite; }
  .avatar-ring:nth-child(2) { animation-delay:0.8s; }
  .avatar-ring:nth-child(3) { animation-delay:1.6s; }
  .orbit-dot { position:absolute; top:50%; left:50%; width:8px; height:8px; margin:-4px; border-radius:50%; animation:orbit 6s linear infinite; z-index:3; }
  .orbit-dot::after { content:''; display:block; width:8px; height:8px; border-radius:50%; background:#86B6F6; box-shadow:0 0 10px #86B6F6; }
  .orbit-dot:nth-child(5) { animation-duration:8s; animation-direction:reverse; }
  .orbit-dot:nth-child(5)::after { background:#B6F686; box-shadow:0 0 10px #B6F686; width:6px; height:6px; }

  .hero-name-wrap { text-align:center; position:relative; display:inline-block; padding:0 10px; }
  .hero-name-wrap::before { content:'< '; font-family:'Courier New',monospace; font-size:20px; color:rgba(134,182,246,0.35); font-weight:400; }
  .hero-name-wrap::after { content:' />'; font-family:'Courier New',monospace; font-size:20px; color:rgba(134,182,246,0.35); font-weight:400; }
  .hero-name-line { position:absolute; bottom:-8px; left:5%; width:90%; height:2px; background:linear-gradient(90deg,transparent,#86B6F6,#B6F686,#F686B6,transparent); animation:shimmer 3s linear infinite; background-size:400% 100%; border-radius:2px; box-shadow:0 0 12px rgba(134,182,246,0.4); }
  .hero-name { font-size:32px; font-weight:900; letter-spacing:1px; background:linear-gradient(90deg,#86B6F6,#B6F686,#F6D686,#F686B6,#86B6F6); background-size:400% 100%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; filter:drop-shadow(0 0 15px rgba(134,182,246,0.4)); }
  .hero-title { font-size:14px; margin-top:8px; letter-spacing:2px; text-transform:uppercase; overflow:hidden; white-space:nowrap; display:inline-block; font-family:'Courier New',monospace; color:#86B6F6; border-right:2px solid #86B6F6; animation:typing 2.5s steps(30) 0.5s both, blink 0.8s step-end infinite; }
  .hero-loc { font-size:13px; color:#6b7c93; margin-top:10px; animation:slideUp 0.8s ease 1s both; }

  .contact-row { display:flex; justify-content:center; gap:10px; margin-top:18px; flex-wrap:wrap; animation:slideUp 0.8s ease 1.2s both; }
  .chip { font-size:11px; padding:7px 14px; border-radius:6px; background:rgba(134,182,246,0.06); border:1px solid rgba(134,182,246,0.15); color:#86B6F6; cursor:pointer; transition:all 0.3s; font-family:'Courier New',monospace; animation:borderGlow 3s ease-in-out infinite; }
  .chip:hover { background:rgba(134,182,246,0.15); transform:translateY(-2px); box-shadow:0 4px 15px rgba(134,182,246,0.15); }

  .nav { display:flex; justify-content:center; gap:4px; padding:10px 16px; flex-wrap:wrap; z-index:10; background:rgba(10,14,20,0.8); backdrop-filter:blur(12px); border-bottom:1px solid rgba(134,182,246,0.06); }
  .tab { padding:9px 20px; font-size:13px; border:none; cursor:pointer; border-radius:6px; transition:all 0.35s; background:transparent; color:#4a5568; font-weight:500; font-family:'Courier New',monospace; position:relative; }
  .tab.active { color:#86B6F6; background:rgba(134,182,246,0.1); font-weight:700; box-shadow:0 0 12px rgba(134,182,246,0.1); }
  .tab::before { content:''; position:absolute; bottom:-1px; left:50%; width:0; height:2px; background:#86B6F6; transition:all 0.35s; transform:translateX(-50%); box-shadow:0 0 8px rgba(134,182,246,0.5); }
  .tab.active::before { width:80%; }
  .tab:hover:not(.active) { color:#86B6F6; background:rgba(134,182,246,0.04); }

  .section { max-width:720px; margin:0 auto; padding:28px 20px 60px; position:relative; z-index:5; }

  .card { background:rgba(18,22,32,0.85); border:1px solid rgba(134,182,246,0.08); border-radius:10px; padding:22px; margin-bottom:18px; transition:all 0.4s; position:relative; overflow:hidden; backdrop-filter:blur(8px); }
  .card::before { content:''; position:absolute; top:0; left:0; width:100%; height:1px; background:linear-gradient(90deg, transparent, rgba(134,182,246,0.2), transparent); }
  .card::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(134,182,246,0.02),transparent); transition:left 0.7s; }
  .card:hover::after { left:150%; }
  .card:hover { border-color:rgba(134,182,246,0.2); transform:translateY(-2px); box-shadow:0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(134,182,246,0.05); }

  .stat-card { text-align:center; padding:20px 12px; border-radius:10px; background:rgba(134,182,246,0.04); border:1px solid rgba(134,182,246,0.08); transition:all 0.35s; cursor:default; }
  .stat-card:hover { transform:translateY(-6px) scale(1.03); box-shadow:0 12px 30px rgba(0,0,0,0.3); border-color:rgba(134,182,246,0.3); }
  .stat-icon { font-size:30px; animation:float 3s ease-in-out infinite; display:inline-block; }
  .stat-val { font-size:22px; font-weight:800; background:linear-gradient(135deg,#86B6F6,#B6F686); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-top:6px; font-family:'Courier New',monospace; }

  .timeline { position:relative; padding-left:32px; }
  .timeline::before { content:''; position:absolute; left:9px; top:0; bottom:0; width:2px; background:linear-gradient(180deg,#86B6F6,#B6F686,#F6D686,#F686B6); background-size:100% 200%; animation:gradientShift 4s ease infinite; }
  .tl-dot { position:absolute; left:-28px; top:8px; width:16px; height:16px; border-radius:50%; border:3px solid #0a0e14; z-index:2; transition:all 0.3s; }
  .tl-card { cursor:pointer; border-left:3px solid; }
  .tl-card:hover .tl-dot { transform:scale(1.4); }

  .skill-bar-wrap { margin-bottom:10px; }
  .skill-label { display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px; color:#8892a4; font-family:'Courier New',monospace; }
  .skill-pct { color:#86B6F6; font-weight:600; }
  .skill-track { height:6px; border-radius:3px; background:rgba(255,255,255,0.04); overflow:hidden; }
  .skill-fill { height:100%; border-radius:3px; background:linear-gradient(90deg,#86B6F6,#B6F686); width:var(--bar-w); animation:barFill 1.5s cubic-bezier(.4,0,.2,1) both; position:relative; }
  .skill-fill::after { content:''; position:absolute; top:0; right:0; width:30px; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25)); animation:shimmer 2s linear infinite; background-size:200% 100%; }

  .badge { display:inline-block; padding:4px 12px; border-radius:4px; font-size:11px; font-weight:600; margin:3px; transition:all 0.3s; cursor:default; font-family:'Courier New',monospace; }
  .badge:hover { transform:translateY(-3px) scale(1.05); }

  .highlight-row { display:flex; gap:8px; margin-bottom:8px; font-size:13px; color:#8892a4; line-height:1.7; }
  .highlight-arrow { flex-shrink:0; transition:all 0.3s; font-family:'Courier New',monospace; }
  .highlight-row:hover .highlight-arrow { transform:translateX(3px); }
  .highlight-row:hover { color:#a0b0c0; }

  .edu-icon { width:58px; height:58px; border-radius:10px; background:linear-gradient(135deg,#86B6F6,#B6F686); display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0; animation:float 4s ease-in-out infinite; }

  .pub-card { padding:16px; border-radius:8px; background:rgba(134,182,246,0.04); border:1px solid rgba(134,182,246,0.1); transition:all 0.3s; border-left:3px solid #86B6F6; }
  .pub-card:hover { background:rgba(134,182,246,0.08); transform:translateX(4px); }

  .footer { text-align:center; padding:30px 20px; font-size:12px; color:#2a3545; border-top:1px solid rgba(255,255,255,0.03); font-family:'Courier New',monospace; position:relative; z-index:5; }
  .footer span { color:#86B6F6; font-weight:600; }
  .section-title { margin:0 0 14px; font-size:16px; color:#86B6F6; font-family:'Courier New',monospace; font-weight:700; }
  .section-title::before { content:'> '; color:#B6F686; }
`;

/* Syntax highlight helper */
const javaKw = ["public","private","class","void","return","new","import","static","final","throws","interface","extends","implements","if","else","for","while","try","catch"];
const jsKw = ["const","let","var","function","return","import","from","export","default","async","await","if","else","for","of","in"];
const sqlKw = ["SELECT","FROM","JOIN","ON","WHERE","GROUP","BY","ORDER","DESC","ASC","AS","SUM","COUNT","INSERT","UPDATE","DELETE","CREATE","TABLE","INTO","VALUES"];
const annKw = ["@RestController","@RequestMapping","@Autowired","@GetMapping","@PostMapping","@Service","@Transactional","@Entity","@Table","@Id","@GeneratedValue","@Column","@ManyToOne","@JoinColumn","@SpringBootApplication","@EnableCaching","@Bean","@Override"];

function highlightCode(code) {
  return code.split('\n').map((line, li) => {
    let parts = [];
    let remaining = line;
    let key = 0;
    const allKw = [...javaKw, ...jsKw];
    // Annotations
    if (remaining.trim().startsWith('@')) {
      const ann = remaining.trim().split(/[\s(]/)[0];
      if (annKw.includes(ann)) {
        const idx = remaining.indexOf(ann);
        parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>);
        parts.push(<span key={key++} className="ann">{ann}</span>);
        remaining = remaining.slice(idx + ann.length);
      }
    }
    // SQL keywords
    sqlKw.forEach(kw => {
      if (remaining.includes(kw)) {
        const newParts = [];
        remaining.split(kw).forEach((seg, si, arr) => {
          newParts.push(seg);
          if (si < arr.length - 1) newParts.push(`__SQL__${kw}__`);
        });
        remaining = newParts.join('');
      }
    });
    // strings
    const tokens = remaining.split(/("[^"]*")/g);
    tokens.forEach(tok => {
      if (tok.startsWith('"') && tok.endsWith('"')) {
        parts.push(<span key={key++} className="str">{tok}</span>);
      } else if (tok.includes('__SQL__')) {
        const subToks = tok.split(/(__SQL__\w+__)/g);
        subToks.forEach(st => {
          const sqlMatch = st.match(/__SQL__(\w+)__/);
          if (sqlMatch) parts.push(<span key={key++} className="kw">{sqlMatch[1]}</span>);
          else {
            const words = st.split(/\b/);
            words.forEach(w => {
              if (allKw.includes(w)) parts.push(<span key={key++} className="kw">{w}</span>);
              else if (/^\d+$/.test(w)) parts.push(<span key={key++} className="num">{w}</span>);
              else parts.push(<span key={key++}>{w}</span>);
            });
          }
        });
      } else {
        const words = tok.split(/\b/);
        words.forEach(w => {
          if (allKw.includes(w)) parts.push(<span key={key++} className="kw">{w}</span>);
          else if (/^\d+$/.test(w)) parts.push(<span key={key++} className="num">{w}</span>);
          else parts.push(<span key={key++}>{w}</span>);
        });
      }
    });
    return <div key={li}>{parts}</div>;
  });
}

/* Code typing column */
const TypingColumn = ({ snippet, left, speed, startDelay }) => {
  const [charCount, setCharCount] = useState(0);
  const full = snippet;
  useEffect(() => {
    let timeout;
    const start = () => {
      timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setCharCount(prev => {
            if (prev >= full.length) { clearInterval(interval); setTimeout(() => setCharCount(0), 3000); setTimeout(start, 4000); return prev; }
            return prev + 1;
          });
        }, speed);
      }, startDelay);
    };
    start();
    return () => clearTimeout(timeout);
  }, [full.length, speed, startDelay]);
  const visible = full.slice(0, charCount);
  const lines = visible.split('\n');
  return (
    <div className="code-col-active" style={{ left, top: 30 }}>
      {lines.map((line, i) => <div key={i} className="typed-text">{line}{i === lines.length - 1 && charCount < full.length && charCount > 0 && <span className="code-cursor" />}</div>)}
    </div>
  );
};

/* Background code columns */
const CodeBackground = () => {
  const cols = [
    { left: '2%', snippet: 0, speed: 55, delay: 0 },
    { left: '20%', snippet: 1, speed: 45, delay: 2000 },
    { left: '40%', snippet: 2, speed: 50, delay: 4000 },
    { left: '60%', snippet: 3, speed: 60, delay: 1000 },
    { left: '78%', snippet: 4, speed: 48, delay: 3000 },
  ];
  const bgCols = [
    { left: '10%', snippet: 5 }, { left: '30%', snippet: 6 },
    { left: '50%', snippet: 7 }, { left: '70%', snippet: 0 },
    { left: '88%', snippet: 2 },
  ];
  return (
    <div className="code-bg">
      {bgCols.map((c, i) => (
        <div key={`bg${i}`} className="code-col" style={{ left: c.left, top: 20 + i * 40 }}>
          {highlightCode(codeSnippets[c.snippet])}
        </div>
      ))}
      {cols.map((c, i) => (
        <TypingColumn key={`typ${i}`} snippet={codeSnippets[c.snippet]} left={c.left} speed={c.speed} startDelay={c.delay} />
      ))}
    </div>
  );
};

// AnimCard, SkillBar, skillPcts are now unused after refactor and removed.
const tabIcons = { About:"~/about", Experience:"~/experience", Skills:"~/skills", Education:"~/education" };
const tabs = ["About","Experience","Skills","Education"];

export default function App() {
  const [active, setActive] = useState("About");
  // expOpen and setExpOpen are unused after refactor and removed.
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  return (
    <div className="profile-page">
      <style>{CSS}</style>
      <CodeBackground />
      <div className="scanline" />

      {/* Terminal Bar */}
      <div className="term-bar">
        <div className="term-dot" style={{ background:"#ff5f57" }} />
        <div className="term-dot" style={{ background:"#febc2e" }} />
        <div className="term-dot" style={{ background:"#28c840" }} />
        <div className="term-title">pranali@dev ~ portfolio</div>
        <div className="term-path">~/developer/portfolio</div>
      </div>

      {/* Hero */}
      <Hero profile={profile} ready={ready} />

      {/* Nav */}
      <NavTabs tabs={tabs} active={active} setActive={setActive} tabIcons={tabIcons} />

      {/* Content */}
      <div className="section">
        {active === "About" && <AboutSection profile={profile} />}
        {active === "Experience" && <ExperienceSection profile={profile} />}
        {active === "Skills" && <SkillsSection profile={profile} />}
        {active === "Education" && <EducationSection profile={profile} />}
      </div>

      <div className="footer">
        <span> ❤️ By <span>Pranali Babhulgaonkar</span></span>
      </div>
    </div>
  );
}