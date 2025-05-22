import "./App.css";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("tekniker");
  const [showChiliDetails, setShowChiliDetails] = useState(false);
  const [showLeontinaDetails, setShowLeontinaDetails] = useState(false);

  const tekniker = {
    Frontend: [
      "🌐 HTML5", "🎨 CSS", "📜 JavaScript", "🌀 TypeScript",
      "⚛️ React", "🔺 Angular", "🚀 Next.js", "🎨 SASS", 
      "🎨 Tailwind CSS", "📘 Storybook", "📱 Responsiv design", "🌗 Dark mode"
    ],
    "Backend & Databaser": [
      "🌿 Node.js", "🐘 PHP", "🔗 API", "🔄 REST API",
      "🍃 MongoDB", "🗃️ MySQL", "📂 SQL", "🛒 E-handel DB",
      "💳 Betalsystem", "💻 WebSockets"
    ],
    "CMS & E-handel": ["📰 Headless WP", "🛍️ E-handelsutv.", "🛒 WooCommerce"],
    "Verktyg & Ramverk": [
      "🛠️ Arkitektur", "🎯 Figma", "💻 Visual Studio Code", "🐙 Git",
      "📘 Storybook", "📅 Agila projektmetoder", "📊 Kanban", "🔁 jQuery"
    ],
    Övrigt: [
      "📐 UX/UI", "🔌 Integrationer", "🌍 SEO", 
      "🛡️ Säkerhet", "⚡ Testning", "🔁 Agila metoder"
    ],
  };

  const styrkor = [
    "🎯 Målmedveten", "👨‍👩‍👧‍👦 Lagspelare", "🧘‍♂️ Tålmodig",
    "🚀 Driven", "🛠️ Lösningsorienterad", "🧠 Snabblärd",
    "🎨 Kreativ", "📅 Strukturerad", "📢 Kommunikativ"
  ];

  return (
    <div className="cv-wrapper">
      <aside className="sidebar">
        <img src="/jag2.jpg" alt="Stefan Andersson" className="profile-pic" />
        <h1 className="name">Stefan Pålsson</h1>
        <h1 className="title">Webbutvecklare</h1>
        <p className="school">
          Frontendutvecklare - YH-utbildning, EC Utbildning (2022–2024)
        </p>

        <section className="contact">
          <h2>Kontakt</h2>
          <p>📧 stefanpalsson86@gmail.com</p>
          <p>🌐 github.com/stefan</p>
          <p>🔗 linkedin.com/in/stefan</p>
          <p>📞 0760-110286</p>
        </section>

        <section className="languages">
          <h2>Språk</h2>
          <ul>
            <li>Svenska – Modersmål</li>
            <li>Engelska – Flytande</li>
          </ul>
        </section>

        <section className="program">
          <h2>Program</h2>
          <ul>
            <li>Figma</li>
            <li>Visual Studio Code</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
          </ul>
        </section>
      </aside>

      <main className="main-content">
        <section className="about-wrapper">
          <section className="about-section">
            <h2>👨‍💻 Om mig</h2>
            <hr />
            <p>Jag är en engagerad frontendutvecklare som brinner för att bygga digitala upplevelser som är både funktionella och visuellt tilltalande. Min styrka ligger i att förstå användarens perspektiv och omsätta det till snygga, responsiva gränssnitt med tydlig struktur.</p>
            <p>Jag föredrar att arbeta med moderna tekniker som React och TypeScript, gärna tillsammans med verktyg som Tailwind, Vite och modulär CSS. Kombinationen av logik och design tilltalar mig – och jag tycker det är riktigt kul att grotta ner mig i detaljer för att få allt att kännas rätt.</p>
            <p>UX-design, tillgänglighet och genomtänkt typografi är något jag alltid har i åtanke när jag bygger. Mitt mål är att koden ska vara lika ren som gränssnittet är lätt att använda.</p>
          </section>

          <div className="course-box">
            <h3>📚 Kurser</h3>
            <ul>
              <li>UX/UI Design</li>
              <li>Responsiv webbdesign</li>
              <li>JavaScript & React</li>
              <li>Agil utveckling</li>
              <li>Databaser & Firebase</li>
              <li>React Native & mobilutveckling</li>
              <li>Designsystem & komponentbibliotek</li>
              <li>SASS & avancerad CSS</li>
              <li>Versionshantering med Git & GitHub</li>
              <li>Webbanalys & användartestning</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Tekniker</h2>
          <div className="tab-buttons">
            <button onClick={() => setActiveTab("tekniker")} className={activeTab === "tekniker" ? "active" : ""}>👉 Tekniker</button>
            <button onClick={() => setActiveTab("styrkor")} className={activeTab === "styrkor" ? "active" : ""}>👉 Styrkor</button>
          </div>

          <div className="tech-tags">
            {activeTab === "tekniker"
              ? Object.entries(tekniker).map(([kategori, tags]) => (
                  <div key={kategori} style={{ marginBottom: "1rem", width: "100%" }}>
                    <h3 style={{ marginBottom: "0.5rem", color: "#2c3e50" }}>{kategori}</h3>
                    <div className="tech-badge-container">
                      {tags.map((tag, index) => <button key={index}>{tag}</button>)}
                    </div>
                  </div>
                ))
              : styrkor.map((item, index) => <button key={index}>{item}</button>)
            }
          </div>
        </section>

        <section className="project-section">
          <h2>Projekt</h2>
          <ul>
            <li>
              <p className="project-title">ChiliExplorer</p> – Webbapp byggd i React för att visa och utforska olika chilisorter.
              <div className="project-description">
                <p>Användaren kan söka efter chilisorter, läsa om styrka, smak, ursprung och skötselråd. Gränssnittet är uppdelat i flera sidor som navigeras med React Router. Sidan är responsiv, stiliserad med modulär CSS, och innehåller bland annat sökfunktion, hamburgermeny och dynamisk visning av chili-info.</p>
                <button className="accordion-button" onClick={() => setShowChiliDetails(!showChiliDetails)}>
                  {showChiliDetails ? "▲ Dölj tekniker & metoder" : "▼ Visa tekniker & metoder"}
                </button>
                {showChiliDetails && (
                  <div className="accordion-content chili">
                    <h4>🧪 Tekniker och metoder:</h4>
                    <ul>
                      <li>🔁 React Router v6 – routing mellan sidor</li>
                      <li>📌 useState, useParams, useLocation, useNavigate</li>
                      <li>🔍 Sökfunktion med realtidsfiltrering</li>
                      <li>🌶 Dynamisk rendering av chili-info via URL-parametrar</li>
                      <li>📱 Flexbox och positionering för responsivitet</li>
                      <li>🌈 CSS-animeringar, typografi och färgkontrast</li>
                      <li>🎯 Custom-komponenter (Header, Footer, HamburgerMenu, Search)</li>
                      <li>🎨 Sidunika bakgrunder och sticky header</li>
                      <li>🖱️ Egen muspekare med PNG-bilder för UX</li>
                    </ul>
                    <p style={{ fontStyle: "italic" }}>
                      Projektet är ett pågående arbete där fler funktioner och förbättringar planeras.
                    </p>
                  </div>
                )}
              </div>
              <div className="tech-badges">
                <span>React</span><span>React Router</span><span>useState</span><span>useNavigate</span>
                <span>useParams</span><span>useLocation</span><span>Custom hooks</span><span>Flexbox</span><span>Modular CSS</span>
              </div>
              <div className="project-image-grid">
                <img src="/chiliexplorer.png" alt="ChiliExplorer preview 1" />
                <img src="/chiliexplorer2.png" alt="ChiliExplorer preview 2" />
              </div>
            </li>

            <li>
              <p className="project-title">Leontinas-blog</p> – En personlig blogg byggd i Angular till min dotter där hon kan lägga upp tankar, bilder och berättelser.
              <div className="project-description">
                <p>Bloggen är anpassad för en yngre målgrupp med ett lekfullt men tydligt gränssnitt. Den är responsiv och har enkel struktur byggd med komponentbaserad Angular-arkitektur.</p>
                <button className="accordion-button" onClick={() => setShowLeontinaDetails(!showLeontinaDetails)}>
                  {showLeontinaDetails ? "▲ Dölj tekniker & metoder" : "▼ Visa tekniker & metoder"}
                </button>
                {showLeontinaDetails && (
                  <div className="accordion-content leontina">
                    <h4>🧪 Tekniker och metoder:</h4>
                    <ul>
                      <li>🧱 Angular med komponentbaserad arkitektur</li>
                      <li>🧭 Routing med RouterModule & dynamiska URL:er</li>
                      <li>🛡️ Route guard (OwnerGuard) för skyddade admin-vyer</li>
                      <li>📝 FormsModule för kontaktformulär & kommentarsfält</li>
                      <li>🎠 Karusell med interaktiv vy & scroll-logik</li>
                      <li>💾 Lagring i localStorage via tjänst</li>
                      <li>🎨 CSS-design anpassad för yngre användare</li>
                    </ul>
                    <p style={{ fontStyle: "italic" }}>
                      Leontinas blogg är skapad med barnvänlig estetik och enkel interaktion i fokus.
                    </p>
                  </div>
                )}
              </div>
              <div className="tech-badges">
                <span>Angular</span><span>RouterModule</span><span>Route Guard</span><span>FormsModule</span>
                <span>localStorage</span><span>Responsiv design</span><span>UX för barn</span>
              </div>
              <div className="project-image-grid">
                <img src="/leontina1.png" alt="Leontinas-blog preview 1" />
                <img src="/leontina2.png" alt="Leontinas-blog preview 2" />
                <img src="/leontina3.png" alt="Leontinas-blog preview 3" />
              </div>
            </li>

            <li><p className="project-title">Meditationsappen</p> – Musikuppladdning, offline-stöd, Firebase.</li>
            <li><p className="project-title">Whack-a-Mole</p> – Grupprojekt med topplista, UI och backend.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
