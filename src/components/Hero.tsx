import { useTypingEffect } from '../hooks/useTypingEffect'
import { NAV_LINKS, SOCIAL_LINKS, TYPING_WORDS } from '../data/portfolio'

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case 'linkedin':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.67-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      )
    case 'github':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3.3 5.6 1.4 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.8 2.6.5 5.5-.4 6.2-2.3.5-2.2-1.3-4.5-4.3-5-2.6-.7-5.5.4-6.2 2.5zm-14-6.7c-.7 1.8 1.3 4 3.8 4.8 2.5.8 5.5-.1 6.2-2 .7-1.8-1.3-4-3.8-4.8-2.5-.8-5.5.1-6.2 2zm237.7-114c-45.2-50.6-120-61.7-181.3-54.3V48.9c-7.9-.4-15.7 1.6-21.6 5.8-5.9 4.2-9.7 10.4-10.6 17.3-1.8 14 3.4 28 13.3 38.5 2.5 2.7 5.6 4.7 9 5.7 3.3 1 6.9 1 10.2.2l.5-.2v37.1c-68.5-7.1-130.7 14.2-185 55.5-10.4 7.9-18.2 17.8-23.8 29.1-5.6 11.3-8.9 24-9.2 37.1-.3 13 3.7 26 11.1 37.3 7.4 11.3 18.8 19.6 31.6 24.2 12.9 4.6 27.3 5.3 40.9 2.2 13.6-3.1 25.5-10.2 35.1-20.2 9.6-10 16.8-23 21-37.2 4.2-14.2 5.4-29.2 3.7-43.8v-1.6c15.8-5.1 29.4-14.2 40.1-26.2 10.7-12 18.3-26.6 22.2-42.6 3.9-16 4.2-32.8 1-49.2-1.6-8.2-4.5-16.1-8.5-23.3-4-7.2-9.1-13.7-15-19.4-5.9-5.7-12.6-10.2-19.9-13.5-7.3-3.2-15.2-5.2-23.3-5.8-8.1-.7-16.4-.1-24.4 1.9-8 2-15.6 5.3-22.4 9.8V253c-7.4-4.1-15.2-7.2-23.3-9.2-8.1-2-16.5-2.8-24.8-2.5-8.3.3-16.5 2.2-24 5.7-7.5 3.5-14.3 8.4-20.1 14.6-5.9 6.2-10.6 13.6-14.1 21.8-3.5 8.2-5.6 17.2-6.3 26.4-.6 9.2-.1 18.5 1.5 27.6 1.6 9.1 4.4 17.9 8.3 26.1 3.9 8.2 9 15.7 15.2 22.3 6.2 6.6 13.5 12.1 21.5 16.3 8 4.2 16.8 7 25.9 8.3 9.1 1.3 18.5 1.1 27.5-.7 9-1.8 17.5-5.1 25.1-9.7 7.6-4.6 14.1-10.5 19.2-17.4 5.1-6.9 8.7-14.7 10.6-22.9 2-8.2 2.2-16.8.7-25-1.5-8.2-4.6-16-9.2-23.1-4.6-7.1-10.7-13.3-17.9-18.4-7.2-5.1-15.5-9-24.3-11.6-8.8-2.6-18.1-3.8-27.4-3.6-9.3.2-18.5 1.9-27.2 5.1V60.6c-8.7-3.2-17.9-4.9-27.2-5.1-9.3-.2-18.6 1-27.4 3.6-8.8 2.6-17.1 6.5-24.3 11.6-7.2 5.1-13.3 11.3-17.9 18.4-4.6 7.1-7.7 14.9-9.2 23.1-1.5 8.2-1.3 16.8.7 25 2 8.2 5.6 16 10.6 22.9 5.1 6.9 11.6 12.8 19.2 17.4 7.6 4.6 16.1 7.9 25.1 9.7 9 1.8 18.4 2 27.5.7 9.1-1.3 17.9-4.1 25.9-8.3 8-4.2 15.3-9.7 21.5-16.3 6.2-6.6 11.3-14.1 15.2-22.3 3.9-8.2 6.7-17 8.3-26.1 1.6-9.1 2.1-18.4 1.5-27.6-.7-9.2-2.8-18.2-6.3-26.4-3.5-8.2-8.3-15.6-14.1-21.8-5.9-6.2-12.7-11.1-20.1-14.6-7.5-3.5-15.9-5.4-24-5.7-8.3-.3-16.7.5-24.8 2.5-8.1 2-16 4-23.3 5.8-7.3 3.3-14 7.8-19.9 13.5-5.9 5.7-11 12.2-15 19.4-4 7.2-6.9 15.1-8.5 23.3-3.2 16.4-2.9 33.2 1 49.2 3.9 16 11.5 30.6 22.2 42.6 10.7 12 24.3 21.1 40.1 26.2v1.6c-1.7 14.6-.5 29.6 3.7 43.8 4.2 14.2 11.4 27.2 21 37.2 9.6 10 21.5 17.1 35.1 20.2 13.6 3.1 28 2.4 40.9-2.2 12.9-4.6 24.2-12.9 31.6-24.2 7.4-11.3 11.4-24.3 11.1-37.3-.3-13.1-3.6-25.8-9.2-37.1-5.6-11.3-13.4-21.2-23.8-29.1z" />
        </svg>
      )
    case 'email':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 293.7c11.4 6.7 25.6 6.7 37 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 13.6-50.2 13.6-73 0L0 176z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_WORDS)

  return (
    <header id="header" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Radial gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(18, 214, 64, .08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 214, 64, .04) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 214, 64, .04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center p-8">
        <h1
          className="font-display text-white font-extrabold leading-none tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            letterSpacing: '-2px',
            animation: 'fadeUp .6s .1s ease both',
          }}
        >
          Mihaash<span className="text-accent">.</span>
          <br />
          Dharan M
        </h1>

        <p
          className="mt-4 text-text-dim"
          style={{ animation: 'fadeUp .6s .2s ease both' }}
        >
          I'm&nbsp;
          <span className="text-accent">{typedText}</span>
          <span className="cursor" />
        </p>

        <nav
          className="mt-10 flex flex-wrap gap-3 justify-center"
          style={{ animation: 'fadeUp .6s .3s ease both' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="px-5 py-2 text-xs tracking-widest uppercase border border-border text-text hover:bg-accent hover:border-accent hover:text-black transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className="mt-8 flex gap-4 justify-center"
          style={{ animation: 'fadeUp .6s .4s ease both' }}
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.icon}
              href={s.url}
              target={s.icon !== 'email' ? '_blank' : undefined}
              rel={s.icon !== 'email' ? 'noopener noreferrer' : undefined}
              className="w-[38px] h-[38px] border border-border flex items-center justify-center text-text-dim hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
