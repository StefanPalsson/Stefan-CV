// === sv.js ===
export default {
  title: "Frontendutvecklare",
  education: "Frontendutvecklare – YH-utbildning, EC Utbildning (2022–2024)",
  contact: "Kontakt",
  languages: "Språk",
  swedish: "Svenska – Modersmål",
  english: "Engelska – Flytande",
  tools: "Program",
  aboutTitle: "Om mig",
  aboutParagraphs: [
    "Jag är en engagerad frontendutvecklare som brinner för att bygga digitala upplevelser som är både funktionella och visuellt tilltalande.",
    "Jag föredrar att arbeta med moderna tekniker som React och TypeScript, gärna tillsammans med verktyg som Tailwind, Vite och modulär CSS.",
    "UX-design, tillgänglighet och genomtänkt typografi är något jag alltid har i åtanke när jag bygger. Mitt mål är att koden ska vara lika ren som gränssnittet är lätt att använda."
  ],
  coursesTitle: "Kurser",
  courses: [
    "UX/UI Design", "Responsiv webbdesign", "JavaScript & React", "Agil utveckling",
    "Databaser & Firebase", "React Native & mobilutveckling", "Designsystem & komponentbibliotek",
    "SASS & avancerad CSS", "Versionshantering med Git & GitHub", "Webbanalys & användartestning"
  ],
  skills: "Tekniker",
  techTab: "Tekniker",
  strengthTab: "Styrkor",
  projects: "Projekt",
  techAndMethods: "Tekniker och metoder",
  showDetails: "\u25bc Visa tekniker & metoder",
  hideDetails: "\u25b2 Dölj tekniker & metoder",
  meditation: "Musikuppladdning, offline-stöd, Firebase.",
  langSwitchText: "Byt språk",
  tekniker: {
    Frontend: ["🌐 HTML5", "🎨 CSS", "📌 JavaScript", "🌀 TypeScript", "⚛️ React", "🔺 Angular", "🚀 Next.js", "🎨 SASS", "🎨 Tailwind CSS", "📘 Storybook", "📱 Responsiv design", "🌗 Dark mode"],
    "Backend & Databaser": ["🌿 Node.js", "🐘 PHP", "🔗 API", "🔄 REST API", "🌳 MongoDB", "💃 MySQL", "📂 SQL", "📬 E-handel DB", "💳 Betalsystem", "💻 WebSockets"],
    "CMS & E-handel": ["📰 Headless WP", "📬 E-handelsutv.", "📬 WooCommerce"],
    "Verktyg & Ramverk": ["🛠️ Arkitektur", "🎯 Figma", "💻 Visual Studio Code", "🤝 Git", "📘 Storybook", "🗓️ Agila projektmetoder", "📊 Kanban", "🔁 jQuery"],
    Övrigt: ["📐 UX/UI", "🔌 Integrationer", "🌍 SEO", "💡 Säkerhet", "⚡ Testning", "🔁 Agila metoder"]
  },
  styrkor: ["🎯 Målmedveten", "👨‍👧‍👦 Lagspelare", "🧘‍♂️ Tålmodig", "🚀 Driven", "🛠️ Lösningsorienterad", "🧠 Snabblärd", "🎨 Kreativ", "🗓️ Strukturerad", "📢 Kommunikativ"],
  chili: {
    desc: "Webbapp i React för att visa och söka efter chilisorter.",
    detail: "Användare kan läsa om styrka, smak och ursprung. UI är byggt med React Router och har dynamisk routing och responsiv design.",
    points: [
      "🔄 React Router v6",
      "⚙️ useState, useParams, useNavigate",
      "🔎 Sökfunktion i realtid",
      "🔄 Dynamisk rendering med URL-parametrar",
      "📏 Responsiv layout med Flexbox",
      "🖌️ CSS-animationer, typografi, färgkontrast",
      "🛠️ Egna komponenter",
      "🔝 Sticky header",
      "🖌️ Muspekare med PNG"
    ],
    note: "Pågående projekt med fler funktioner planerade.",
    badges: ["React", "React Router", "useState", "useNavigate", "useParams", "Custom Hooks", "CSS Modules", "Flexbox"]
  },
  leontina: {
    desc: "Angular-blogg till min dotter med berättelser och bilder.",
    detail: "Barnvänlig layout med komponenter och karusell. Angular-arkitektur med routing och localStorage.",
    points: [
      "📏 Komponentbaserad arkitektur i Angular",
      "🗂️ RouterModule & dynamiska URL:er",
      "🔒 RouteGuard för admin",
      "📄 FormsModule för kontakt/kommentarer",
      "🎡 Egen karusell",
      "📝 Tjänst med localStorage",
      "📐 UX anpassat för barn"
    ],
    note: "Byggd för berättande och enkel interaktion.",
    badges: ["Angular", "RouterModule", "RouteGuard", "FormsModule", "localStorage", "UX för barn", "Responsiv CSS"]
  },
  whack: {
    desc: "Grupprojekt med topplista, UI och backend.",
    detail: "Vi byggde spelet i Vanilla JS med moduler, DOM-manipulation och Firestore. Jag ansvarade för modal-hantering, användarflöde och versionhantering i Git. Vi jobbade agilt med Trello och sprintar.",
    points: [
      "🖱️ DOM-manipulering med vanilla JS",
      "🎯 Eventlyssnare och klicklogik",
      "⏱️ Timers, setTimeout och countdown-funktioner",
      "📊 Topplista via Firebase Firestore",
      "🧩 Modulstruktur med ES6-import/export",
      "🔊 Ljud via <audio> och trigger-effekter",
      "📦 Dynamisk rendering av mullvadar",
      "📝 Modal för namninput och validering",
      "🛠️ Realtidsuppdatering via onSnapshot",
      "🗃️ Versionshantering med Git och branches",
      "🗂️ Uppgiftsplanering i Trello"
    ],
    badges: [
      "JavaScript", "HTML", "CSS", "Firebase", "Firestore", "ES6 Modules",
      "Audio API", "DOM", "Agil metod", "Trello", "Git"
    ],
    note: "Whack-a-mole-spel byggt i grupp med fokus på samarbete, moduler, versionshantering och realtids-Firebase."
  },
  time4family: {
    desc: "React + TypeScript-app för att dela familjeminnen.",
    detail: "En familjeapp som följer UX/UI-principer med Z-pattern och lazy loading. Sidor för blog, galleri och kontakt. Byggd med TypeScript, React Router och stöd för mörkt läge.",
    points: [
      "🌀 TypeScript med React",
      "🌗 Dark mode via Context API",
      "📷 Lazy loaded bilder med `loading='lazy'`",
      "🧭 Navigering med React Router v6",
      "🧱 Modulär komponentstruktur",
      "🎯 Layout enligt Z-pattern",
      "💡 UX/UI-principer i layout och interaktion",
      "🎨 CSS-teman och egen stil",
      "📱 Responsiv design"
    ],
    note: "Byggd för att bevara och visa upp familjens resor och ögonblick.",
    badges: ["React", "TypeScript", "React Router", "Dark Mode", "UX/UI", "Responsiv Design"]
  }
};
