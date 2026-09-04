import type { Metadata } from "next";
import Image from "next/image";
import { InteractiveEffects } from "../components/interactive-effects";
import { LanguageSelector } from "../components/language-selector";

export const metadata: Metadata = {
  title: "Gustavo Alencar | AI and Software Engineering",
  description:
    "Gustavo Alencar Matos' portfolio: applied artificial intelligence, automation, software, and digital experiences.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Gustavo Alencar | AI and Software Engineering",
    description:
      "Projects in applied AI, automation, front-end, back-end, and product development.",
    type: "website",
    locale: "en_US",
  },
};

const projects = [
  {
    index: "01",
    title: "PraxUs AI",
    label: "Applied AI · 2nd place",
    description:
      "A solution created for the 2026 ENIAC Lab Innovation Hackathon to personalize communication in debt collection operations.",
    role: "Designed the AI layer, built n8n workflows, and integrated language models, APIs, webhooks, and JSON.",
    tech: ["n8n", "LLMs", "REST APIs", "Webhooks"],
    links: [
      { label: "Team repository", href: "https://github.com/marcocaparra/PraxUsLanding" },
      { label: "View landing page", href: "https://praxusai.vercel.app" },
    ],
    note: "The interface remains available. The AI workflow is currently disabled.",
    details: {
      challenge: "Create a more contextual and less generic collection approach by adapting communication to each user's interactions.",
      solution: "A conversational experience connected to n8n workflows, APIs, webhooks, and multiple language models.",
      status: "Presented at the 2026 ENIAC Lab Innovation Hackathon, where it placed second. The interface remains available, but the AI workflow is disabled.",
    },
    image: {
      src: "/projects/praxus.png",
      alt: "PraxUs AI interface showing a personalized collection conversation and real-time analysis.",
    },
  },
  {
    index: "02",
    title: "BinGo",
    label: "In development · Front-end",
    description:
      "A gamified ecosystem that encourages and records the proper disposal of electronic waste in schools.",
    role: "Responsible for the app's front-end, with contributions to UI/UX, the collection kiosk interface, and AI features.",
    tech: ["Front-end", "UI/UX", "Gamification", "AI"],
    links: [],
    note: "Built as a team project. The repository is currently private.",
    details: {
      challenge: "Make electronic waste disposal easier to understand and more engaging for students.",
      solution: "A gamified ecosystem with missions, impact tracking, a mobile app, and an interface for a collection kiosk.",
      status: "The product is under development. The repository belongs to the team and remains private while the solution evolves.",
    },
    image: {
      src: "/projects/bingo.jpg",
      alt: "Three BinGo app screens showing the home page, restoration missions, and the gamified BinGopolis map.",
    },
  },
  {
    index: "03",
    title: "ARAS",
    label: "Back-end · Human-in-the-loop",
    description:
      "Social Assistance Scheduling and Records: AI-assisted standardization of initial records at Brazilian social assistance centers.",
    role: "Worked on back-end logic, data structuring, AI integration, and interface implementation.",
    tech: ["TypeScript", "AI", "REST APIs", "Human validation"],
    details: {
      challenge: "Support initial social assistance records with better structure while keeping professionals responsible for every decision.",
      solution: "An AI-assisted experience that organizes information and requires human validation before records are used.",
      status: "Team prototype developed during the 2026 Experimenta Guarulhos Hackathon.",
    },
    links: [
      { label: "Team repository", href: "https://github.com/marcocaparra/Aras" },
      { label: "View landing page", href: "https://landingpage-aras.vercel.app" },
    ],
    image: {
      src: "/projects/aras.png",
      alt: "ARAS interface showing a registration simulation and the social assistance service timeline.",
    },
  },
  {
    index: "04",
    title: "EscovAção",
    label: "Android · Education",
    description:
      "A playful app that helps children aged four to eight build a consistent oral hygiene routine.",
    role: "Contributed to back-end, front-end, and character design as part of the development team.",
    tech: ["Java", "XML", "Android", "Gamification"],
    details: {
      challenge: "Help children develop oral hygiene habits through a simple and playful experience.",
      solution: "An Android app with educational resources, gamification, and a visual identity designed for children.",
      status: "Academic team project. The public repository is hosted on another team member's account.",
    },
    links: [{ label: "Team repository", href: "https://github.com/Enzo-Dutra/EscovAcao" }],
    image: null,
  },
  {
    index: "05",
    title: "PagVan",
    label: "Back-end · Management",
    description:
      "A web system for school van drivers to manage students, routes, attendance, and payments.",
    role: "Back-end development in a team. My contribution is listed in the original repository's README.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    details: {
      challenge: "Centralize recurring tasks for school van drivers, including student, route, attendance, and payment management.",
      solution: "A web system with a management interface and MySQL data persistence.",
      status: "Academic team project. My contribution is documented in the original README.",
    },
    links: [{ label: "Team repository", href: "https://github.com/Enzo-Dutra/PagVan" }],
    image: null,
  },
];

