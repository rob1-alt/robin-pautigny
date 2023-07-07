import styles from '@/styles/contextTual.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';



function ContextualMenu() {
    const router = useRouter();

    function isActive(path) {
  return router.asPath === path || router.asPath.startsWith(path);
}
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
                <div className={isActive('/projects') ? ` ${styles.active}` : styles.link}>

          <Link href="/projects">
            <li className={isActive('/projects') ? styles.active : ''}>Work</li>
          </Link>
          {/* ... */}

      </div>

      <div className={isActive('/about') ? ` ${styles.active}` : styles.link}>
          <Link href="/about">
            <li className={isActive('/about') ? styles.active : ''}>About</li>
          </Link>
          {/* ... */}
      </div>
                </ul>
            </div>

        </div>
    )
    }

export default ContextualMenu