import  Link  from "next/link";
import styles from '../styles/about.module.css';

export default function About() {
    return(
        <div className={styles.mainDiv}>
            <Link href="/">To HomePage</Link>
        </div>
    )
}