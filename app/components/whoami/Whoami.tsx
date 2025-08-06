import TypingText from './typingText/TypingText';
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
                <article><em>samuel@portfolio-Ubuntu:~</em>$ <TypingText text='whoami' speed={200}></TypingText></article>
                <motion.article
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition:{ duration: 0.01, delay: 1.6 } }}
                    viewport={{ once: true }}
                >
                    -&gt; Hey, I’m Samuel 👋  
                    <br />
                    -&gt; A systems engineering student with a passion for building useful, clean and fun software — the kind that works *and* makes sense.
                    <br />
                    -&gt; I enjoy crafting full-stack apps using tools like React, Next.js, Node.js, and TypeScript. I like diving deep into how things work, whether it’s deploying APIs, styling with Sass, or tweaking a database query in PostgreSQL.
                    <br />
                    -&gt; I’m always learning something new, writing code that (mostly) works, and deploying projects that reflect both curiosity and growth. Oh — and I may or may not be addicted to `console.log`.
                    <br />
                    -&gt; Currently exploring better practices, cleaner architectures, and maybe one day… dark mode that works flawlessly. Let’s ship something cool 🚀...
                </motion.article>
                <motion.article
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition:{ duration: .1, delay: 1.6 } }}
                    viewport={{ once: true }}
                >
                    <em>samuel@portfolio-Ubuntu:~</em>$
                    <motion.span
                     animate={{ opacity: [0, 1, 0] }}
                     transition={{ repeat: Infinity, duration: 1 }}          
                    >|</motion.span>
                </motion.article>
            </motion.div>

        </motion.div>

    </section>
)}
