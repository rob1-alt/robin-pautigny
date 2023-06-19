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
                        <Link href='https://github.com/rob1-alt'>
                            <li className={styles.menuItem}>GIT</li>
                        </Link>
                        <Link href='https://twitter.com/Robin_pautigny'>
                            <li className={styles.menuItem}>TWI</li>
                        </Link>
                        <Link href='mailto:rob1@digital-labs.dev'>
                            <li className={styles.menuItem}>MAIL</li>
                        </Link>
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