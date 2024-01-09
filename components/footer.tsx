import styles from './footer.module.css'
import Logo from './logo'

export default function Footer() {
    return (
        <div className={styles.container}>
            <Logo />
            <span>
                © {new Date().getFullYear()} <a>Avoku</a>.
            </span>
        </div>
    )
}
