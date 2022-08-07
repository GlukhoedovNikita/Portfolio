import cn from 'classnames'

import styles from './Image.module.scss'

const Image = ({
    image,
    alt,
    size,
    className,
    ...props
}) => {
    return (
        <img
            className={cn(styles.container, className, {
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
            })}
            src={image}
            alt={alt}
            {...props}
        />
    )
}

export default Image
