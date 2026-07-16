import { PROJECTS } from '../data/portfolio'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-bg">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group border border-border bg-surface overflow-hidden hover:border-accent hover:-translate-y-1 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-5">
                <span className="inline-block text-[10px] tracking-widest uppercase text-accent border border-border px-2 py-0.5 mb-3">
                  Project
                </span>
                <h4 className="font-display text-[15px] text-white mb-3">{project.title}</h4>
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs text-text-dim border border-border px-3.5 py-1.5 hover:border-accent hover:text-accent transition-all"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
