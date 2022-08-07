/* eslint-disable max-len */

import Text from '@components/ui/Text/Text'

import styles from './MainTitle.module.scss'

const MainTitle = () => {
    return (
        <div className={styles.container}>
            <Text text="Hello." size="h1" />
            <Text text="My name is Lorem Ipsum" size="h3" />
            <Text
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
                size="h4"
            />
        </div>
    )
}

export default MainTitle
