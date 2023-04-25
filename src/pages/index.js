import  Link  from "next/link";
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <Link href="/about">To About Me</Link>

      This is the greeting
    </div>
  )
}
