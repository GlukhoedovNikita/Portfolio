import { motion } from 'framer-motion'

import CommonLayout from '../CommonLayout/CommonLayout'
import Sidebar from '@components/common/Sidebar/Sidebar'
import MainContactList from '@components/containers/Main/MainContactList/MainContactList'
import Planet from '@components/common/Planet/Planet'
import Stars from '@components/common/Stars/Stars'

import styles from './MainLayout.module.scss'

const variants = {
    initial: { opacity: 0, y: -1000, transition: { ease: [0.35, 0.82, 0.265, 1], duration: 1.2 } },
    animate: { opacity: 1, y: 0, transition: { ease: [0.35, 0.82, 0.265, 1], duration: 1.2 } },
}

const MainLayout = ({ children, ...props }) => {
    return (
        <CommonLayout>
            <motion.div
                initial="initial"
                animate="animate"
                variants={variants}
                className={styles.container}
                {...props}
            >
                <Sidebar />
                <div className={styles.body}>
                    {children}
                </div>
                <MainContactList />
            </motion.div>
            <Planet />
            <Stars />
        </CommonLayout>
    )
}

export default MainLayout
