import styles from './statistics.module.css'
import { useResources } from '../utils/resources'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Statistics() {
    const resources = useResources()
    if (!resources) return null

    return (
        <div
            className={styles.container}
        >
            <div className={styles.downloads}>
                <FontAwesomeIcon icon={faDownload} />
                <h2>{resources.downloads}</h2>
            </div>
        </div>
    )
}
