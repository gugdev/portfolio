import Image from "next/image";
import { InteractiveEffects } from "./components/interactive-effects";

const projects = [
  {
    index: "01",
    title: "PraxUs AI",
    label: "IA aplicada · 2º lugar",
    description:
      "Solução criada no Hackathon ENIAC Lab Innovation 2026 para personalizar a comunicação em operações de cobrança.",
    role: "Arquitetura da camada de IA, workflows no n8n e integração entre modelos, APIs, webhooks e JSON.",
    tech: ["n8n", "LLMs", "REST APIs", "Webhooks"],
    links: [
      { label: "Código da equipe", href: "https://github.com/marcocaparra/PraxUsLanding" },
      { label: "Ver interface", href: "https://praxusai.vercel.app" },
    ],
    note: "Interface preservada; workflow de IA atualmente desativado.",
  },
  {
    index: "02",
    title: "BinGo",
    label: "Produto ativo · Front-end",
    description:
      "Ecossistema gamificado que incentiva e registra o descarte adequado de resíduos eletroeletrônicos em escolas.",
    role: "Responsável pelo front-end do aplicativo, com atuação em UI/UX, interface do totem e frente de IA.",
    tech: ["Front-end", "UI/UX", "Gamificação", "IA"],
    links: [],
    note: "Projeto desenvolvido em equipe; repositório atual privado.",
  },
  {
    index: "03",
    title: "ARAS",
    label: "Back-end · Human-in-the-loop",
    description:
      "Agenda e Registro da Assistência Social: padronização assistida por IA para registros iniciais em CRAS e CREAS.",
    role: "Lógica de back-end, estruturação de dados, integração com IA e contribuições na interface.",
    tech: ["TypeScript", "IA", "REST APIs", "Validação humana"],
    links: [
      { label: "Código da equipe", href: "https://github.com/marcocaparra/Aras" },
      { label: "Ver interface", href: "https://landingpage-aras.vercel.app" },
    ],
  },
  {
    index: "04",
    title: "EscovAção",
    label: "Android · Educação",
    description:
      "Aplicativo lúdico para ajudar crianças de 4 a 8 anos a desenvolverem uma rotina de higiene bucal.",
    role: "Desenvolvimento em equipe, com contribuições em back-end, front-end e criação de personagem.",
    tech: ["Java", "XML", "Android", "Gamificação"],
    links: [{ label: "Código da equipe", href: "https://github.com/Enzo-Dutra/EscovAcao" }],
  },
  {
    index: "05",
    title: "PagVan",
    label: "Back-end · Gestão",
    description:
      "Sistema web para motoristas de vans escolares gerenciarem alunos, rotas, chamadas e pagamentos.",
    role: "Desenvolvimento back-end em equipe; participação registrada no README do repositório original.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    links: [{ label: "Código da equipe", href: "https://github.com/Enzo-Dutra/PagVan" }],
  },
];

const skills = [
  "Inteligência Artificial",
  "Integração de LLMs",
  "Automação com n8n",
  "APIs REST e Webhooks",
  "JavaScript e Node.js",
  "Python",
  "Java e Android",
  "PHP",
  "MySQL e PostgreSQL",
  "Front-end e UI/UX",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <InteractiveEffects />
      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <Image
            className="brandMark"
            src="/camaleao-head-final.png"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span className="brandLetters">GA<span>.</span></span>
        </a>
        <div className="navLinks">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Disponível para oportunidades</div>
        <h1>
          IA que sai da ideia<br />
          <em>e vira produto.</em>
        </h1>
        <div className="heroBottom">
          <p>
            Sou <strong>Gustavo Alencar Matos</strong>, estudante de Engenharia de Software focado em
            inteligência artificial aplicada, automação e experiências digitais.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#projetos">Explorar projetos <ArrowIcon /></a>
            <a className="button ghost" href="https://github.com/gugdev" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="proof" data-reveal>
        <div className="shell proofGrid">
          <div><strong>2º</strong><span>lugar no Hackathon<br />ENIAC Lab Innovation</span></div>
          <div><strong>05</strong><span>projetos aplicados<br />em equipe</span></div>
          <div><strong>C1</strong><span>inglês avançado<br />para tecnologia</span></div>
        </div>
      </section>

      <section className="section shell" id="projetos">
        <div className="sectionHeading" data-reveal>
          <p className="kicker">Trabalho selecionado</p>
          <h2>Projetos com<br /><em>problemas reais.</em></h2>
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
                <p><strong>Minha atuação</strong>{project.role}</p>
                <ul className="tags" aria-label={`Tecnologias do ${project.title}`}>
                  {project.tech.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.links.length > 0 && (
                  <div className="projectLinks">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label} <ArrowIcon />
                      </a>
                    ))}
                  </div>
                )}
                {project.note && <p className="note">{project.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="shell aboutGrid" data-reveal>
          <div>
            <p className="kicker">Sobre mim</p>
            <h2>Curiosidade técnica.<br /><em>Execução prática.</em></h2>
          </div>
          <div className="aboutCopy">
            <p>
              Minha principal área de interesse é a aplicação de inteligência artificial em software.
              Gosto de entender o problema, desenhar o fluxo e conectar modelos, dados e interfaces em
              uma experiência que realmente possa ser usada.
            </p>
            <p>
              Atualmente curso Engenharia de Software no ENIAC e concluo o Ensino Médio integrado ao
              Técnico em Informática. Procuro minha primeira oportunidade para aprender com um time forte
              e contribuir em produtos de verdade.
            </p>
          </div>
          <div className="skillCloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="education section shell">
        <p className="kicker">Formação</p>
        <div className="timeline" data-reveal>
          <div className="educationItem">
            <span>2026 — 2028</span>
            <div><h3>Engenharia de Software</h3><p>ENIAC · Bacharelado em andamento</p></div>
          </div>
          <div className="educationItem">
            <span>Conclusão 2026</span>
            <div><h3>Técnico em Informática</h3><p>Colégio ENIAC · Ensino Médio integrado</p></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="shell contactInner" data-reveal>
          <p className="kicker">Vamos conversar</p>
          <h2>Tem um problema<br /><em>interessante?</em></h2>
          <p>Estou aberto a oportunidades de estágio em IA, Engenharia de Software, automação e desenvolvimento.</p>
          <div className="contactLinks">
            <a className="button light" href="https://linkedin.com/in/gustavo-alencar-matos" target="_blank" rel="noreferrer">
              Falar pelo LinkedIn <ArrowIcon />
            </a>
            <a className="textLink" href="https://github.com/gugdev" target="_blank" rel="noreferrer">
              Ver GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© 2026 Gustavo Alencar Matos</p>
        <p>Guarulhos, SP · Brasil</p>
      </footer>
    </main>
  );
}
