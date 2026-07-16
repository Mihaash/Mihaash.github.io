import { useState, useEffect } from 'react'
import { EDUCATION, CERTIFICATIONS } from '../data/portfolio'

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <section id="education" className="py-20 px-6 bg-surface">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-[90%] mx-auto">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="w-[500px] max-w-full p-5 border border-border text-center bg-bg hover:border-accent transition-colors"
            >
              <div className="flex justify-center mb-2">
                <img src={edu.image} alt={edu.school} className="h-[60px] w-[120px] object-contain" />
              </div>
              <div className="school mt-2.5 text-white font-display text-xs font-bold">{edu.school}</div>
              <div className="year text-accent text-xs mt-1">{edu.year}</div>
              <div className="degree text-text-dim text-xs mt-1">{edu.degree}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Certifications
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="group border border-border bg-surface overflow-hidden hover:-translate-y-1 hover:border-accent transition-all"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full aspect-video object-cover cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              />
              <div className="p-3 flex items-center justify-between gap-2">
                <h4 className="text-xs text-text font-display font-semibold">{cert.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
