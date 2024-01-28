import styles from './logo.module.css'

export default function Logo(props: { wordmark?: boolean; label?: boolean }) {
    return (
        <div className={styles.wrapper}>
            <svg
                className="nav-logo"
                id="er4CKHvxbD81"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
            >
                <path
                    d="M150.43026,38.6335l58.05789,86.20939L150,102.58786L44.24684,261.3665h-43.81658l150-222.733Zm149.13948,222.733h-43.81658L165.90379,131.19485l42.58437,14.33889L299.56974,261.3665Zm-238.88975,0l21.853096-32.805355h152.679513L257.799827,261.3665h-197.119837Z"
                    strokeWidth="0"
                />
            </svg>
            {props.wordmark && <h1>Documentation</h1>}
            {props.label && <span className={styles.label}>Beta</span>}
        </div>
    )
}
