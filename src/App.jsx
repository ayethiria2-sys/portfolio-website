function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.35),_transparent_35%),_linear-gradient(180deg,_rgb(255_228_241)_0%,_rgb(255_240_245)_100%)] text-slate-950">
      <header className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <nav className="flex items-center justify-between text-sm text-slate-950">
          <span className="font-semibold text-pink-300">Portfolio</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#work" className="hover:text-slate-950">Work</a>
            <a href="#skills" className="hover:text-slate-950">Skills</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <section className="grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-pink-500/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-pink-300">
              Front-end developer
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                I build polished interfaces with React and Tailwind.
              </h1>
              <p className="max-w-2xl text-slate-700 sm:text-lg">
                I turn design systems into responsive web apps. My focus is clean UI, intuitive UX, and modern front-end code that scales.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="#work" className="rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-pink-400">
                View projects
              </a>
              <a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-500">
                Contact me
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-300/70 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
            <div className="space-y-4">
              <div className="h-56 rounded-[1.5rem] bg-slate-800" />
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Featured</p>
                <h2 className="text-2xl font-semibold text-slate-950">Creative dashboard UI</h2>
                <p className="text-slate-700">A React dashboard built with reusable components, responsive layouts, and accessible interactions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-6 rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-slate-950">About me</h2>
          <p className="max-w-3xl text-slate-700 leading-8">
            I’m a front-end developer who crafts responsive web experiences with React, Tailwind CSS, and modern build tools. I enjoy translating polished UI designs into clean, accessible code that feels fast and intuitive on both desktop and mobile.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-100/80 p-6">
              <p className="text-lg font-semibold text-slate-950">Experience</p>
              <p className="mt-2 text-slate-700">Component libraries, single-page apps, interactive design systems, and performance-minded front-end architecture.</p>
            </div>
            <div className="rounded-3xl bg-slate-100/80 p-6">
              <p className="text-lg font-semibold text-slate-950">Approach</p>
              <p className="mt-2 text-slate-700">Clean code, strong collaboration with designers, accessible patterns, and a mobile-first mindset.</p>
            </div>
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
            <article className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg transition hover:-translate-y-1 hover:border-pink-500/40">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-700">Product site</span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Landing page for SaaS</h3>
              <p className="mt-3 text-slate-700">Developed a responsive product landing page with animated sections and feature-rich content blocks.</p>
            </article>
            <article className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg transition hover:-translate-y-1 hover:border-pink-500/40">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-700">Design system</span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Component library</h3>
              <p className="mt-3 text-slate-700">Built a reusable UI library for cards, modals, forms, and navigation using Tailwind utility classes.</p>
            </article>
          </div>
        </section>

        <section id="skills" className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-slate-950">Skills</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Accessibility'].map(skill => (
              <div key={skill} className="rounded-3xl bg-slate-100/80 px-5 py-4 text-center text-slate-950">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-soft backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-slate-950">Let's build something together</h2>
          <p className="mt-4 max-w-2xl text-slate-700">If you have a front-end project or need help bringing a design to life, I’m happy to collaborate. Reach out and let’s create a polished web experience.</p>
          <a href="mailto:hello@example.com" className="mt-8 inline-flex rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-pink-400">
            hello@example.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
