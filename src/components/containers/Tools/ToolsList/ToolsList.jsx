import { useMemo } from 'react'

import { ToolsItem } from '@components/containers'

import { imageToolsArr } from '@constants/tools.constants'

import styles from './ToolsList.module.scss'

const ToolsList = () => {
    const memoImageToolsArr = useMemo(() => imageToolsArr, [])

    return (
        <div className={styles.container}>
            {
                memoImageToolsArr.map((v, i) => <ToolsItem
                    key={v.alt}
                    index={i}
                    image={v.image}
                    alt={v.alt}
                />)
            }
        </div>
    )
}

export default ToolsList
