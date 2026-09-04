import Image from "next/image";
import { InteractiveEffects } from "./components/interactive-effects";
import { LanguageSelector } from "./components/language-selector";

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
      { label: "Ver landing page", href: "https://praxusai.vercel.app" },
    ],
    note: "A interface continua disponível. O workflow de IA está desativado no momento.",
    details: {
      challenge: "Criar uma abordagem de cobrança mais contextual e menos genérica, adaptando a comunicação às interações do usuário.",
      solution: "Uma experiência conversacional conectada a workflows no n8n, APIs, webhooks e diferentes modelos de linguagem.",
      status: "Projeto apresentado no ENIAC Lab Innovation 2026, onde conquistou o 2º lugar. A interface segue disponível, mas o fluxo de IA está desativado.",
    },
    image: {
      src: "/projects/praxus.png",
      alt: "Interface do PraxUs AI mostrando uma conversa de cobrança personalizada e análise em tempo real.",
    },
  },
  {
    index: "02",
    title: "BinGo",
    label: "Em desenvolvimento · Front-end",
    description:
      "Ecossistema gamificado que incentiva e registra o descarte adequado de resíduos eletroeletrônicos em escolas.",
    role: "Responsável pelo front-end do aplicativo, com atuação em UI/UX, interface do totem e frente de IA.",
    tech: ["Front-end", "UI/UX", "Gamificação", "IA"],
    links: [],
    note: "Projeto desenvolvido em equipe. O repositório atual é privado.",
    details: {
      challenge: "Tornar o descarte de resíduos eletroeletrônicos mais compreensível e envolvente para estudantes.",
      solution: "Um ecossistema gamificado com missões, registro de impacto, aplicativo mobile e interface para um totem de coleta.",
      status: "Produto em desenvolvimento. O repositório pertence à equipe e permanece privado enquanto a solução evolui.",
    },
    image: {
      src: "/projects/bingo.jpg",
      alt: "Três telas do aplicativo BinGo: início, missões de restauração e mapa gamificado da BinGópolis.",
    },
  },
  {
    index: "03",
    title: "ARAS",
    label: "Back-end · Human-in-the-loop",
    description:
      "Agenda e Registro da Assistência Social: padronização assistida por IA para registros iniciais em CRAS e CREAS.",
    role: "Lógica de back-end, estruturação de dados, integração com IA e contribuições na interface.",
    tech: ["TypeScript", "IA", "REST APIs", "Validação humana"],
    details: {
      challenge: "Apoiar o registro inicial de atendimentos sociais com mais estrutura, sem retirar a responsabilidade dos profissionais.",
      solution: "Uma experiência assistida por IA que organiza informações e mantém a validação humana antes do uso dos registros.",
      status: "Protótipo desenvolvido em equipe durante o Hackathon Experimenta Guarulhos 2026.",
    },
    links: [
      { label: "Código da equipe", href: "https://github.com/marcocaparra/Aras" },
      { label: "Ver landing page", href: "https://landingpage-aras.vercel.app" },
    ],
    image: {
      src: "/projects/aras.png",
      alt: "Interface do ARAS mostrando uma simulação de cadastro e a linha de atendimento social.",
    },
  },
  {
    index: "04",
    title: "EscovAção",
    label: "Android · Educação",
    description:
      "Aplicativo lúdico para ajudar crianças de 4 a 8 anos a desenvolverem uma rotina de higiene bucal.",
    role: "Desenvolvimento em equipe, com contribuições em back-end, front-end e criação de personagem.",
    tech: ["Java", "XML", "Android", "Gamificação"],
    details: {
      challenge: "Ajudar crianças a desenvolver hábitos de higiene bucal de uma maneira simples e lúdica.",
      solution: "Aplicativo Android com recursos educativos, gamificação e identidade visual voltada ao público infantil.",
      status: "Projeto acadêmico desenvolvido em equipe. O repositório público está na conta de um dos integrantes.",
    },
    links: [{ label: "Código da equipe", href: "https://github.com/Enzo-Dutra/EscovAcao" }],
    image: null,
  },
  {
    index: "05",
    title: "PagVan",
    label: "Back-end · Gestão",
    description:
      "Sistema web para motoristas de vans escolares gerenciarem alunos, rotas, chamadas e pagamentos.",
    role: "Desenvolvimento back-end em equipe. Minha participação está registrada no README do repositório original.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    details: {
      challenge: "Centralizar tarefas recorrentes de motoristas de vans escolares, como alunos, rotas, chamadas e pagamentos.",
      solution: "Sistema web com interface de gestão e persistência de dados em MySQL.",
      status: "Projeto acadêmico desenvolvido em equipe. Minha participação está registrada no README original.",
    },
    links: [{ label: "Código da equipe", href: "https://github.com/Enzo-Dutra/PagVan" }],
    image: null,
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
          <span className="brandLetters">GA<span>.</span></span>
        </a>
        <div className="navLinks">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="/curriculo-gustavo-alencar-matos.pdf" target="_blank" rel="noreferrer">Currículo</a>
          <a href="#contato">Contato</a>
          <LanguageSelector language="pt-BR" />
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
            <a
              className="button ghost"
              href="/curriculo-gustavo-alencar-matos.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Ver currículo <ArrowIcon />
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
          <div className="sectionIntro">
            <p className="kicker">Trabalho selecionado</p>
            <p className="sectionNote">
              Cinco projetos que mostram como penso, colaboro e transformo tecnologia em algo útil.
            </p>
            <div className="sectionSignals" aria-label="Áreas dos projetos">
              <span>IA aplicada</span>
              <span>Automação</span>
              <span>Software</span>
            </div>
          </div>
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
              <details className="projectDisclosure">
                <summary>
                  <span className="summaryLabel">Ver detalhes do projeto</span>
                  <span className="summaryAction" aria-hidden="true">↓</span>
                </summary>
                <div className="disclosureContent">
                  <p><strong>Desafio</strong>{project.details.challenge}</p>
                  <p><strong>Solução</strong>{project.details.solution}</p>
                  <p><strong>Situação atual</strong>{project.details.status}</p>
                </div>
              </details>
              {project.image && (
                <figure className="projectMedia">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1440}
                    height={900}
                    sizes="(max-width: 800px) calc(100vw - 30px), 930px"
                    quality={90}
                  />
                </figure>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="shell aboutGrid" data-reveal>
          <div className="aboutHeading">
            <p className="kicker">Sobre mim</p>
            <h2>Curiosidade técnica.<br /><em>Execução prática.</em></h2>
          </div>
          <div className="aboutVisual">
            <figure className="aboutPortrait">
              <Image
                src="/gustavo-alencar.jpg"
                alt="Retrato de Gustavo Alencar Matos"
                width={800}
                height={800}
                sizes="(max-width: 800px) 320px, 350px"
                quality={90}
              />
            </figure>
            <div className="aboutPortraitMeta" aria-label="Informações de Gustavo">
              <span><i aria-hidden="true" /> Guarulhos, SP</span>
              <span><i aria-hidden="true" /> Disponível para estágio</span>
            </div>
          </div>
          <div className="aboutCopy">
            <p>
              Sou estudante de Engenharia de Software, com interesse em IA aplicada, automação e
              desenvolvimento de produtos digitais. Gosto de entender o problema, desenhar o fluxo e
              conectar modelos, dados e interfaces em experiências que realmente possam ser usadas.
            </p>
            <p>
              Tenho facilidade para aprender novas tecnologias e me adaptar a diferentes contextos. Já
              contribuí em projetos de front-end, back-end, mobile e integração de IA, sempre de forma
              colaborativa. Procuro minha primeira oportunidade para aprender com um time forte e
              contribuir em produtos de verdade.
            </p>
            <p className="aboutMission">
              Meu objetivo é usar tecnologia para facilitar a vida das pessoas. Gosto de criar soluções
              que simplificam rotinas, reduzem tarefas repetitivas e deixam processos mais claros. Quando
              isso acontece, sobra mais tempo e energia para o que realmente importa e para o que cada
              pessoa gosta de fazer.
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
            <span>2026 a 2028</span>
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
            <a className="button light" href="mailto:galencarmatos@gmail.com">
              Enviar e-mail <ArrowIcon />
            </a>
            <a className="textLink" href="https://linkedin.com/in/gustavo-alencar-matos" target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon />
            </a>
            <a className="textLink" href="https://github.com/gugdev" target="_blank" rel="noreferrer">
              Ver GitHub <ArrowIcon />
            </a>
            <a
              className="textLink"
              href="/curriculo-gustavo-alencar-matos.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Abrir currículo <ArrowIcon />
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
