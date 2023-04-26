import styles from '../styles/static_nav_bar.module.css';
import Link from 'next/link';

export default function StaticNavBar () {
    return (
        <div className={styles.StaticNavBar}>
            <Link href="/" className={styles.Link}>About Me</Link>
            <Link href="/projects" className={styles.Link}>Projects</Link>
        </div>
    )
}