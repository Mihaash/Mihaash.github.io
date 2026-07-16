import { LANGUAGES, SECURITY_TOOLS, DEVOPS_TOOLS } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Languages & Databases */}
        <div className="mb-10 bg-surface2 p-6 border border-border">
          <h4 className="font-display text-xs tracking-[3px] uppercase text-accent mb-5">
            Languages &amp; Databases
          </h4>
          <div className="flex flex-wrap gap-6 items-center">
            {LANGUAGES.map((lang) => (
              <img
                key={lang.name}
                src={lang.logo}
                alt={lang.name}
                className="h-11 w-auto grayscale-[40%] brightness-110 hover:grayscale-0 hover:brightness-130 transition-all"
              />
            ))}
          </div>
        </div>

        {/* Security Tools */}
        <div className="mb-10 bg-surface2 p-6 border border-border">
          <h4 className="font-display text-xs tracking-[3px] uppercase text-accent mb-5">
            Security Tools
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {SECURITY_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="border border-border bg-bg p-3 text-center hover:border-accent transition-colors"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 w-auto mx-auto mb-2 grayscale-[20%]"
                />
                <span className="text-[11px] text-white block">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Tools */}
        <div className="mb-10 bg-surface2 p-6 border border-border">
          <h4 className="font-display text-xs tracking-[3px] uppercase text-accent mb-5">
            DevOps Tools
          </h4>
          <div className="flex flex-wrap gap-4">
            {DEVOPS_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group bg-[#070b10] p-3 border border-border flex flex-col items-center justify-center gap-2 min-w-[110px] hover:bg-surface hover:-translate-y-0.5 hover:border-accent transition-all"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-9 w-auto"
                />
                <span className="text-[11px] text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
