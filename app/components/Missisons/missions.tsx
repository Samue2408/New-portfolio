'use client'

import styles from './missions.module.scss';
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from 'react';
import Image from 'next/image';



const projects = [
    {
        id: '1',
        img: 'https://res.cloudinary.com/dcnm1frkz/video/upload/v1744913513/V%C3%ADdeo_sin_t%C3%ADtulo_Hecho_con_Clipchamp_anwemt.mp4',
        title: 'Work Plan Managament',
        deployed: false,
        status: 'Code complete, slepp deprived',
        description: 'A project management tool that helps teams plan, track, and manage their work.',
        tecnologies: ['MySQL', 'Python', 'Flask', 'Javascript', 'HTML', 'CSS', ]
    },
    {
        id: '2',
        img: '/VehicleCare.png',
        title: 'Vehicle Care',
        deployed: false,
        status: 'No domain, no fame',
        description: 'A web application that helps users manage their vehicle maintenance and repairs.',
        tecnologies: ['Flutter']
    },
    {
        id: '3',
        img: '/old_portfolio.png',
        title: 'Previus Portfolio',
        deployed: true,
        status: 'Stable, but outdated',
        description: 'A personal portfolio website that showcases my work and skills.',
        tecnologies: ['React', 'SCSS']
    },
    {
        id: '4',
        img: '/MyMcakeshop.png',
        title: 'M&M cake shop',
        deployed: true,
        status: 'Live, but evolving',
        description: 'Web application for a backery where customers can view products and their most relevant information.',
        tecnologies: ['Next.js', 'React', 'Tailwind CSS', 'Cloudinary']
    },
    {
        id: '5',
        img: '/RentaGO.png',
        title: 'Renta GO',
        deployed: false,
        status: 'Production-ready & proud',
        description: 'Car rental applicarion with security by hashing passwords and using authenticacition tokens',
        tecnologies: ['Angular', 'Node.js', 'MySQL']
    }
]

export default function Missions() {

    const [selectedId, setSelectedId] = useState<string | null>(null)

    const addClassCardFocus = (id: string) => {
        setSelectedId(id);
        const cardFocus = document.getElementById('card_focus')
        console.log('antes del if')
        if (cardFocus) {
            console.log(cardFocus.classList)
            cardFocus.classList.add(`card${id}`)
        }
    }

    const removeClassCardFocus = () => {
        setSelectedId(null);
        const cardFocus = document.getElementById('card_focus')
        if (cardFocus) {
            cardFocus.classList.remove(`card${selectedId}`)
            setSelectedId(null);
        }
        
    }


    return (
        <section id="missions" className={styles.missions}>
            <div className={styles.backgrounds}>
                <div className={styles.botton}></div>
            </div> 
            <mark>MISSIONS</mark>
            <p>A.K.A. PTOJECTS (tap to see more)</p>

            <motion.div             
             className={styles.cards_container}
            >
                <div className={styles.cards1}>
                    <motion.div 
                     initial={{
                        opacity: 0, x: -100
                     }}
                     whileInView={{
                        opacity: 1, x: 0, 
                        transition: { duration: 1 }
                     }}
                     
                     viewport={{ once: true }}
                     key={projects[0].id}  
                     layoutId={projects[0].id}
                     layout
                     className={styles.card}                    
                     onClick={()=> addClassCardFocus(projects[0].id)}
                    >                        
                        <video height='180' >
                            <source src={projects[0].img} type='video/mp4'/>
                        </video>                            
                        <div className={styles.card_description}>
                            <h3>{projects[0].title}</h3>
                            <div>
                                {projects[0].deployed ? <span>🟢</span> :  <span>🔵</span>}
                                <p>{projects[0].status}</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.cards2}>
                        {projects.slice(1, 3).map(project => (
                            <motion.div 
                            initial={{
                                opacity: 0, x: -100
                             }}
                             whileInView={{
                                opacity: 1, x: 0, 
                                transition: { duration: 1 }
                             }}
                             viewport={{ once: true }}
                             key={project.id}  
                             layout
                             layoutId={project.id}
                             className={styles.card}
                             onClick={()=> addClassCardFocus(project.id)}
                            >
                                <Image 
                                    alt={project.title}
                                    src={project.img}
                                    width={280}
                                    height={190}
                                    />
                                <div className={styles.card_description}>
                                    <h3>{project.title}</h3>
                                    <div>
                                        {project.deployed ? <span>🟢</span> :  <span>🔵</span>}
                                        <p>{project.status}</p>
                                    </div>
                                </div>
                                
                                
                            </motion.div>
                        ))}
                    </div>

                </div>

                <div className={styles.cards3}>
                    {projects.slice(3).map(project => (
                        <motion.div 
                        initial={{
                            opacity: 0, x: 100
                         }}
                         whileInView={{
                            opacity: 1, x: 0, 
                            transition: { duration: 1 }
                         }}
                         
                         viewport={{ once: true }}
                         key={project.id}  
                         layout
                         layoutId={project.id}
                         className={styles.card}
                        
                         onClick={()=> addClassCardFocus(project.id)}>
                            <Image 
                                 alt={project.title}
                                 src={project.img}
                                 width={280}
                                 height={190}
                                />
                            <div className={styles.card_description}>

                                <h3>{project.title}</h3>
                                <div >
                                    {project.deployed ? <span>🟢</span> :  <span>🔵</span>}
                                    <p>{project.status}</p>
                                </div>

                            </div>
                            
                            
                        </motion.div>
                    ))}

                    <motion.div
                     initial={{
                        opacity: 0, x: 100
                     }}
                     whileInView={{
                        opacity: 1, x: 0, 
                        transition: { duration: 1 }
                     }}
                     
                     viewport={{ once: true }}
                     className={styles.shell}>
                        <h5>shell</h5>
                        <div>
                            <p>$ <em>start</em> project</p>
                            <p>{`>`} <span>Error:</span> confidence module not found</p>
                        </div>
                    </motion.div>
                </div>


                
            </motion.div>
            
            <AnimatePresence>
                {selectedId && (
                    <motion.div        
                    className={styles.card_focus_container}
                    initial={{
                        paddingTop: (typeof window !== 'undefined' && window.innerWidth <= 713)
                        ? parseInt(selectedId) * 230
                        : 0
                    }}
                    exit={{opacity: 0}}
                    layout
                    >
                        <motion.div className={styles.card_focus} layoutId={selectedId}>
                            {projects[parseInt(selectedId)-1].id === '1' ? 

                                <video height='200' controls >
                                   <source src={projects[parseInt(selectedId)-1].img} type='video/mp4'/>
                                </video>  

                                :<Image 
                                 alt={projects[parseInt(selectedId)-1].title}
                                 src={projects[parseInt(selectedId)-1].img}
                                 width={280}
                                 height={190}
                                />
                            }
                            <div className={styles.card_description}>
                                <h3>{projects[parseInt(selectedId)-1].title}</h3>
                                <div>
                                    {projects[0].deployed ? <span>🟢</span> :  <span>🔵</span>}
                                    <p>{projects[0].status}</p>
                                </div>
                                    <article>{projects[parseInt(selectedId)-1].description}</article>
                                <button onClick={()=>removeClassCardFocus()}>X</button>

                                <div className={styles.tecnologies}>
                                    {projects[parseInt(selectedId)-1].tecnologies.map((tecno, i)=>(
                                        <mark key={i}>
                                            {tecno}
                                        </mark>
                                    ))}
                                </div>

                            </div>
                            
                            
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>                
            


        </section>
    )
}