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
          <h2>📍 LIA 1 – Räckesbutiken, Ängelholm</h2>
          <p>
            Under min första LIA inledde jag projektet med att skapa mockups i Figma
            för en inspirations- och köphjälpsguide till Räckesbutiken, som tillverkar och säljer räcken.
            Projektet realiserades med React och TypeScript och fokuserade på att vägleda kunder
            till rätt produkt genom ett interaktivt frågeflöde.
          </p>
          <ul>
            <li>🎨 Figma-mockups i projektets uppstart</li>
            <li>⚛️ React + TypeScript</li>
            <li>🧩 Dynamisk logik via JSON och state</li>
            <li>📸 Bildkarusell med react-responsive-carousel</li>
            <li>🧠 useState, useEffect och useCallback</li>
            <li>💡 Fokus på UX och enkel navigering</li>
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
