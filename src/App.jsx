import "./App.css";
import { useState } from "react";
import en from "./lang/en";
import sv from "./lang/sv";

const languages = { en, sv };

export default function App() {
  const [activeTab, setActiveTab] = useState("tekniker");
  const [showChiliDetails, setShowChiliDetails] = useState(false);
  const [showLeontinaDetails, setShowLeontinaDetails] = useState(false);
  const [showWhackDetails, setShowWhackDetails] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const t = languages[lang];

  const switchLanguage = () => {
    const newLang = lang === "en" ? "sv" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="cv-wrapper">
      <aside className="sidebar">
        <img src="/jag2.jpg" alt="Stefan Pålsson" className="profile-pic" />
        <h1 className="name">Stefan Pålsson</h1>
        <h1 className="title">{t.title}</h1>
        <p className="school">{t.education}</p>

        <section className="contact">
          <h2>{t.contact}</h2>
          <p>📧 stefanpalsson86@gmail.com</p>
          <p>🌐 github.com/stefan</p>
          <p>🔗 linkedin.com/in/stefan</p>
          <p>📞 0760-110286</p>
        </section>

        <section className="languages">
          <h2>{t.languages}</h2>
          <ul>
            <li>{t.swedish}</li>
            <li>{t.english}</li>
          </ul>
        </section>

        <section className="program">
          <h2>{t.tools}</h2>
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
            <h2>👨‍💻 {t.aboutTitle}</h2>
            <hr />
            {t.aboutParagraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>

          <div className="course-wrapper">
            <div className="course-box">
              <h3>📚 {t.coursesTitle}</h3>
              <ul>
                {t.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="lang-switch-wrapper">
              <span className="finger-icon">👉</span>
              <img
                src={lang === "en" ? "/flags/se.svg" : "/flags/gb.svg"}
                alt={lang === "en" ? "Svenska" : "English"}
                className="flag-icon"
                onClick={switchLanguage}
              />
              <span className="lang-label">
                {lang === "en" ? "Byt språk" : "Change language"}
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2>{t.skills}</h2>
          <div className="tab-buttons">
            <div className="tab-wrapper">
              <span className="finger-icon">👉</span>
              <button
                onClick={() => setActiveTab("tekniker")}
                className={activeTab === "tekniker" ? "active" : ""}
              >
                {t.techTab}
              </button>
            </div>
            <div className="tab-wrapper">
              <span className="finger-icon">👉</span>
              <button
                onClick={() => setActiveTab("styrkor")}
                className={activeTab === "styrkor" ? "active" : ""}
              >
                {t.strengthTab}
              </button>
            </div>
          </div>

          <div className="tech-tags">
            {activeTab === "tekniker"
              ? Object.entries(t.tekniker).map(([kategori, tags]) => (
                  <div key={kategori} style={{ marginBottom: "1rem", width: "100%" }}>
                    <h3 style={{ marginBottom: "0.5rem", color: "#2c3e50" }}>
                      {kategori}
                    </h3>
                    <div className="tech-badge-container">
                      {tags.map((tag, index) => (
                        <button key={index}>{tag}</button>
                      ))}
                    </div>
                  </div>
                ))
              : t.styrkor.map((item, index) => (
                  <button key={index}>{item}</button>
                ))}
          </div>
        </section>

        <section className="project-section">
          <h2>{t.projects}</h2>
          <ul>
            {/* ChiliExplorer */}
            <li>
              <div className="project-container chili">
                <div className="project-box">
                  <p className="project-title">ChiliExplorer</p>
                  <p>– {t.chili.desc}</p>
                  <p>{t.chili.detail}</p>
                </div>
                <button
                  className="accordion-button"
                  onClick={() => setShowChiliDetails(!showChiliDetails)}
                >
                  {showChiliDetails ? t.hideDetails : t.showDetails}
                </button>
                {showChiliDetails && (
                  <div className="accordion-content chili">
                    <h4>🧪 {t.techAndMethods}</h4>
                    <ul className="tech-icon-list">
                      {t.chili.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <p style={{ fontStyle: "italic" }}>{t.chili.note}</p>
                  </div>
                )}
                <div className="tech-badges">
                  {t.chili.badges.map((b, i) => (
                    <span key={i}>{b}</span>
                  ))}
                </div>
                <div className="project-image-grid">
                  <img src="/chiliexplorer.png" alt="ChiliExplorer 1" />
                  <img src="/chiliexplorer2.png" alt="ChiliExplorer 2" />
                </div>
              </div>
            </li>

            {/* Leontinas-blog */}
            <li>
              <div className="project-container leontina">
                <div className="project-box">
                  <p className="project-title">Leontinas-blog</p>
                  <p>– {t.leontina.desc}</p>
                  <p>{t.leontina.detail}</p>
                </div>
                <button
                  className="accordion-button"
                  onClick={() => setShowLeontinaDetails(!showLeontinaDetails)}
                >
                  {showLeontinaDetails ? t.hideDetails : t.showDetails}
                </button>
                {showLeontinaDetails && (
                  <div className="accordion-content leontina">
                    <h4>🧪 {t.techAndMethods}</h4>
                    <ul className="tech-icon-list">
                      {t.leontina.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <p style={{ fontStyle: "italic" }}>{t.leontina.note}</p>
                  </div>
                )}
                <div className="tech-badges">
                  {t.leontina.badges.map((b, i) => (
                    <span key={i}>{b}</span>
                  ))}
                </div>
                <div className="project-image-grid">
                  <img src="/leontina1.png" alt="Leontinas-blog preview 1" />
                  <img src="/leontina2.png" alt="Leontinas-blog preview 2" />
                </div>
              </div>
            </li>

            {/* Whack-a-Mole */}
            <li>
              <div className="project-container whack">
                <div className="project-box">
                  <p className="project-title">Whack-a-Mole</p>
                  <p>– {t.whack.desc}</p>
                  <p>{t.whack.detail}</p>
                </div>
                <button
                  className="accordion-button"
                  onClick={() => setShowWhackDetails(!showWhackDetails)}
                >
                  {showWhackDetails ? t.hideDetails : t.showDetails}
                </button>
                {showWhackDetails && (
                  <div className="accordion-content whack">
                    <h4>🧪 {t.techAndMethods}</h4>
                    <ul className="tech-icon-list">
                      {t.whack.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <p style={{ fontStyle: "italic" }}>{t.whack.note}</p>
                  </div>
                )}
                <div className="tech-badges">
                  {t.whack.badges.map((b, i) => (
                    <span key={i}>{b}</span>
                  ))}
                </div>
                <div className="project-image-grid">
                  <img src="/whack-a-mole2.png" alt="Whack-a-Mole preview" className="whack-img" />
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
