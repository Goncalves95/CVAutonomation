import Link from 'next/link'

// ── Icons ──────────────────────────────────────────────────────────────────

function IconDoc() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function IconEye() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function IconPhoto() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function IconFree() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── App Mockup ─────────────────────────────────────────────────────────────

function AppMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 translate-y-8" />

      {/* Browser chrome */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 mx-2">
            cvgenerator.app/generate
          </div>
        </div>

        {/* App content preview */}
        <div className="flex" style={{ height: 320 }}>
          {/* Form side */}
          <div className="w-2/5 border-r border-gray-100 p-4 flex flex-col gap-3 overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <div className="h-2 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-blue-100 rounded w-1/2" />
              </div>
            </div>
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-1">
                <div className="h-1.5 bg-gray-100 rounded w-1/3" />
                <div className="h-6 bg-gray-50 border border-gray-100 rounded-md" />
              </div>
            ))}
            <div className="space-y-1">
              <div className="h-1.5 bg-gray-100 rounded w-1/2" />
              <div className="h-14 bg-gray-50 border border-gray-100 rounded-md" />
            </div>
          </div>

          {/* PDF preview side */}
          <div className="flex-1 bg-gray-100 p-3 flex flex-col gap-2">
            <div className="flex-1 bg-white rounded shadow-sm p-3 flex flex-col gap-2">
              {/* CV header */}
              <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                <div className="space-y-1">
                  <div className="h-3 bg-gray-800 rounded w-28" />
                  <div className="h-2 bg-blue-400 rounded w-20" />
                  <div className="h-1.5 bg-gray-200 rounded w-32" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              </div>
              {/* CV body columns */}
              <div className="flex gap-2 flex-1">
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 bg-gray-700 rounded w-16" />
                  <div className="space-y-1">
                    <div className="h-1.5 bg-gray-300 rounded w-full" />
                    <div className="h-1.5 bg-blue-300 rounded w-3/4" />
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-5/6" />
                    <div className="h-1 bg-gray-200 rounded w-4/5" />
                  </div>
                </div>
                <div className="w-24 space-y-2">
                  <div className="h-1.5 bg-gray-700 rounded w-12" />
                  <div className="h-1 bg-gray-200 rounded w-full" />
                  <div className="h-1 bg-gray-200 rounded w-3/4" />
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4].map(d => (
                      <div key={d} className={`w-2 h-2 rounded-full ${d <= 3 ? 'bg-blue-400' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white text-xs rounded px-2 py-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Nav */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <IconDoc />
          </div>
          <span className="font-bold text-gray-900">CV Generator</span>
        </div>
        <Link
          href="/generate"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Build your CV →
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Free · No sign-up · No watermark
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
            A CV built to reach{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              human eyes
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Most CVs never reach a recruiter — they're filtered out by ATS software first.
            This generator produces a clean, structured PDF that passes ATS systems and looks great to the humans on the other side.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['✓ ATS-friendly format', '✓ Live PDF preview', '✓ Free forever'].map(t => (
              <span key={t} className="bg-white/10 border border-white/10 rounded-full px-3 py-1 text-slate-300">{t}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="/generate"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-blue-500/25"
            >
              Build my CV for free →
            </Link>
            <a
              href="#how-it-works"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base border border-white/10"
            >
              How it works
            </a>
          </div>

          {/* Mockup */}
          <div className="w-full mt-8 px-4">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">How it works</h2>
            <p className="text-gray-500 text-lg">Three steps. Less than 10 minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: <IconDoc />,
                title: 'Fill in your details',
                desc: 'Enter your experience, education, skills, languages, and more. Upload and crop your profile photo exactly how you want it.',
              },
              {
                step: '02',
                icon: <IconEye />,
                title: 'Preview in real time',
                desc: 'See your CV rendered as a PDF instantly as you type. Adjust until it looks exactly how you want.',
              },
              {
                step: '03',
                icon: <IconDownload />,
                title: 'Download & apply',
                desc: 'One click gives you a clean A4 PDF — ATS-friendly structure, no watermarks, ready to attach to any application.',
              },
            ].map(item => (
              <div key={item.step} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
                <span className="text-5xl font-black text-gray-100 absolute top-6 right-6 leading-none select-none">
                  {item.step}
                </span>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Everything you need</h2>
            <p className="text-gray-500 text-lg">Built to get past the bots — and impress the humans.</p>
          </div>

          {/* ATS callout */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="text-3xl shrink-0">🤖</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">The ATS problem — and how this solves it</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Over <span className="font-semibold text-gray-800">75% of CVs are rejected by ATS software</span> before a human ever sees them — usually because of complex layouts, tables, images in the wrong place, or non-standard fonts. This generator produces a clean, single-column structured PDF with no hidden elements, making it easy for any ATS to parse your experience correctly and pass your CV to the next stage.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <IconPhoto />,
                title: 'Smart photo cropping',
                desc: 'Upload any photo and drag to reposition it inside the circular frame. Zoom in or out until it looks perfect.',
                color: 'bg-purple-50 text-purple-600',
              },
              {
                icon: <IconEye />,
                title: 'Live PDF preview',
                desc: 'Your CV updates in real time as you type — no need to regenerate, just fill and watch.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: <IconZap />,
                title: 'All sections included',
                desc: 'Experience, Education, Skills, Languages with dot ratings, Certifications, Awards, and Online Links.',
                color: 'bg-yellow-50 text-yellow-600',
              },
              {
                icon: <IconFree />,
                title: '100% free, forever',
                desc: 'No account required, no paywalled templates, no watermarks. Just open the app and build your CV.',
                color: 'bg-green-50 text-green-600',
              },
              {
                icon: <IconShield />,
                title: 'Privacy first',
                desc: 'Everything runs in your browser. Your data never leaves your device — no servers, no tracking.',
                color: 'bg-red-50 text-red-600',
              },
              {
                icon: <IconDownload />,
                title: 'Instant PDF download',
                desc: 'One click and you get a clean, professional A4 PDF ready to attach to any job application.',
                color: 'bg-cyan-50 text-cyan-600',
              },
            ].map(f => (
              <div key={f.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold">Ready to build your CV?</h2>
          <p className="text-blue-100 text-lg">Free, instant, professional. No sign-up needed.</p>
          <Link
            href="/generate"
            className="bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg"
          >
            Start now it's free →
          </Link>
        </div>
      </section>

      {/* Support / Buy me a coffee */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="text-5xl">☕</div>
          <h2 className="text-2xl font-extrabold text-gray-900">Like this tool?</h2>
          <p className="text-gray-600 leading-relaxed">
            This CV generator is completely free and will stay that way. If it helped you land an interview or saved you time, consider buying me a coffee it helps me keep building useful, free tools for everyone.
          </p>
          <a
            href="https://www.buymeacoffee.com/imfernandodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-md shadow-amber-200"
          >
            <span className="text-xl">☕</span>
            Buy me a coffee
          </a>
          <p className="text-xs text-gray-400">No pressure the tool is free regardless.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium text-gray-600">CV Generator</span>
          </div>
          <span>Free forever · Built with ♥ · Open source</span>
          <a
            href="https://github.com/Goncalves95/CVAutonomation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </footer>

    </div>
  )
}
