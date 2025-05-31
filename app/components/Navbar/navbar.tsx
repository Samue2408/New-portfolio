import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/">
                    <span className={styles.title}>
                        DEV
                        <span className={styles.title_white}>.SAMUEL</span>
                        </span>
                </Link>
                <nav className={styles.navbar}>
                    <a href="#home">Home</a>
                    <a href="#missions">Missions</a>
                    <a href="#toolBox">Toolbox</a>
                    <a href="#whoami">Whoami</a>
                    <a href="#contact">Ping me</a>
                </nav>
                <a target='blank' href='hojadevida.pdf' className={styles.curriculum}>Download CV</a>
            </div>
        </header>
    )
}