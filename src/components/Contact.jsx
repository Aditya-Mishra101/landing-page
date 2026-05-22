import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    //email dalna later
    setSent(true)
  }

  return (
    <section id="contact">
      <div className='container'>
        <div className='grid'>
          <div className='left'>
            <h2 className='heading'>Let's build<br /><em>something great.</em></h2>
            <p className='blurb'>
              Open to full-time roles, contract work, and the occasional ambitious side project.
              Drop a line — I respond within 24h.
            </p>
          </div>
          <div className='right'>
            {sent ? (
              <div className='success' data-testid="success-msg">
                ✓ Message received — talk soon!
              </div>
            ) : (
              <form className='form' onSubmit={handleSubmit} data-testid="contact-form">
                <label className='field'>
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    data-testid="input-name"
                  />
                </label>
                <label className='field'>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    data-testid="input-email"
                  />
                </label>
                <label className='field'>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    data-testid="input-message"
                  />
                </label>
                <button type="submit" className='submit'>Send message</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className="container">
          <span>© 2026 Aditya Mishra</span>
        </div>
      </footer>
    </section>
  )
}