const skills = [
  "Artificial Intelligence",
  "LLM Integration",
  "n8n Automation",
  "REST APIs and Webhooks",
  "JavaScript and Node.js",
  "Python",
  "Java and Android",
  "PHP",
  "MySQL and PostgreSQL",
  "Front-end and UI/UX",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function EnglishHome() {
  return (
    <main>
      <InteractiveEffects language="en" />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brandLetters">GA<span>.</span></span>
        </a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="/resume-gustavo-alencar-matos.pdf" target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact">Contact</a>
          <LanguageSelector language="en" />
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Open to opportunities</div>
        <h1>
          AI that turns ideas<br />
          <em>into products.</em>
        </h1>
        <div className="heroBottom">
          <p>
            I&apos;m <strong>Gustavo Alencar Matos</strong>, a Software Engineering student focused on
            applied artificial intelligence, automation, and digital experiences.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#projects">Explore projects <ArrowIcon /></a>
            <a className="button ghost" href="https://github.com/gugdev" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
            <a className="button ghost" href="/resume-gustavo-alencar-matos.pdf" target="_blank" rel="noreferrer">
              View resume <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="proof" data-reveal>
        <div className="shell proofGrid">
          <div><strong>2nd</strong><span>place at the ENIAC<br />Lab Innovation Hackathon</span></div>
          <div><strong>05</strong><span>applied projects<br />built in teams</span></div>
          <div><strong>C1</strong><span>advanced English<br />for technology</span></div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="sectionHeading" data-reveal>
          <div className="sectionIntro">
            <p className="kicker">Selected work</p>
            <p className="sectionNote">Five projects that show how I think, collaborate, and turn technology into something useful.</p>
            <div className="sectionSignals" aria-label="Project areas">
              <span>Applied AI</span><span>Automation</span><span>Software</span>
            </div>
          </div>
          <h2>Projects for<br /><em>real problems.</em></h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title} data-reveal>
              <div className="projectIndex">{project.index}</div>
              <div className="projectMain">
                <p className="projectLabel">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
              </div>
              <div className="projectDetails">
                <p><strong>My role</strong>{project.role}</p>
                <ul className="tags" aria-label={`${project.title} technologies`}>
                  {project.tech.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.links.length > 0 && (
                  <div className="projectLinks">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowIcon /></a>
                    ))}
                  </div>
                )}
                {project.note && <p className="note">{project.note}</p>}
              </div>
              <details className="projectDisclosure">
                <summary>
                  <span className="summaryLabel">View project details</span>
                  <span className="summaryAction" aria-hidden="true">↓</span>
                </summary>
                <div className="disclosureContent">
                  <p><strong>Challenge</strong>{project.details.challenge}</p>
                  <p><strong>Solution</strong>{project.details.solution}</p>
                  <p><strong>Current status</strong>{project.details.status}</p>
                </div>
              </details>
              {project.image && (
                <figure className="projectMedia">
                  <Image src={project.image.src} alt={project.image.alt} width={1440} height={900} sizes="(max-width: 800px) calc(100vw - 30px), 930px" quality={90} />
                </figure>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell aboutGrid" data-reveal>
          <div className="aboutHeading">
            <p className="kicker">About me</p>
            <h2>Technical curiosity.<br /><em>Practical execution.</em></h2>
          </div>
          <div className="aboutVisual">
            <figure className="aboutPortrait">
              <Image src="/gustavo-alencar.jpg" alt="Portrait of Gustavo Alencar Matos" width={800} height={800} sizes="(max-width: 800px) 320px, 350px" quality={90} />
            </figure>
            <div className="aboutPortraitMeta" aria-label="Information about Gustavo">
              <span><i aria-hidden="true" /> Guarulhos, Brazil</span>
              <span><i aria-hidden="true" /> Open to internships</span>
            </div>
          </div>
          <div className="aboutCopy">
            <p>
              I am a Software Engineering student interested in applied AI, automation, and digital product development. I enjoy understanding the problem, designing the flow, and connecting models, data, and interfaces into experiences people can actually use.
            </p>
            <p>
              I learn new technologies quickly and adapt well to different contexts. I have contributed to front-end, back-end, mobile, and AI integration projects, always working collaboratively. I am looking for my first professional opportunity to learn from a strong team and contribute to real products.
            </p>
            <p className="aboutMission">
              My goal is to use technology to make people&apos;s lives easier. I like building solutions that simplify routines, reduce repetitive work, and make processes clearer. When that happens, people have more time and energy for what matters to them.
            </p>
          </div>
          <div className="skillCloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section className="education section shell">
        <p className="kicker">Education</p>
        <div className="timeline" data-reveal>
          <div className="educationItem">
            <span>2026 to 2028</span>
            <div><h3>Bachelor&apos;s Degree in Software Engineering</h3><p>ENIAC University Center · In progress</p></div>
          </div>
          <div className="educationItem">
            <span>Expected 2026</span>
            <div><h3>Technical Diploma in Information Technology</h3><p>ENIAC High School · Integrated secondary and technical education</p></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contactInner" data-reveal>
          <p className="kicker">Let&apos;s talk</p>
          <h2>Working on an<br /><em>interesting problem?</em></h2>
          <p>I am open to internship opportunities in AI, Software Engineering, automation, and development.</p>
          <div className="contactLinks">
            <a className="button light" href="mailto:galencarmatos@gmail.com">Send an email <ArrowIcon /></a>
            <a className="textLink" href="https://linkedin.com/in/gustavo-alencar-matos" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a className="textLink" href="https://github.com/gugdev" target="_blank" rel="noreferrer">View GitHub <ArrowIcon /></a>
            <a className="textLink" href="/resume-gustavo-alencar-matos.pdf" target="_blank" rel="noreferrer">Open resume <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© 2026 Gustavo Alencar Matos</p>
        <p>Guarulhos, SP · Brazil</p>
      </footer>
    </main>
  );
}
