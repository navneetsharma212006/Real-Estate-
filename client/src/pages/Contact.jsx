import { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      setLoading(false)

      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setLoading(false)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />

      <main className="max-w-7xl mx-auto px-5 py-14">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold mt-3">
            Let’s discuss your property needs
          </h1>
          <p className="text-slate-600 mt-3">
            Share your requirements and our team will get back to you within one business day.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 mt-14">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-3xl p-8 shadow-sm space-y-6"
          >
            <h2 className="text-xl font-semibold">Send a message</h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                value={form.name}
                onChange={onChange('name')}
                required
                placeholder="Full Name"
                className="input"
              />
              <input
                type="email"
                value={form.email}
                onChange={onChange('email')}
                required
                placeholder="Email Address"
                className="input"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                value={form.phone}
                onChange={onChange('phone')}
                placeholder="Phone Number"
                className="input"
              />
              <input
                value={form.subject}
                onChange={onChange('subject')}
                required
                placeholder="Subject"
                className="input"
              />
            </div>

            <textarea
              value={form.message}
              onChange={onChange('message')}
              required
              rows="5"
              placeholder="Your message..."
              className="input resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-slate-800 transition disabled:bg-slate-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* STATUS */}
            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">
                Message sent successfully. We will contact you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>

          {/* INFO PANEL */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-3 text-slate-300">
                Reach out to us for property inquiries, support, or consultations.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <p><strong>Phone:</strong> +91 6267502221</p>
                <p><strong>Email:</strong> navneetsh21@gmail.com</p>
                <p><strong>Location:</strong> Indore, India</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Quick response time',
                'Trusted property advisors',
                'Personalized consultation',
                'Verified listings support',
              ].map((item) => (
                <div
                  key={item}
                  className="p-5 border rounded-2xl bg-slate-50 hover:shadow-sm transition"
                >
                  <p className="font-semibold">{item}</p>
                  <p className="text-sm text-slate-600 mt-1">
                    We ensure smooth and reliable communication.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact