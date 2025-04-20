import styles from './toolBox.module.scss';
import * as motion from "motion/react-client";

const cards = [
    {
        icon: '🧑🏻‍💻',
        title: 'Fronted',
        title_decorate: 'Development',
        content: 'I build stuff with <b>React</b>, <b>Next.js</b>, and a healthy mix of <b>TypeScript</b>, <b>JavaScript</b>, and <b>Tailwind CSS</b> on the frontend.',
        animation: { scale: 0.7, opacity: 0 }
    },
    {
        icon: '🔧',
        title: 'Backend &',
        title_decorate: 'Databases',
        content: "I’m comfortable with <b>Node.js</b>, <b>Express</b>, and databases like <b>MySQL</b> and <b>PostgreSQL</b>, and I’ve also worked with <b>Python</b>, <b>Flask</b> and <b>Django</b> for lighter APIs.",
        animation: { scale: 0.7, opacity: 0 },
    },
    {
        icon: '⚙️',
        title: 'Tools &',
        title_decorate: 'Others',
        content: 'For everything else, I rely on <b>Git</b>, <b>Power BI</b> and <b>Excel</b> to keep things clean, versioned, and insightful.',
        animation: { scale: 0.7, opacity: 0 },
    }
]


export default function ToolBox() {
    return (
    <section 
     id="toolBox" 
     className={styles.Toolbox}
     
    >
        <div className={styles.backgrounds}>
            <div className={styles.botton}></div>
        </div> 
        <mark>TOOLBOX</mark>
        <p>HERE’S MY CURRENT LOADOUT – CONSTANTLY EVOLVING:</p>
        <div className={styles.cards_container}>

            {cards.map((cards, index) => {
                return (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    transition: {
                        duration: 0.4
                    },
                    }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                    viewport={{ once: true }}
                    className={styles.card}>
                        <div className={styles.title}>
                            <div>{cards.icon}</div>
                            <h3>
                                {cards.title} <span>{cards.title_decorate}</span>
                            </h3>
                        </div>
                        
                        <p dangerouslySetInnerHTML={{__html: cards.content}}></p>
                    </motion.div>
                )
            }
        )}
            
                

        </div>

    </section>
)}