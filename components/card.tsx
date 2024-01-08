import styles from './card.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function Card(props: {
    icon: IconProp
    description: string
    link: {
        text: string
        url: string
    }
}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <FontAwesomeIcon icon={props.icon} />
                <p>{props.description}</p>
            </div>
            <Link href={props.link.url}>
                <button>{props.link.text}</button>
            </Link>
        </div>
    )
}
