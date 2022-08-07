import cn from 'classnames'

import styles from './Text.module.scss'

const Text = ({
    className,
    text,
    size = 'h2',
    color = 'white',
    ...props
}) => {
    return (
        <div
            className={cn(styles.container, className, {
                [styles.h1]: size === 'h1',
                [styles.h2]: size === 'h2',
                [styles.h3]: size === 'h3',
                [styles.h4]: size === 'h4',
                [styles.white]: color === 'white'
            })}
            {...props}
        >
            {text}
        </div>
    )
}

export default Text
