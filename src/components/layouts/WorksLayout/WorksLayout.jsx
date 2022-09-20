import { motion } from 'framer-motion'

import { CommonLayout } from '@components/layouts'
import { Stars, Sidebar } from '@components/common'

import styles from './WorksLayout.module.scss'

const variants = {
    initial: { opacity: 0, y: -1000, transition: { ease: [0.35, 0.82, 0.265, 1], duration: 1.2 } },
    animate: { opacity: 1, y: 0, transition: { ease: [0.35, 0.82, 0.265, 1], duration: 1.2 } },
}

const WorksLayout = ({ children, ...props }) => {
    return (
        <CommonLayout>
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                className={styles.container}
                {...props}
            >
                <Sidebar />
                <div className={styles.body}>
                    {children}
                </div>
            </motion.div>
            <Stars />
        </CommonLayout>
    )
}

export default WorksLayout
