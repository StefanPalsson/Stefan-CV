// === sv.js ===
export default {
  title: "Frontendutvecklare",
  education: "Frontendutvecklare – YH‑utbildning, EC Utbildning (2022–2024)",
  contact: "Kontakt",
  languages: "Språk",
  swedish: "Svenska – Modersmål",
  english: "Engelska – Flytande",
  tools: "Program",
  aboutTitle: "Om mig",
  aboutParagraphs: [
    "Jag är en passionerad frontendutvecklare som älskar att skapa digitala upplevelser som är både funktionella och visuellt tilltalande.",
    "Jag trivs med moderna verktyg som React och TypeScript, samt Tailwind, Vite och modulär CSS.",
    "UX, tillgänglighet och typografi tänker jag alltid på när jag kodar. Mitt mål är ren kod och användarvänliga gränssnitt."
  ],
  coursesTitle: "Kurser",
  courses: [
    "UX/UI Design", "Responsiv webbdesign", "JavaScript & React", "Agil utveckling",
    "Databaser & Firebase", "React Native & mobilutveckling", "Designsystem & komponentbibliotek",
    "SASS & avancerad CSS", "Git & GitHub", "Webbanalys & användartestning"
  ],
  skills: "Kompetenser",
  techTab: "Teknologier",
  strengthTab: "Styrkor",
  projects: "Projekt",
  techAndMethods: "Tekniker & metoder",
  showDetails: "▼ Visa tekniker & metoder",
  hideDetails: "▲ Dölj tekniker & metoder",
  meditation: "Musikuppladdning, offline‑stöd, Firebase.",
  langSwitchText: "Byt språk",
  liaButton: "LIA‑info",

  tekniker: {
    Frontend: [
      "🌐 HTML5", "🎨 CSS", "📌 JavaScript", "🌀 TypeScript", "⚛️ React", "🔺 Angular",
      "🚀 Next.js", "🎨 SASS", "🎨 Tailwind CSS", "📘 Storybook", "📱 Responsiv design",
      "🌗 Dark mode", "🎯 Z‑pattern layout", "🖌️ CSS‑animationer", "🧱 Komponent‑UI",
      "🖼️ Bildkarusell", "🧭 React Router v6"
    ],
    "Backend & Databaser": [
      "🌿 Node.js", "🐘 PHP", "🔗 API", "🔄 REST API", "🌳 MongoDB", "💃 MySQL",
      "📂 SQL", "📬 E‑handel DB", "💳 Betalsystem", "💻 WebSockets",
      "🛡️ JWT", "📦 Firebase (Firestore, Auth, Storage)", "🗃️ PostgreSQL",
      "🧩 Entity Framework Core", "🧠 ASP.NET Core Identity"
    ],
    "CMS & E‑handel": [
      "📰 Headless WordPress", "📬 E‑handel utveckling", "📬 WooCommerce"
    ],
    "Verktyg & Ramverk": [
      "🛠️ Arkitektur", "🎯 Figma", "💻 Visual Studio Code", "🤝 Git", "📘 Storybook",
      "🗓️ Agila metoder", "📊 Kanban", "🔁 jQuery", "🧪 Swagger UI", "📦 Vite"
    ],
    Övrigt: [
      "📐 UX/UI", "🔌 Integrationer", "🌍 SEO", "💡 Säkerhet", "⚡ Testning",
      "🔁 Agil arbetsmetodik", "📸 Lazy loading", "🎵 Audio API", "📦 State‑hantering",
      "🧠 useState/useEffect/useCallback", "📋 Form‑validering", "🎨 Anpassad muspekare",
      "🧭 Dynamisk routing", "📂 JSON‑logik", "📱 React Native", "💬 Modal‑UI",
      "🧘 Lugn mobil‑UX", "🎡 Karusellbibliotek"
    ]
  },

  styrkor: [
    "🎯 Målmedveten", "👨‍👧‍👦 Lagspelare", "🧘‍♂️ Tålmodig",
    "🚀 Driven", "🛠️ Lösningsorienterad", "🧠 Snabblärd",
    "🎨 Kreativ", "🗓️ Strukturerad", "📢 Kommunikativ"
  ],

  lia: {
    lia1: {
      desc: "LIA-projekt hos Räckesbutiken – digital inspirations- och köpguidning.",
      detail: "På Räckesbutiken i Ängelholm skapade jag mockups i Figma för en digital köpguide. Projektet byggdes i React och TypeScript och hjälper kunder välja rätt räcke genom dynamiska frågor.",
      points: [
        "🧪 Frågebaserat guidningsflöde",
        "🖼️ Produktbilder med galleri",
        "🌟 Länkning till 3D-konfigurator",
        "💬 Kontaktformulär i modal",
        "🎨 Figma-mockups vid projektstart",
        "⚛️ React + TypeScript",
        "🧩 Dynamisk logik via JSON och state",
        "📸 Karusell med react-responsive-carousel",
        "🧠 useState, useEffect, useCallback",
        "💡 Fokus på UX och enkel navigering"
      ],
      note: "Förenklade köpprocessen för olika räckestyper.",
      badges: ["React", "TypeScript", "Komponentbaserad", "JSON-logik", "Responsiv", "Karusell"]
    },
    lia2: {
      desc: "LIA-projekt hos Linespotting – mobil meditationsapp.",
      detail: "På Linespotting arbetade jag med en mobil meditationsapp byggd i React Native. Användare kan lyssna på spår, ladda upp egen musik och använda appen offline. Jag ansvarade för flera centrala funktioner och lärde mig mycket om mobilutveckling.",
      points: [
        "📱 React Native (0.72 → 0.76)",
        "📦 Nedladdning & offline‑uppspelning",
        "🔊 Ljuduppladdning av användare",
        "🧩 Firebase‑setup för auth & mediahantering",
        "⚙️ State‑hantering med React Hooks",
        "🌙 Fokus på minimalistisk, lugn UI/UX"
      ],
      note: "Skapad för inre lugn och åtkomst även offline.",
      badges: ["React Native", "Firebase", "Offline‑stöd", "Media‑hantering", "Hooks", "UX"]
    }
  },

  chili: {
    desc: "React-app för att utforska olika chilisorter.",
    detail: "Användare kan bläddra mellan chilityper, lära sig om hetta, smak och ursprung. UI byggt med React Router, conditional rendering och responsiv design.",
    points: [
      "🔄 React Router v6",
      "⚙️ useState, useParams, useNavigate",
      "🔎 Sökning och filtrering i realtid",
      "🔄 Dynamisk rendering via URL-parametrar",
      "📏 Responsiv layout med Flexbox",
      "🖌️ CSS-animationer, typografi, färgkontrast",
      "🛠️ Egna komponenter",
      "🔝 Sticky header",
      "🖌️ Anpassad muspekare (PNG)"
    ],
    note: "Pågående projekt – nya funktioner planeras.",
    badges: ["React", "React Router", "useState", "useNavigate", "useParams", "Custom Hooks", "CSS Modules", "Flexbox"]
  },

  leontina: {
    desc: "Angular-blogg för min dotter med berättelser och bilder.",
    detail: "Barnvänligt gränssnitt med egna komponenter och karusell. Angular-baserad arkitektur med routing och localStorage.",
    points: [
      "📏 Komponentbaserad Angular-arkitektur",
      "🗂️ RouterModule & dynamiska URL:er",
      "🔒 RouteGuard för admin",
      "📄 FormsModule för kontakt/kommentarer",
      "🎡 Anpassad karusell",
      "📝 PostService med localStorage",
      "📐 UX anpassad för barn"
    ],
    note: "Skapad för berättelser och enkel interaktion.",
    badges: ["Angular", "RouterModule", "RouteGuard", "FormsModule", "localStorage", "UX för barn", "Responsiv CSS"]
  },

  whack: {
    desc: "Grupprojekt med highscore, UI och backend.",
    detail: "Byggt i modulär JavaScript med Firebase, ljud, DOM-manipulation och realtidsuppdateringar via Firestore.",
    points: [
      "🧩 Modulär JavaScript (import/export)",
      "📦 Firebase Firestore-integration",
      "🕹️ DOM-manipulation & event listeners",
      "🎯 Poänglogik och reaktionstiming",
      "📜 Formulärvalidering & användarfeedback",
      "🔥 Realtidsuppdatering via onSnapshot",
      "📊 Dynamisk Top 10-highscore",
      "🎵 Ljud och CSS-animationer",
      "📋 Agil utveckling med Trello",
      "🎨 Anpassat CSS-grid-layout"
    ],
    note: "Grupputvecklat spelprojekt med agilt arbetssätt och tydliga roller.",
    badges: ["JavaScript", "DOM", "Modules", "Firebase", "Firestore", "CSS", "HTML", "Event Listeners", "Trello"]
  },

  time4family: {
    desc: "React + TypeScript-app för familjeminnen.",
    detail: "Familjeapp som följer UX/UI-principer som Z-pattern och lazy loading. Innehåller bloggsidor, galleri och kontakt. Byggd i TypeScript, React Router och dark mode-stöd.",
    points: [
      "🌀 TypeScript med React",
      "🌗 Dark mode via Context API",
      "📷 Lazy loading av bilder med `loading='lazy'`",
      "🧭 React Router v6 för navigation",
      "🧱 Modulär komponentstruktur",
      "🎯 Z-pattern-layout och läsbarhet",
      "💡 UX/UI-principer i layout och interaktion",
      "🎨 CSS-teman och färgsättning",
      "📱 Responsiv design"
    ],
    note: "Byggd för att bevara och lyfta fram familjeresor och minnen.",
    badges: ["React", "TypeScript", "React Router", "Dark Mode", "UX/UI", "Responsiv design"]
  },

  todo: {
    desc: "Grupprojekt: säker Todo API med C# och ASP.NET.",
    detail: "Utvecklat i grupp med ASP.NET Core Identity, rollbaserad access, Entity Framework Core med PostgreSQL och lagerarkitektur. Alla endpoints skyddade via policies och JWT tokens.",
    points: [
      "🔐 ASP.NET Core Identity för autentisering",
      "🔑 Rollbaserad auktorisering (admin, user)",
      "🛡️ JWT Bearer Token-autentisering",
      "🎯 Separation via Service- och Controller-lager",
      "🗃️ Entity Framework Core (EF Core) + PostgreSQL",
      "📦 ApplicationContext med DbSets och DI",
      "📜 Custom DTOs för output",
      "🧪 Swagger UI för API-tester",
      "🔄 CRUD API med REST-struktur",
      "👥 Grupparbete via Git"
    ],
    note: "Byggt som grupprojekt med verklighetsnära arkitektur och säker hantering.",
    badges: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT", "Identity", "Swagger", "REST API", "Git"]
  },

  reddit: {
    desc: "Mini Reddit-klon med dummy API och post-routing.",
    detail: "Förenklad Reddit-app byggd i React med axios, dynamisk routing, återanvändbara komponenter och realtidsuppdateringar.",
    points: [
      "⚛️ React-funktionella komponenter med hooks",
      "🔁 useState & useEffect för asynkrona data",
      "📡 Axios för hämtning från dummyjson.com",
      "🧭 React Router v6 för dynamisk routing",
      "🧱 Komponentbaserad filstruktur",
      "💬 Separata komponenter för PostList, Comment, CreatePost, SinglePost",
      "🔄 Realtidsuppdateringar & felhantering"
    ],
    note: "Frontend-miniprojekt för att simulera post/thread-hantering med API-data.",
    badges: ["React", "Axios", "React Router", "useEffect", "useState", "Dummy API", "Hooks", "JSX"]
  },

  weather: {
    desc: "Vanilla JavaScript-väderapp med OpenWeatherMap API.",
    detail: "Hämtar och visar väderdata och klocka för valfri stad. Byggd i ren JavaScript och responsiv CSS.",
    points: [
      "📡 OpenWeatherMap API-integration",
      "🔍 Dynamisk sökning via användarinmatning",
      "⏱️ Live-klocka som uppdateras varje sekund",
      "📊 Visar temperatur, lufttryck, fuktighet, vind",
      "🖱️ DOM-manipulation med event listeners",
      "🎨 Anpassad CSS med responsiv bakgrundsbild",
      "🧪 Felfria API-anrop med JSON-parsing"
    ],
    note: "Lättviktsapp byggd utan ramverk — ren HTML, CSS och JS.",
    badges: ["JavaScript", "OpenWeatherMap API", "DOM", "Event Handling", "Responsiv CSS", "HTML", "Fetch"]
  }
};
