function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.35),_transparent_35%),_linear-gradient(180deg,_rgb(255_228_241)_0%,_rgb(255_240_245)_100%)] text-slate-950">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />
      <header className="relative mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <nav className="flex items-center justify-between rounded-full border border-slate-200/70 bg-white/90 px-6 py-4 text-sm text-slate-700 shadow-sm backdrop-blur-xl">
          <span className="font-semibold tracking-[0.3em] text-pink-500">Portfolio</span>
          <div className="flex gap-6">
            <a href="#about" className="transition-colors hover:text-slate-950">About</a>
            <a href="#work" className="transition-colors hover:text-slate-950">Work</a>
            <a href="#skills" className="transition-colors hover:text-slate-950">Skills</a>
            <a href="#contact" className="transition-colors hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <section className="space-y-8 py-16">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-pink-500/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-pink-500 ring-1 ring-pink-500/20">
              Front-end developer
            </div>
            <div className="max-w-4xl space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                <span className="typing inline-block">
                  I build polished interfaces with React and Tailwind.
                </span>
              </h1>
              <p className="text-lg text-slate-700 leading-8 max-w-2xl">
                I turn design systems into responsive web apps. My focus is clean UI, intuitive UX, and modern front-end code that scales.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#work" className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:opacity-95">
                View projects
              </a>
              <a href="https://t.me/aye7130" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-500">
                Contact me
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 pt-8">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Expertise</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">React + Tailwind</p>
              <p className="mt-2 text-slate-700 text-sm">Modern component libraries and responsive layouts.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Focus</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">Accessibility First</p>
              <p className="mt-2 text-slate-700 text-sm">Clean, inclusive code that works for everyone.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Approach</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">Design-Driven</p>
              <p className="mt-2 text-slate-700 text-sm">Translating design into polished user experience.</p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 rounded-[2rem] border border-slate-300/80 bg-white/80 p-10 shadow-soft backdrop-blur-lg lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-950">About my work</h2>
            <p className="text-slate-700 leading-8">
              I'm a front-end developer who crafts responsive web experiences with React, Tailwind CSS, and modern build tools. I enjoy translating polished UI designs into clean, accessible code that feels fast and intuitive on both desktop and mobile.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold text-lg">1</div>
                <div>
                  <p className="font-semibold text-slate-950">Component-driven development</p>
                  <p className="text-sm text-slate-700">Building reusable UI elements for scalability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold text-lg">2</div>
                <div>
                  <p className="font-semibold text-slate-950">Mobile-first design</p>
                  <p className="text-sm text-slate-700">Responsive layouts optimized for every screen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold text-lg">3</div>
                <div>
                  <p className="font-semibold text-slate-950">Accessible patterns</p>
                  <p className="text-sm text-slate-700">Inclusive code that works for all users.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-8 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="Creative dashboard preview"
              className="h-64 w-full rounded-[1.25rem] object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-slate-950">Featured: Creative dashboard UI</h3>
            <p className="mt-3 text-slate-700">A React dashboard built with reusable components, responsive layouts, and accessible interactions.</p>
          </div>
        </section>

        <section id="work" className="space-y-8 py-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-pink-300">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Selected work</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group rounded-[2rem] border border-slate-200/90 bg-white/90 p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-35px_rgba(236,72,153,0.25)] hover:border-pink-300/40">
              <img
                src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80"
                alt="Landing page project screenshot"
                className="h-44 w-full rounded-[1.75rem] object-cover"
              />
              <span className="mt-6 inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs uppercase tracking-[0.35em] text-pink-500 shadow-sm">Product site</span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Landing page for SaaS</h3>
              <p className="mt-3 text-slate-700">Developed a responsive product landing page with animated sections and feature-rich content blocks.</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">SaaS UI</span>
                <a href="#project-details" className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                  View project
                </a>
              </div>
            </article>
            <article className="group rounded-[2rem] border border-slate-200/90 bg-white/90 p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-35px_rgba(236,72,153,0.25)] hover:border-pink-300/40">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                alt="Component library project screenshot"
                className="h-44 w-full rounded-[1.75rem] object-cover"
              />
              <span className="mt-6 inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs uppercase tracking-[0.35em] text-pink-500 shadow-sm">Design system</span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Component library</h3>
              <p className="mt-3 text-slate-700">Built a reusable UI library for cards, modals, forms, and navigation using Tailwind utility classes.</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">UI Library</span>
                <a href="#project-details" className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                  View project
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="project-details" className="space-y-8 py-16">
          <div className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
            <h2 className="text-3xl font-semibold text-slate-950">Landing page for SaaS</h2>
            <p className="mt-3 text-slate-700">A polished marketing site built for conversion, featuring responsive sections, modern typography, and clear CTA patterns.</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-100/90 p-6">
                <h3 className="text-xl font-semibold text-slate-950">Featured work</h3>
                <p className="mt-3 text-slate-700">Designed interactive hero layouts, pricing cards, feature grids, and testimonial sections to support product storytelling.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-100/90 p-6">
                <h3 className="text-xl font-semibold text-slate-950">Tech stack</h3>
                <p className="mt-3 text-slate-700">React + Tailwind CSS, responsive mobile-first design, accessible components, and lightweight animations.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
            <h2 className="text-3xl font-semibold text-slate-950">Component library</h2>
            <p className="mt-3 text-slate-700">A reusable design system built for consistency, accessibility, and easy scaling across product interfaces.</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-100/90 p-6">
                <h3 className="text-xl font-semibold text-slate-950">What’s included</h3>
                <p className="mt-3 text-slate-700">A set of modular cards, buttons, forms, and layout patterns that can be reused in dashboards and landing pages.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-100/90 p-6">
                <h3 className="text-xl font-semibold text-slate-950">Benefits</h3>
                <p className="mt-3 text-slate-700">Improved development speed, consistent UI behavior, and a scalable foundation for new product features.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-slate-950">Skills</h2>
          <p className="mt-3 max-w-3xl text-slate-700">I build modern interfaces using a strong front-end stack. These are the technologies I use every day to create responsive, accessible, and polished user experiences.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e44d26] text-white shadow-sm">
                <span className="text-lg font-semibold">HTML</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">HTML</p>
                <p className="text-xs text-slate-600">Semantic markup</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#264de4] text-white shadow-sm">
                <span className="text-lg font-semibold">CSS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">CSS</p>
                <p className="text-xs text-slate-600">Responsive styling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7df1e] text-slate-950 shadow-sm">
                <span className="text-lg font-semibold">JS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">JavaScript</p>
                <p className="text-xs text-slate-600">Dynamic experiences</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#61dafb] text-slate-950 shadow-sm">
                <span className="text-lg font-semibold">⚛</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">React</p>
                <p className="text-xs text-slate-600">Component-driven UI</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06b6d4] text-white shadow-sm">
                <span className="text-lg font-semibold">TW</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Tailwind CSS</p>
                <p className="text-xs text-slate-600">Utility-first styling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-100/90 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f05032] text-white shadow-sm">
                <span className="text-lg font-semibold">Git</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Git</p>
                <p className="text-xs text-slate-600">Version control</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-slate-950">Let's build something together</h2>
          <p className="mt-4 max-w-2xl text-slate-700">If you have a front-end project or need help bringing a design to life, I’m happy to collaborate. Reach out and let’s create a polished web experience.</p>
          <a href="mailto:ayethiria2@gmail.com" className="mt-8 inline-flex rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-pink-400">
            ayethiria2@gmail.com
          </a>
        </section>

        <footer className="mt-10 flex flex-col gap-4 border-t border-slate-300/70 pt-6 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© 2026 Kit Kit. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-700">
            <a href="https://github.com/aye7130" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950" aria-label="GitHub">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.086 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/aye7130" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M4.98 3.5c0 1.381-1.12 2.5-2.5 2.5S0 4.881 0 3.5 1.12 1 2.5 1 4.98 2.119 4.98 3.5zM.52 8h4.92V24H.52V8zm7.5 0h4.72v2.32h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.61V24h-4.92v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.06V24H8.02V8z"/></svg>
            </a>
            <a href="https://www.facebook.com/aye7130" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.349C0 23.407.593 24 1.326 24H12.82v-9.294H9.692V11.07h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.098 2.795.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.314h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.326C24 .593 23.407 0 22.675 0z"/></svg>
            </a>
            <a href="https://t.me/aye7130" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950" aria-label="Telegram">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234C6.25 20.24 5.553 18.827 5.553 18.827c-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.086 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.99-.4 3.003-.404 1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
