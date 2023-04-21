// 404.js
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function FourOhFour() {
  return <>
  
  <div className={styles.main}>

    <h1 className={styles.four}>404</h1>
    {/* <Link href="/">
      <p>
        Go back home
      </p>
    </Link> */}
  </div>
  </>
}