import styles from './Whoami.module.scss';
import * as motion from "motion/react-client";

export default function Whoami() {
    return (
    <section 
     id="whoami" 
     className={styles.whoami}
    >         
        <mark>WHOAMI</mark>
        <p> I CAME, I CODED, I CONSOLE.LOGGED.</p>
        <motion.div
         initial={{ opacity: 0, scale: 0.2}}
         whileInView={{ opacity: 1, scale: 1}}
         transition={{ duration: 0.5, delay: .3 }}
         viewport={{ once: true }}
         className={styles.terminal_container}>
            <header>samuel@portfolio-Ubuntu: ~</header>            
            <motion.div>
                <sub>Ubuntu 18.04.4 LTS ubuntu tty3</sub>
                <article><em>samuel@portfolio-Ubuntu:~</em>$ <span>whoami</span></article>
                <article>
                    -&gt; Hey, I’m Samuel 👋  
                    <br />
                    -&gt; A systems engineering student with a passion for building useful, clean and fun software — the kind that works *and* makes sense.
                    <br />
                    -&gt; I enjoy crafting full-stack apps using tools like React, Next.js, Node.js, and TypeScript. I like diving deep into how things work, whether it’s deploying APIs, styling with Sass, or tweaking a database query in PostgreSQL.
                    <br />
                    -&gt; I’m always learning something new, writing code that (mostly) works, and deploying projects that reflect both curiosity and growth. Oh — and I may or may not be addicted to `console.log`.
                    <br />
                    -&gt; Currently exploring better practices, cleaner architectures, and maybe one day… dark mode that works flawlessly. Let’s ship something cool 🚀...
                </article>
                <article><em>samuel@portfolio-Ubuntu:~</em>$</article>
            </motion.div>

        </motion.div>

    </section>
)}
