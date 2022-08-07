import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import Image from '@components/ui/Image/Image'

import styles from './ToolsItem.module.scss'

const ToolsItem = ({
    index,
    image,
    alt,
    className,
    ...props
}) => {
    const ref = useRef()
    const [click, setClick] = useState(false)
    const variants = {
        variantView: { scale: 2, transition: { delay: 1.5 + index * 0.17 } },
        variantHover: { y: -30, transition: { type: 'spring', duration: 0.5 } },
        variantTab: { y: [0, -130, 130], scale: 4, transition: { type: 'spring', duration: 1.4 } }
    }
    const clickHandler = () => setClick(true)
    useEffect(() => {
        if (click) setTimeout(() => setClick(false), 2000)
    }, [click])

    return (
        <motion.div
            variants={variants}
            whileInView="variantView"
            whileHover="variantHover"
            whileTap="variantTab"
            onClick={clickHandler}
            ref={ref}
            className={cn(styles.container, className, {
                [styles.react]: alt === 'React',
                [styles.webpack]: alt === 'Webpack',
                [styles.html]: alt === 'Html',
                [styles.scss]: alt === 'Scss',
                [styles.redux]: alt === 'Redux',
                [styles.js]: alt === 'JavaScript',
                [styles.ts]: alt === 'TypeScript',
                [styles.nodejs]: alt === 'Node Js',
                [styles.git]: alt === 'Git',
                [styles.click]: click,
            })}
            {...props}
        >
            <Image image={image} alt={alt} size="medium" />
        </motion.div>
    )
}

export default ToolsItem
