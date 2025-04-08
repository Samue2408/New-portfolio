'use client';

import styles from './floatingbutton.module.scss';
import { IoMdSettings } from "react-icons/io";


import { useState } from 'react';


export default function FloatingButton() {
    const [ openSettings, setOpenSettings ] = useState(false);

    const toggleNetworks = () => {
        setOpenSettings(!openSettings)
    }
    return (
        <div className={styles.floating_button}>
            
            <button
             onClick={toggleNetworks}
             className={styles.icon}
            >
                <IoMdSettings  />
            </button>
        </div>
    );
}