import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Benefits() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header activeNav="Benefits" />

      {/* Hero Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-800 min-h-[400px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
          <div className="relative flex flex-col items-center justify-center text-center px-8 py-20 lg:py-28">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
              Experience the Unmatched Benefits of Roomy Domy Ownership
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Discover a unique blend of a dream lifestyle and a powerful investment.
            </p>
            <button className="mt-8 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600">
              Start Your 90-Day Path
            </button>
          </div>
        </div>
      </section>

      {/* 10 Core Benefits */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          At a Glance: 10 Core Benefits
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
              title: "Private Paradise",
              desc: "Your own retreat in a premium natural location.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              title: "Passive Income",
              desc: "Generate an average of $60K/year.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: "Zero Utility Bills",
              desc: "Live 100% off-grid, forever.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Worry-Free",
              desc: "Turnkey property management handles it all.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Appreciating Asset",
              desc: "Appreciating 5-7% annually.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Sustainable Living",
              desc: "Live in harmony with your values.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Owner Community",
              desc: "Exclusive community & dome swap network.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              ),
              title: "Tax Advantages",
              desc: "Significant real estate tax benefits.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
              title: "Flexible Usage",
              desc: "Enjoy personally or rent it out seamlessly.",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              ),
              title: "Simple Path",
              desc: "A guided 90-day journey to ownership.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 text-center shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment & Lifestyle Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            A Powerful Investment & A Dream Lifestyle
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Roomy Domy is not just a home; it&apos;s a financial asset designed for growth and a sanctuary for sustainable living. Benefit from a steady stream of passive income, significant tax advantages, and an appreciating property value, all while living 100% off-grid.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
              title: "Your Investment",
              desc: "Our proven rental model and desirable locations generate substantial passive income, with 5-7% annual appreciation.",
            },
            {
              image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
              title: "Your Lifestyle",
              desc: "Enjoy your private paradise with zero utility bills. Live in harmony with your values and the planet.",
            },
            {
              image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
              title: "Your Experience",
              desc: "A simple, guided 90-day journey to ownership with turnkey property management and an exclusive owner community.",
            },
          ].map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-400 to-teal-500 px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Build Your Legacy?
          </h2>
          <p className="mt-4 text-emerald-50 max-w-lg mx-auto">
            Take the first step on your 90-day path to owning a private paradise that pays for itself.
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-600 transition-all hover:bg-emerald-50">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
