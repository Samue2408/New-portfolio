import Image from 'next/image';
import styles from './herosection.module.scss';


export default function HeroSection() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.backgrounds}>
                <div className={styles.background1}></div>
                <div className={styles.background2}></div>
                <div className={styles.botton}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.hero_info}>
                    <mark>Software developer</mark>
                    <h1>Creating digital <span>experiences</span> of the future</h1>
                    <p>Specializing in modern web development and applications that combine performance and exceptional design.</p>
                    <div>
                        <a  href="#projects" className={styles.button}>View projects</a>
                        <a  href="#contact" className={styles.button2}>Contact me</a>
                    </div>
                </div>
                <div className={styles.hero_image}>                
                    <div className={styles.container}>
                        <div className={styles.background_degraded}></div>
                        <div className={styles.border_degraded}></div>

                        <div className={styles.image_container}>
                            <Image 
                            width={500}
                            height={500}
                            src="https://portfolio-maldonados.vercel.app/static/media/profile.5d67b85e8bc7717be33a.webp" 
                            alt="Hero Image" 
                            />
                        </div>
                        <div className={styles.name}><p>SAMUEL MALDONADO</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
    }