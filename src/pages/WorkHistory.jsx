// src/pages/WorkHistory.jsx
import "../App.css";
import { Link } from "react-router-dom";

export default function WorkHistory() {
  return (
    <div className="cv-wrapper" style={{ padding: "2rem" }}>
      <main className="main-content">
        <h1 style={{ marginBottom: "1rem" }}>💼 Tidigare arbetslivserfarenhet</h1>

        <section className="project-box">
          <h2>📦 Jobbtitel – Företag AB</h2>
          <p>Beskrivning av rollen, ansvar och vad du lärde dig.</p>
        </section>

        <section className="project-box" style={{ marginTop: "2rem" }}>
          <h2>🛒 Jobbtitel – Annat Företag AB</h2>
          <p>Kundservice, samarbete i team, problemlösning och kommunikation.</p>
        </section>

        <Link to="/" className="accordion-button" style={{ marginTop: "2rem" }}>
          ⬅ Tillbaka till CV-sidan
        </Link>
      </main>
    </div>
  );
}
