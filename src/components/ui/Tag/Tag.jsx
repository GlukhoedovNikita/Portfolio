import cn from 'classnames'

import styles from './Tag.module.scss'

const Tag = ({ text, className, ...props }) => {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            {text}
        </div>
    )
}

export default Tag
