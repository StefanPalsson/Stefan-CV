// src/pages/LIAInfo.jsx
import "../App.css";
import { Link } from "react-router-dom";

export default function LIAInfo() {
  return (
    <div className="cv-wrapper" style={{ padding: "2rem" }}>
      <main className="main-content">
        <h1 style={{ marginBottom: "1rem" }}>🛠️ LIA-platser</h1>

        <p>Under min utbildning har jag haft två LIA-perioder:</p>

        <section className="project-box" style={{ marginTop: "2rem" }}>
          <h2>📍 LIA 1 – Företagsnamn</h2>
          <p>
            Här arbetade jag med frontendutveckling i React, deltog i dagliga
            standups och byggde komponenter för interna verktyg.
          </p>
          <ul>
            <li>Byggde dashboards i React</li>
            <li>Fick inblick i agil utveckling (Scrum)</li>
            <li>Integrerade REST-API:er</li>
          </ul>
        </section>

        <section className="project-box" style={{ marginTop: "2rem" }}>
          <h2>📍 LIA 2 – Företagsnamn</h2>
          <p>
            Under LIA 2 fokuserade jag på ett fullstack-projekt i .NET & React.
            Jag deltog i kodgranskningar och lärde mig CI/CD-flöden.
          </p>
          <ul>
            <li>Utvecklade REST-API:er i C#/.NET</li>
            <li>Jobbade med autentisering via JWT</li>
            <li>Fick ansvar för en kontaktformulärsmodul</li>
          </ul>
        </section>

        <Link to="/" className="accordion-button" style={{ marginTop: "2rem" }}>
          ⬅ Tillbaka till CV-sidan
        </Link>
      </main>
    </div>
  );
}
