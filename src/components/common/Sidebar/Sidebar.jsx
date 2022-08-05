import MyLink from '@components/ui/Link/Link'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <MyLink text="Home" href="/" />
            <MyLink text="Tools" href="/tools" />
            <MyLink text="Works" href="/works" />
        </div>
    )
}

export default Sidebar
