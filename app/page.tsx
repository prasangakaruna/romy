import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-white)]">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-12 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 shadow-2xl">
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_zu6Hg6c-nVSV1PyThc69Klh6EfzM0ony9sQQPS7g7yga2Fqe6P0GsXy7IKhBajSKxzdIc-aAWJLwvBBMuQY2JTNsaAcKJutcwIg1Hc8mux0PESB4Hd2tt2PtiTOCnuRklq3_gnjHYF6hsseIUKjQircxtFRLjsGLaP5lYPyzfnD8FLOknS_JRYPzxzxbH5UiZEyKlaTgX8KN3aEko0SyUF2pOVrV3sxbq_5ig6XUTDASMH8WvoX0L45i83H2JlZ47-i3wTyDg7I")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl px-8 py-20 text-center lg:py-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-emerald-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting new dome owners
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Your Dream Home in
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Paradise.
              </span>
          </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Own a self-sustaining eco-dome in nature&apos;s most stunning locations. Earn{" "}
              <span className="font-semibold text-emerald-400">$60,000/year</span> in passive income while enjoying your private sanctuary.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1">
                Design Your Dome
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                { value: "500+", label: "Domes Built" },
                { value: "$30M+", label: "Owner Earnings" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
            A Sanctuary That Sustains
            <span className="block text-[var(--color-primary)]">Itself, and You.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
            Experience the perfect blend of modern luxury and off-grid living. Our eco-domes are designed to be self-sufficient.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Passive Income",
              desc: "Generate significant rental income with our seamless, fully-managed booking system.",
              color: "from-amber-400 to-orange-500",
              bg: "bg-amber-50",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Self-Sustaining",
              desc: "Live off-grid with solar power, rainwater harvesting, and eco-friendly systems.",
              color: "from-emerald-400 to-teal-500",
              bg: "bg-emerald-50",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Stunning Locations",
              desc: "Choose from exclusive spots by the ocean, in the forest, or atop a mountain.",
              color: "from-blue-400 to-indigo-500",
              bg: "bg-blue-50",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Personal Sanctuary",
              desc: "Escape to your private dome whenever you desire for ultimate peace.",
              color: "from-rose-400 to-pink-500",
              bg: "bg-rose-50",
            },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} text-slate-700 transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                {feature.desc}
              </p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-gradient-to-r ${feature.color} transition-all duration-300 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Simple Process
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
          </div>
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Design Your Dome",
                  desc: "Customize your ideal sanctuary with our interactive 3D configurator. Choose layouts, finishes, and off-grid features.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "We Build & Install",
                  desc: "Our expert team handles construction and installation at your chosen pristine location, ensuring a seamless process.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "You Earn & Enjoy",
                  desc: "Start earning passive income through our rental management program or simply enjoy your private escape.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  {i < 2 && (
                    <div className="absolute top-16 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-emerald-300 to-transparent lg:block" />
                  )}
                  <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/60 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200">
                      {item.icon}
                    </div>
                    <span className="mt-6 block text-sm font-bold text-emerald-600">{item.step}</span>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Testimonials
          </span>
          <h2 className="mt-6 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
            Loved by Dreamers & Doers
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {[
            {
              name: "Alex Chen",
              role: "Forest Dome Owner",
              quote: "The entire process was magical. Roomy Domy delivered on their promise, and now I have a stunning retreat that generates more income than my stock portfolio. It's the best investment I've ever made.",
              gradient: "from-blue-500 to-indigo-600",
              rating: 5,
            },
            {
              name: "Samantha Reed",
              role: "Oceanside Dome Owner",
              quote: "Waking up to the sound of waves in my eco-dome is a dream come true. The fact that it's a completely passive income source when I'm not there is just the icing on the cake!",
              gradient: "from-rose-500 to-pink-600",
              rating: 5,
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/60 transition-all hover:shadow-xl"
            >
              <div className="absolute -top-4 left-8">
                <svg className="h-12 w-12 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[var(--color-text-secondary)] leading-7 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)]">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 px-8 py-16 shadow-2xl sm:px-16 lg:py-24">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Own Your Paradise?
            </h2>
            <p className="mt-6 text-lg text-emerald-100">
              Join 500+ happy dome owners who are earning passive income while enjoying their private sanctuaries.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
