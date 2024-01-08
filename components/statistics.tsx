import styles from './statistics.module.css'
import { useResources } from '../utils/resources'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Statistics() {
    const resources = useResources()
    if (!resources) return null

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0 }}
            className={styles.container}
        >
            <div className={styles.downloads}>
                <FontAwesomeIcon icon={faDownload} />
                <h2>{resources.downloads}</h2>
            </div>
        </motion.div>
    )
}
