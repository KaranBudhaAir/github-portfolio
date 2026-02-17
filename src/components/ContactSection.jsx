export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2>Let’s Work Together</h2>
      <p>Open to freelance, collaborations, and full‑time roles.</p>

      <form
        action="https://formsubmit.co/YOUR_EMAIL@example.com"
        method="POST"
        className="contactForm"
      >
        {/* FormSubmit anti-spam */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New portfolio inquiry" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

        <label>
          Name
          <input name="name" type="text" required />
        </label>

        <label>
          Email
          <input name="email" type="email" required />
        </label>

        <label>
          Project Type
          <select name="projectType" defaultValue="Web App">
            <option>Web App</option>
            <option>Dashboard / Data Viz</option>
            <option>API / Backend</option>
            <option>IoT / Hardware Integration</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}
