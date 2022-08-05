import styles from './CommonLayout.module.scss'

const CommonLayout = ({ children, ...props }) => {
    return (
        <div
            className={styles.container}
            {...props}
        >
            {children}
        </div>
    )
}

export default CommonLayout
