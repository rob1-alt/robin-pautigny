import styles from '@/styles/contextTual.module.css'
import Link from 'next/link'


function ContextualMenu() {
    return (
        <div className={styles.contextualMenu}>
            <div className={styles.logo}>
            <a href='/'>
                <p>
                RP<br/>
                YOUNG<br/>
                CREATIVE<br/>
                ENTREPRENEUR
                </p>
            </a>
            </div>
            <div>
                <ul className={styles.menu}>
                    <div className={styles.menuList}>
                        <Link href='https://www.linkedin.com/in/robin-pautigny/'>
                            <li className={styles.menuItem}>IN</li>
                        </Link>
                        <li className={styles.menuItem}>GIT</li>
                        <li className={styles.menuItem}>IG</li>
                        <li className={styles.menuItem}>MAIL</li>
                    </div>
                </ul>    
            </div>

            <div className={styles.middleNav}>
                <ul className={styles.links}>
                <Link href="/projects">
                    <li>Work</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                </ul>
            </div>

        </div>
    )
    }

export default ContextualMenu