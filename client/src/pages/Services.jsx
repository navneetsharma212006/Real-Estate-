import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const services = [
  {
    title: 'Property search support',
    detail: 'Curated viewings and local comparables to help you choose with confidence.',
  },
  {
    title: 'Listing preparation',
    detail: 'Marketing-ready presentation, photography guidance, and value-based pricing.',
  },
  {
    title: 'Negotiation support',
    detail: 'Clear offer strategy that protects your priorities while keeping pace with the market.',
  },
  {
    title: 'Buyer support',
    detail: 'Commitment to prompt updates, thoughtful recommendations, and closing clarity.',
  },
]

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavBar />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Services</p>
          <h1 className="text-4xl font-semibold leading-tight">Services built for buyers, sellers and rental clients.</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            We offer a full range of property services designed to reduce friction and help you move through each stage with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.detail}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">What you can expect</p>
            <h2 className="mt-3 text-3xl font-semibold">A practical, grounded process from first inquiry through closing.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              We keep documents organized, timelines realistic and decisions based on what matters most in property. This is a service built to help people move forward with fewer surprises.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 text-sm leading-7 text-slate-600">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Local insights</p>
                <p className="mt-2">Neighborhood context and price trends that reflect the market today.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Clear communication</p>
                <p className="mt-2">Direct updates on every next step, so you always know where things stand.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Personalized planning</p>
                <p className="mt-2">Advice shaped around your schedule and the exact type of property you want.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services
