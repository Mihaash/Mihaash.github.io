import { useParams, Link } from 'react-router-dom'
import { PROJECT_DETAILS } from '../data/portfolio'

function DetailIcon({ type }: { type: string }) {
  const cls = 'w-5 h-5 text-accent inline-block mr-2'
  switch (type) {
    case 'rocket':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M159.6 53.2C171 41.9 187 35 204 35c22 0 42 11 53 28l32 50-45.1 45.1C232.6 146.6 220.4 146 208 146s-24.6.6-35.9 2.1L159.6 53.2zM208 96a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM80 32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h32v96l64 64h64l112 112c12.5 12.5 32.7 12.5 45.3 0s12.5-32.7 0-45.3L305.3 352H352l64 64c12.5 12.5 32.7 12.5 45.3 0s12.5-32.7 0-45.3l-64-64h-16V160h32c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H320V0H288v32H224V0H192v32H128V0H96v32H80zm0 64h32v32H80V96zm320 32h-32V96h32v32z" /></svg>
    case 'tools':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 9.2L37.4 19.8 25.6 7.4C18.4-1.8 6.2 1.5 7.9 15.2l13.2 106.1c-23.8 21.3-39.7 51.6-38.6 84.7 1.2 34.2 19.3 65.8 48.4 85.8l10.5 7.1 12.8 102.5c1.2 11.9 10.5 20.7 22.3 20.7s21.1-8.8 22.3-20.7L167.2 345l10.5-7.1c29.1-20 47.2-51.6 48.4-85.8 1.1-33.1-14.8-63.4-38.6-84.7L185.9 19.8 174.1 7.4c-7.2-9.2-19.4-12.5-30.8-3.2L113 19.2C97.5 26.1 86.4 39.7 78.6 5zM256 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-96 192H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H160z" /></svg>
    case 'cog':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M495.9 233.3L460.7 200c8.4-13.1 13.3-28.9 13.3-46 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 17.1 4.9 32.9 13.3 46l-35.2 33.3C241.9 181.6 222.2 176 200 176c-22.2 0-41.9 5.6-60.8 17.3L104 157.3c8.4-13.1 13.3-28.9 13.3-46 0-35.3-28.7-64-64-64S-16 75.9-16 111.3c0 17.1 4.9 32.9 13.3 46L-38.4 190.6c-3.4-2.2-7.1-4.2-10.9-5.8C-58 180.6-68.4 174.5-76 164.6c-11.6-15-13.4-34.8-7.4-51.7 6-17 21.1-28.6 39.3-28.6 8 0 15.6 2.4 22 6.5L-5 72.9C-1.5 71.4 2 69.4 5.5 68l4.5 48.3c5.1-.4 10.3-.7 15.6-.7 10.5 0 20.8 1.3 30.8 3.7 4 1 8 2.2 11.8 3.7l5.5-52c7.7-3.4 12.2-11.4 11.2-19.7-1-8.3-6.5-15.3-14.5-17.8-7.2-2.2-15-1.2-21.3 2.7l-11.2 7.1c-5.3-10.7-12.5-20.3-21.2-28.4C13.4 0-4.7-2.3-21.3 2.6c-16.6 4.9-28.5 18.1-31 34.7s2.2 33.5 15.5 44.5c5 4.1 10.7 7.3 16.9 9.5l5.2 55.3c-20.4 13.8-34.8 36.5-37.4 63-2.5 26 5.3 51.3 21.3 71l13.8 17c-13.2 12.6-22.1 29.7-25.1 49.2-3.4 22.1-.1 44.7 9.3 64.4l9.1 19c4.7-1.5 9.7-2.5 14.8-3 12.5-1.2 25.4 2.2 36.1 9.6 1.8 1.2 3.6 2.7 5.3 4.3l10.5-15c8.3-12 22.3-18 36.5-15.7 14.2 2.3 25.2 12.3 28.8 26.2l6.3 24.3c13.2-3.3 27.4-3.1 40.7.9 15.4 4.6 28.2 15.8 34.5 30.8 6.3 15 6 32.2-.8 47-6.3 13.7-18.5 23.7-33.3 27.2-14 3.3-28.9.8-41.3-7.1-13-8.3-21.7-22.2-22.8-38.3-1-14.4 3.2-28.3 11.4-39.6 1.3-1.8 2.8-3.5 4.4-5.1 10.5-10.8 17.7-24.8 19.5-40.5 1.5-13.2-.7-26.3-6.4-37.9l-2.5-5.1c5.2-4.5 11.4-8 18.2-10.4 16.5-5.9 34.7-1.1 46.2 12.1 11.5 13.2 14.4 31.9 7.6 47.8-1.4 3.3-3.2 6.3-5.4 9.1 15.8 7.1 26.5 23.5 26.5 42.3s-10.7 35.2-26.5 42.3c2.2 2.8 4 5.8 5.4 9.1 6.8 15.9 3.9 34.6-7.6 47.8s-29.7 18-46.2 12.1c-6.8-2.4-13-5.9-18.2-10.4l2.5-5.1c5.7-11.6 7.9-24.7 6.4-37.9-1.8-15.7-9-29.7-19.5-40.5-1.6-1.6-3.1-3.3-4.4-5.1-8.2-11.3-12.4-25.2-11.4-39.6 1.1-16.1 9.8-30 22.8-38.3 12.4-7.9 27.3-10.4 41.3-7.1 14.8 3.5 27 13.5 33.3 27.2z" /></svg>
    case 'tasks':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-69 80.5H24c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24H76c13.3 0 24-10.7 24-24V296l88.1 80.5c8.9 9.9 24 10.7 33.9 1.8l165.8-150c7.8-7.1 8.4-19.7 1.2-27.7-7.1-7.9-19.7-8.4-27.7-1.2L224 243.2V48c0-13.3-10.7-24-24-24s-24 10.7-24 24v195.2L82 200.4c-7.1-7.8-19.7-8.4-27.7-1.2-7.9 7.1-8.4 19.7-1.2 27.7l99 88.2 0 0L17 390.2C6.4 399.8 6.5 416.5 16.3 425.9c9.8 9.4 25.9 9 35.3-.8L128 346.8l76.4 68.4c9.4 8.5 24.1 8.1 33.3-.9 9.2-9 9.4-24.1.5-33.4L189.4 321l117.4-107.2c7.1-8.5 6.6-21.1-1.9-28.2-8.5-7.1-21.1-6.6-28.2 1.9L152.1 38.2z" /></svg>
    case 'brain':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M184 0c-22.1 0-40 17.9-40 40v48H88C57.1 88 32 113.1 32 144v48c0 17.7 14.3 32 32 32h8v48c0 44.2 35.8 80 80 80h16c44.2 0 80-35.8 80-80v-48h8c17.7 0 32-14.3 32-32V144c0-30.9-25.1-56-56-56h-32V40c0-22.1-17.9-40-40-40H184zM408 128h-24v80h24c13.3 0 24-10.7 24-24V128zM48 288c-17.7 0-32 14.3-32 32v32c0 61.9 50.1 112 112 112h16c61.9 0 112-50.1 112-112v-32c0-17.7-14.3-32-32-32H48z" /></svg>
    case 'shield':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 125.3 32 240v86.4c0 31.4 15.5 61.1 41.6 79.4L86 426.3c-3.6 7.6-.3 16.7 7.3 20.3s16.7.3 20.3-7.3l11.1-23.5C141 432.6 196.8 448 256 448s115-15.4 137.6-32.3l11.1 23.5c3.6 7.6 12.7 10.9 20.3 7.3s10.9-12.7 7.3-20.3l-12.4-20.5C436.5 327.5 448 297.8 448 266.4V240C448 125.3 347.7 32 256 32zm-96 184c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>
    case 'search':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64S64 128.5 64 208s64.5 144 144 144z" /></svg>
    case 'alert-triangle':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M256 32c14.2 0-27.3 7.5-34.5 19.8l-19.8 35c-2.1 3.8-6 6.6-10.5 7.6L158 101.5c-14 3.2-20 20-11.1 31.4l30.2 38.8c2.8 3.6 3.7 8.5 2.4 13.1L155.4 223c-3.6 12.2 4.3 24.8 17 26.1l42.2 4c5.4.8 10.2-3.3 10.8-8.6l2-17.4c.6-5-1.7-10-6.2-12.3L140 231c-9.6-6.9-11.7-20-4.8-29.6l16-22.4c6.9-9.6 20-11.7 29.6-4.8l31.2 22.3c5 3.5 11.8 3.5 16.8 0l31.2-22.3c9.6-6.9 22.7-4.8 29.6 4.8l16 22.4c6.9 9.6 4.7 22.7-4.8 29.6l-31.8 22.9c-4.5 2.3-6.8 7.3-6.2 12.3l2 17.4c.6 5.3 5.4 9.4 10.8 8.6l42.2-4c12.7-1.3 20.6-13.9 17-26.1l-6.1-20.7c-1.3-4.6-.4-9.5 2.4-13.1l30.2-38.8c8.9-11.4 2.9-28.2-11.1-31.4L350.7 105c-4.5-1-8.4-3.8-10.5-7.6l-19.8-35C313.3 39.5 300.2 32 286 32H256z" /></svg>
    case 'eye':
      return <svg className={cls} fill="currentColor" viewBox="0 0 576 512"><path d="M288 256c70.7 0 128-57.3 128-128S358.7 0 288 0S160 57.3 160 128s57.3 128 128 128zm-8.6 114.3c29.5-9.3 50.1-35.8 51.4-66.3H223.2c1.3 30.5 21.9 57 51.4 66.3C279.7 446.2 288 467.1 288 489.1V512h48v-22.9c0-22 8.3-42.9 16.6-58.8zM512 176c0-5.9-1.8-11.2-4.8-15.9L480 128l-32 32.1c-6.4 6.4-14.8 9.9-23.5 9.9h-1.3C406.3 160 384 137.7 384 110.3v-2.2c0-15.4-11.1-28.5-26.2-31.1l-21.5-3.7c-13.4-2.3-24.1-12.5-26.4-25.9L302 24.1C299.3 10.3 287.6 0 273.4 0H242.6c-14.2 0-25.9 10.3-28.6 24.1l-4.5 23.3c-2.3 13.4-13 23.6-26.4 25.9L162 76.9C146.9 79.5 135.8 92.6 135.8 108v2.2c0 27.4-22.3 49.7-49.7 51.5h-1.3c-8.7 0-17.1 3.5-23.5 9.9L39 176.1l-27.2 32.1c-3 4.7-4.8 10-4.8 15.9v32c0 17.7 14.3 32 32 32h5.3c14.8 34.3 47.8 58 86.3 58s71.5-23.7 86.3-58H419c17.7 0 32-14.3 32-32v-32c0-5.9-1.8-11.2-4.8-15.9L452 208c-6.4-6.4-14.8-9.9-23.5-9.9h-1.3C406.3 198.1 384 220.4 384 247.8v2.2c0 15.4 11.1 28.5 26.2 31.1l32 5.5c13.4 2.3 24.1 12.5 26.4 25.9l4.5 23.3c2.7 13.8 14.4 24.1 28.6 24.1h30.8c14.2 0 25.9-10.3 28.6-24.1l4.5-23.3c2.3-13.4 13-23.6 26.4-25.9l32-5.5c15.1-2.6 26.2-25.7 26.2-41.1v-2.2c0-27.4 22.3-49.7 49.7-51.5h1.3c8.7 0 17.1-3.5 23.5-9.9L537 240.1l27.2-32.1c3-4.7 4.8-10 4.8-15.9v-32z" /></svg>
    case 'list':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" /></svg>
    case 'info':
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24 10.7-24 24v24s0 0 0 0 0 0 0 0zm32-112c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zm112-64H368c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm-48 128c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z" /></svg>
    default:
      return <svg className={cls} fill="currentColor" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
  }
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const detail = PROJECT_DETAILS[slug ?? '']

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text-dim">
        <p>Project not found.</p>
      </div>
    )
  }

  return (
    <div className="py-[100px] px-6 max-w-[900px] mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-accent border border-border px-4 py-2 mb-8 hover:bg-accent hover:text-black transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Portfolio
      </Link>

      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
          {detail.title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <p className="text-text-dim mb-8">{detail.subtitle}</p>

      {detail.badges && (
        <div className="flex gap-2 flex-wrap mb-8">
          {detail.badges.map((b) => (
            <span key={b} className="px-3 py-1 text-[11px] uppercase tracking-wide border border-accent text-accent">
              {b}
            </span>
          ))}
        </div>
      )}

      {detail.sections.map((sec) => (
        <div key={sec.heading} className="bg-surface border border-border p-8 mb-6">
          <h5 className="text-accent font-display text-lg font-semibold mb-4">
            <DetailIcon type={sec.icon} />
            {sec.heading}
          </h5>
          <ul className="list-disc ml-6 space-y-1">
            {sec.content.map((item, i) => (
              <li key={i} className="text-text text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {detail.feedLines && (
        <div className="bg-surface border border-border p-8 mb-6">
          <h5 className="text-accent font-display text-lg font-semibold mb-4">
            <DetailIcon type="info" />
            Simulated Threat Feed
          </h5>
          <div className="h-[150px] overflow-hidden bg-black/30 p-4 font-mono text-[11px] leading-relaxed">
            {detail.feedLines.map((line, i) => (
              <div key={i} className="border-b border-accent/10 py-1 flex gap-2.5">
                <span className="text-accent">{line.time}</span>
                <span>{line.source}</span>
                <span className={line.severity === 'HIGH' ? 'text-danger' : 'text-accent2'}>{line.severity}</span>
                <span>{line.url}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {detail.verdicts && (
        <div className="bg-surface border border-border p-8 mb-6">
          <h5 className="text-accent font-display text-lg font-semibold mb-4">
            <DetailIcon type="search" />
            Sample Verdicts
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detail.verdicts.map((v) => (
              <div
                key={v.url}
                className={`border p-4 bg-accent/3 ${
                  v.verdict === 'SAFE' ? 'border-accent' : 'border-danger'
                }`}
              >
                <div className="text-[10px] text-text-dim">INPUT URL</div>
                <div className="text-xs mb-2">{v.url}</div>
                <div className={`font-bold ${v.verdict === 'SAFE' ? 'text-accent' : 'text-danger'}`}>
                  {v.verdict}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {detail.github && (
        <div className="bg-surface border border-border p-8 mb-6 text-center">
          <h5 className="text-accent font-display text-lg font-semibold mb-4">
            Source Code
          </h5>
          <a
            href={detail.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent border border-border px-4 py-2 hover:bg-accent hover:text-black transition-all"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  )
}
