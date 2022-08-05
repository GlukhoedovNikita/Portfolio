import cn from 'classnames'

import styles from './Text.module.scss'

const Text = ({
    className,
    text,
    size = 'medium',
    color = 'white',
    ...props
}) => {
    return (
        <div
            className={cn(styles.container, className, {
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
                [styles.white]: color === 'white'
            })}
            {...props}
        >
            {text}
        </div>
    )
}

export default Text
