'use client'
import styles from './pingme.module.scss';
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaQuestion   } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";


export default function Pingme() {
    return (
        <section className={styles.pingme} id="pingme">
            <div className={styles.details}>
                <mark>PING ME</mark>
                <h3>
                    <span>WANT TO WORK</span> TOGETHER OR JUST GEEK OUT ABOUT CODE? 
                </h3>
                <p>I&apos;m available for freelance projects, collaborations, or full-time positions. Contact me and we&apos;ll discuss how I can help you.</p>

                <div className={styles.info}>
                    <a href="">
                        <MdOutlineEmail />
                    </a>
                    <div>
                        <small>Email</small>
                        <big>samuelmaldonadom@gmail.com</big>
                    </div>
                </div>

                <div className={styles.info}>
                    <a href="">
                        <GoLocation />
                    </a>
                    <div>
                        <small>Location</small>
                        <big>Barranquilla, Colombia</big>
                    </div>
                </div>

                <div className={styles.container_social}>
                    <small>Reach out!</small>                    
                    <div className={styles.social}>
                            <a href="">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/samuel-maldonado-engineer/">
                            <RiLinkedinBoxFill />
                        </a>
                        <a href="">
                            <FaQuestion  />
                        </a>
                    </div>
                    
                </div>

            </div>           
                
            <form className={styles.contact_form}>
                <h3>
                    LET’S GET IN <span>TOUCH</span>
                </h3>

                <div className={styles.form_title}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Your name' required />
                </div>
                <div className={styles.form_title}>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='your@email.com' required />
                </div>
                <div className={styles.form_title}>
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder='Subject of the message' required />
                </div>
                <div className={styles.form_title}>
                    <label>Message</label>
                    <textarea name="message" placeholder='Write your message here...' required></textarea>
                </div>
                <div className={styles.form_button}>
                    <button type="submit">Send message</button>
                </div>
            </form>
        </section>
    )
}