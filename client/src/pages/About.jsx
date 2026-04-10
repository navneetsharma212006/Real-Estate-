import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />

      <main className="max-w-7xl mx-auto px-5 py-14">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            About E-State
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            A smarter way to find, buy and rent properties
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            We combine local expertise with a modern digital experience to help you make confident property decisions.
          </p>
        </div>

        {/* MAIN GRID */}
        <section className="grid lg:grid-cols-2 gap-12 mt-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Built around clarity and trust
            </h2>
            <p className="text-slate-600 leading-7">
              At E-State, we simplify the property journey. Whether you're buying, selling, or renting,
              we guide you through every step with transparent communication and real insights.
            </p>
            <p className="text-slate-600 leading-7">
              Our focus is not just listings — it's helping you find the right place that fits your
              lifestyle and long-term goals.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 pt-4">
              {[
                'Clear and honest communication',
                'Personalized property recommendations',
                'End-to-end support from search to closing',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-slate-900" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-5">
            <p className="text-sm uppercase tracking-widest text-slate-400">
              Our Approach
            </p>

            <div className="space-y-4 text-sm leading-7">
              <p>
                <strong>Clarity first:</strong> We highlight what matters so you can take decisions with confidence.
              </p>
              <p>
                <strong>Smart matching:</strong> We connect you with properties that truly fit your needs.
              </p>
              <p>
                <strong>Reliable support:</strong> Our team stays with you from start to finish.
              </p>
            </div>
          </div>

        </section>

        {/* SERVICES */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Residential Sales',
              text: 'Market your property effectively and connect with serious buyers.',
            },
            {
              title: 'Rentals & Leasing',
              text: 'Find verified tenants and well-maintained rental properties.',
            },
            {
              title: 'Consulting',
              text: 'Get expert advice on property investment and planning.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 border rounded-3xl bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-600 mt-3 text-sm leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* STATS SECTION (VERY IMPORTANT) */}
        <section className="mt-20 bg-slate-50 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Properties Listed' },
            { number: '300+', label: 'Happy Clients' },
            { number: '50+', label: 'Cities Covered' },
            { number: '5+ Years', label: 'Experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-slate-900">{stat.number}</p>
              <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About