import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const propertyCards = [
  {
    title: 'Urban townhouse with terrace',
    location: 'New York, USA',
    price: '$420,000',
    description: 'Bright property in a calm street near cafés and green parks.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern apartment with river view',
    location: 'London, UK',
    price: '$580,000',
    description: 'Stylish interiors with floor-to-ceiling windows.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Minimal family home',
    location: 'Toronto, Canada',
    price: '$460,000',
    description: 'Private garden and spacious living areas.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
]

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />

      <main className="mx-auto max-w-7xl px-5 py-12">

        {/* HERO */}
        <section className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Trusted real estate platform
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Find your perfect home with confidence
            </h1>

            <p className="text-slate-600 max-w-lg">
              Discover premium properties, explore neighborhoods, and make smart
              real estate decisions with our expert guidance.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="border px-6 py-3 rounded-full text-sm font-semibold  transition"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="border px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80"
              alt="Home"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Featured Listings
              </p>
              <h2 className="text-3xl font-bold">
                Explore premium properties
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {propertyCards.map((property) => (
              <div
                key={property.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                    {property.location}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">
                    {property.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {property.description}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-slate-900">
                      {property.price}
                    </span>
                    <button className="text-sm font-semibold text-slate-700 hover:text-black">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Why choose us
            </p>
            <h2 className="text-3xl font-bold mt-2">
              A smarter way to buy property
            </h2>
            <p className="text-slate-600 mt-4">
              We simplify the real estate journey with trusted listings,
              expert advice, and a seamless experience from start to finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Expert guidance',
              'Verified listings',
              'Flexible scheduling',
              'Transparent deals',
            ].map((item) => (
              <div
                key={item}
                className="p-5 border rounded-2xl hover:shadow-md transition bg-slate-50"
              >
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-slate-600 mt-1">
                  Designed to make your property journey smooth and stress-free.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-slate-900 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold ">
            Ready to find your next home?
          </h2>
          <p className="mt-3 text-slate-300">
            Connect with our experts and start your journey today.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-full font-semibold  transition"
          >
            Contact Us
          </a>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Home