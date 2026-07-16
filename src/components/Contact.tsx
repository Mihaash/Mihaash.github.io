export default function Contact() {
  return (
    <section id="contacts" className="py-20 px-6 bg-bg">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-3xl font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Contact
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="border border-border bg-surface p-6 flex gap-4 items-start">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 293.7c11.4 6.7 25.6 6.7 37 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 13.6-50.2 13.6-73 0L0 176z" />
            </svg>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-text-dim mb-1.5">Email</h3>
              <a href="mailto:mihaashdharan68@gmail.com" className="text-sm text-text">
                mihaashdharan68@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="border border-border bg-surface p-6 flex gap-4 items-start">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512">
              <path d="M408 32A184 184 0 1 0 408 392 184 184 0 1 0 408 32zM318.2 391.9c51.6-37 89.8-90.3 101.1-151.9h-49.4c-8.6 35.5-31.5 65.3-63.2 82.4l11.5 69.5zM208 392c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-63.8-127.7c31.7-17.1 54.6-46.9 63.2-82.4h-49.4c-11.3 61.6-49.5 114.9-101.1 151.9l11.5-69.5zM208 224c-35.3 0-64-28.7-64-64h49.4c8.6 35.5 31.5 65.3 63.2 82.4L208 224zm160 0l-49.2 40.4c31.7 17.1 54.6 46.9 63.2 82.4H384c11.3-61.6 49.5-114.9 101.1-151.9L368 224z" />
            </svg>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-text-dim mb-1.5">Social Profiles</h3>
              <div className="flex gap-2.5 mt-2">
                <a
                  href="https://www.linkedin.com/in/mihaash-dharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center text-text-dim hover:border-accent hover:text-accent transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.67-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Mihaash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center text-text-dim hover:border-accent hover:text-accent transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3.3 5.6 1.4 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.8 2.6.5 5.5-.4 6.2-2.3.5-2.2-1.3-4.5-4.3-5-2.6-.7-5.5.4-6.2 2.5zm-14-6.7c-.7 1.8 1.3 4 3.8 4.8 2.5.8 5.5-.1 6.2-2 .7-1.8-1.3-4-3.8-4.8-2.5-.8-5.5.1-6.2 2z" />
                  </svg>
                </a>
                <a
                  href="mailto:mihaashdharan68@gmail.com"
                  className="w-8 h-8 border border-border flex items-center justify-center text-text-dim hover:border-accent hover:text-accent transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 293.7c11.4 6.7 25.6 6.7 37 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 13.6-50.2 13.6-73 0L0 176z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
