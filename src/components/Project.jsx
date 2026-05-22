
const PROJECTS = [
  {
    num: '01',
    title: 'WealthWatch',
    tags: ['React', 'Java', 'MySQL'],
    desc: 'Developed a full-stack personal finance tracking application using Spring Boot for backend services and React.js for a responsive, user-friendly frontend',
    link: '#',
  },
  {
    num: '02',
    title: 'WanderWise',
    tags: ['React', 'Unsplash API', 'Cloudinary'],
    desc: 'Developed a full-stack travel-planning , which allows a user to manage complex travel data and user-specific trip ownership',
    link: '#',
  },
  {
    num: '03',
    title: 'AI Chat API',
    tags: ['SpringBoot', 'Ollama', 'JWT'],
    desc: 'Engineered a production-ready conversational AI REST API using Spring Boot, integrating Llama 3.2 locally via Ollama to handle natural language inference without external API dependency',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="project">
      <div className={"container"}>
        <div className="label"> Selected Work</div>
        <div className="list">
          {PROJECTS.map((p) => (
            <article key={p.num} className="card">
              <span className="num">{p.num}</span>
              <div className="content">
                <div className="top">
                  <h3 className="title">{p.title}</h3>
                  <div className="tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <p className="desc">{p.desc}</p>
                <a href={p.link} className="link">View case study →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}