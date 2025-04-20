'use client';

import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);


  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  interface SubmitEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    // Aquí puedes integrar tu servicio de backend o email
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Hi, I&apos;m Samuel 👋</h1>
        <p>I turn coffee and code into cool solutions ☕💻</p>
      </section>

      <section className={styles.section}>
        <h2>&gt; whoami</h2>
        <p>
          Soon-to-be software engineer passionate about clean code, full-stack
          dev and debugging things that shouldn&apos;t be broken.
        </p>
      </section>

      <section className={styles.section}>
        <h2>&gt; toolbox</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React, Next.js</li>
          <li>Node.js, Express</li>
          <li>Tailwind CSS, Sass</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>&gt; missions</h2>
        <div>
          <h3>Mission: Portfolio Reboot ⚙️</h3>
          <p>Stack: Next.js, Sass</p>
          <p>Status: 90% done — just like all my projects 😅</p>
        </div>
        <div>
          <h3>Mission: REST API with Auth 🔐</h3>
          <p>Stack: Node.js, Express</p>
          <p>Status: Functional (with minimal drama)</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>&gt; ping me</h2>
        <p>
          Want to work together or just geek out about code?
          <br /> Reach out!
        </p>
        <ul>
          <li>
            <a href="mailto:youremail@example.com">Email Me</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-profile" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/your-github" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <div className={styles.container}>
      <h2 className={styles.heading}>Let&apos;s get in touch</h2>
      {submitted ? (
        <p className={styles.successMessage}>
          Message sent! Now let’s wait like we do for production builds...
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            className="resize-none"
          />
          <button type="submit" className="w-full">
            Send Message
          </button>
        </form>
      )}
    </div>

      <footer className={styles.footer}>
        <code>
          {/* If you're reading this, you're cooler than 90% of recruiters 😎 */}
        </code>
      </footer>
    </main>
  );
}