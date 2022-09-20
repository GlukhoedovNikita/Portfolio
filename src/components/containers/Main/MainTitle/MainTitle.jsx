/* eslint-disable max-len */

import { Text } from '@components/ui'

import styles from './MainTitle.module.scss'

const MainTitle = () => {
    return (
        <div className={styles.container}>
            <Text text="Hello." size="h1" />
            <Text text="My name is Glukhoedov Nikita" size="h3" />
            <Text
                text="I am engaged in frontend development. On this site you can get acquainted with my works and the tools that I use for development. Have a good time. 🤗"
                size="h4"
            />
        </div>
    )
}

export default MainTitle
