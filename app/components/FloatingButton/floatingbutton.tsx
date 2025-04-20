'use client';

import styles from './floatingbutton.module.scss';
import { IoMdSettings, IoMdMoon, IoMdSunny } from "react-icons/io";
import * as motion from "motion/react-client"
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';



export default function FloatingButton() {
    const [ openSettings, setOpenSettings ] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [selectPalette2, setSelectPalette2] = useState(false);

    const [lightMode, setLightMode] = useState(false);

    const toggleSettings = () => setOpenSettings(!openSettings)

    const togglePalette = () => setSelectPalette2(!selectPalette2)

    useEffect(() => {
        document.body.classList.toggle('light_mode', lightMode);
        setIsOn((prevIsOn) => !prevIsOn)
      }, [lightMode]);

      useEffect(() => {
        document.body.classList.toggle('palette2', selectPalette2);
        console.log(selectPalette2)
      }, [selectPalette2]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 30,
            x: 15,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: 'tween',
            }
        },
        exit: {
            opacity: 0,
            y: 30,
            x: 15,
            scale: 0.8
        }
    }

    return (
        <div className={styles.settings_container}>

            <AnimatePresence>
                {openSettings && (
                    <motion.div
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={variants}
                    className={styles.settings}>
                        <div className={styles.theme}>
                            <h5>Theme</h5>
                            <div className={styles.theme_options}>
                            <button
                                className={styles.toggle_container}
                                style={{
                                    justifyContent: "flex-" + (isOn ? "start" : "end"),
                                }}
                                onClick={() => setLightMode(!lightMode)}
                            >
                                <motion.div
                                    className={styles.toggle_handle}
                                    layout
                                    transition={{
                                        type: "spring",
                                        visualDuration: 0.2,
                                        bounce: 0.2,
                                    }}
                                >
                                    {isOn ? (
                                        <IoMdMoon></IoMdMoon>
                                    ) : (
                                        <IoMdSunny></IoMdSunny>
                                    ) }
                                    
                                </motion.div>
                            </button>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.palettes}>
                            <div>
                                <h5>Palettes</h5>
                                <p>Choose your palette</p>

                            </div>
                            <div className={styles.palette_options}>
                                <button
                                onClick={togglePalette}
                                className={`${styles.palette1} ${ !selectPalette2 ? styles.active : null}`}>
                                    Green
                                </button>
                                <button 
                                onClick={togglePalette}
                                className={`${styles.palette2} ${ selectPalette2 ? styles.active : null}`}>
                                    Purple
                                </button>
                            </div>
                        </div>
                    </motion.div>

                )}

            </AnimatePresence>

            
            <motion.button
             
             whileTap={{
                rotate: 360


             }}
             onClick={toggleSettings}
             className={styles.floating_button}
            >
                
                <IoMdSettings className={styles.icon}  />
            </motion.button>
        </div>
    );
}