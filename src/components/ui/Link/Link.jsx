import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import cn from 'classnames'

import styles from './Link.module.scss'

const variants = {
    variantHover: { scale: 1.1 },
    variantTab: { scale: 0.9 },
}

const MyLink = ({
    className,
    href,
    text,
    ...props
}) => {
    return (
        <motion.div
            variants={variants}
            whileTap="variantTab"
            whileHover="variantHover"
        >
            <NavLink
                to={href}
                className={({ isActive }) => cn(styles.container, className, {
                    [styles.active]: isActive,
                })}
                {...props}
            >
                {text}
            </NavLink>
        </motion.div>
    )
}

export default MyLink
