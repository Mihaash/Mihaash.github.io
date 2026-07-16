import { INTERESTS } from '../data/portfolio'

function InterestIcon({ type }: { type: string }) {
  switch (type) {
    case 'globe':
      return (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 512 512">
          <path d="M352 256c0 22.2-1.2 43.6-3.4 64H163.4c-2.2-20.4-3.4-41.8-3.4-64s1.2-43.6 3.4-64h185.2c2.2 20.4 3.4 41.8 3.4 64zm288-46.7v51.6c0 12.2-5.4 23.7-14.6 31.5s-22.4 12.3-35.3 8.9l-14.5-4.1c-23.7-6.8-47.2-18.2-68.4-33.4-11.6-8.1-27.6-8.1-39.2 0-21.2 15.2-44.7 26.6-68.4 33.4l-14.5 4.1c-12.8 3.4-25.7-1.5-35.3-8.9s-14.6-19.3-14.6-31.5v-51.6c0-12.2 5.4-23.7 14.6-31.5s22.4-12.3 35.3-8.9l14.5 4.1c23.7 6.8 47.2 18.2 68.4 33.4 11.6 8.1 27.6 8.1 39.2 0 21.2-15.2 44.7-26.6 68.4-33.4l14.5-4.1c12.8-3.4 25.7 1.5 35.3 8.9s14.6 19.3 14.6 31.5zM135.3 163.4c-2.2 20.4-3.4 41.8-3.4 64s1.2 43.6 3.4 64h185.2c2.2-20.4 3.4-41.8 3.4-64s-1.2-43.6-3.4-64H135.3zM512 176v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48l20.3-40.6C122.3 77.7 135.3 64 152 64h208c16.7 0 29.7 13.7 31.7 31.4L416 128h48c26.5 0 48 21.5 48 48zM160 368h192v64H160v-64zm256-160H96v-32h320v32z" />
        </svg>
      )
    case 'shield':
      return (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 512 512">
          <path d="M256 32C132.3 32 32 125.3 32 240v86.4c0 31.4 15.5 61.1 41.6 79.4L86 426.3c-3.6 7.6-.3 16.7 7.3 20.3s16.7.3 20.3-7.3l11.1-23.5C141 432.6 196.8 448 256 448s115-15.4 137.6-32.3l11.1 23.5c3.6 7.6 12.7 10.9 20.3 7.3s10.9-12.7 7.3-20.3l-12.4-20.5C436.5 327.5 448 297.8 448 266.4V240C448 125.3 347.7 32 256 32zm-96 184c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
        </svg>
      )
    case 'linux':
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
          alt="Linux"
          className="w-8 h-8"
        />
      )
    case 'user-secret':
      return (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 640 512">
          <path d="M320 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-53.3 64c-13.6 0-24 10.4-24 24v88H144c-26.5 0-48 21.5-48 48v16c0 26.5 21.5 48 48 48h48v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h128v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h48c26.5 0 48-21.5 48-48v-16c0-26.5-21.5-48-48-48H373.3v-88c0-13.6-10.4-24-24-24H266.7zM463.7 224H352v-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v64H176.3c-20.8 0-40.4 8.7-54.3 23.8L82.7 243C69.8 255.9 64 273.6 64 292.5v55.5c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-55.5c0-18.9-5.8-36.6-18.7-49.5L236 247.8c-13.9-15.1-33.5-23.8-54.3-23.8H132.6c-20.8 0-40.4 8.7-54.3 23.8L44.7 283c-20.6 22.3-19.5 57.3 2.8 78.3C60 383.3 81 394 103.6 394H192v32c0 35.3 28.7 64 64 64s64-28.7 64-64v-32h88.4c22.6 0 43.6-10.7 58.1-32.7 22.3-21 23.4-56 2.8-78.3l-34-36.7c-13.9-15.1-33.5-23.8-54.3-23.8H463.7zM352 352v32H288v-32c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
        </svg>
      )
    default:
      return null
  }
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-bg">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            About
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-12">
          <div>
            <p className="text-text mb-6">
              I am Mihaash Dharan M, a Computer Science enthusiast passionate about DevOps, Cloud, and Cybersecurity.
              I enjoy building secure and scalable systems by combining development, automation, and infrastructure management.
            </p>
            <p className="text-text mb-6">
              I have hands-on experience with Docker, Kubernetes, Jenkins, Git, and Bash scripting, and I enjoy working
              with CI/CD pipelines, containerization, and cloud environments. My projects include security tools like
              vulnerability scanners, dark web monitoring systems, and malware analysis platforms, where I integrate
              automation and security practices.
            </p>
            <p className="text-text mb-6">
              I am particularly interested in DevSecOps, Penetration Testing, and Security Operations (SOC), and I
              continuously work on improving my skills in cloud security, infrastructure automation, and system monitoring.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              <li className="text-sm text-text-dim py-1.5 border-b border-white/5">
                <strong className="text-accent mr-1.5">Birthday:</strong>06 August 2005
              </li>
              <li className="text-sm text-text-dim py-1.5 border-b border-white/5">
                <strong className="text-accent mr-1.5">City:</strong>Coimbatore
              </li>
              <li className="text-sm text-text-dim py-1.5 border-b border-white/5">
                <strong className="text-accent mr-1.5">Email:</strong>
                <a href="mailto:mihaaashdharan68@gmail.com" className="text-text-dim">
                  mihaaashdharan68@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Interests
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INTERESTS.map((interest) => (
            <div
              key={interest.label}
              className="group border border-border p-5 bg-surface relative overflow-hidden hover:bg-surface2 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform" />
              <InterestIcon type={interest.icon} />
              <h3 className="mt-2.5 text-xs font-bold text-white font-display">{interest.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
