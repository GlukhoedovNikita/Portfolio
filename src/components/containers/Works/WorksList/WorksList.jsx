import { useMemo } from 'react'

import { WorksItem } from '@components/containers'

import worksItemsArray from '@constants/works.constants'

import styles from './WorksList.module.scss'

const WorksList = () => {
    const memoWorksItemsArray = useMemo(() => worksItemsArray, [])

    return (
        <div className={styles.container}>
            {
                memoWorksItemsArray.map((value, i) => {
                    if (i % 2 !== 0) {
                        return <WorksItem
                            key={value.title}
                            title={value.title}
                            image={value.image}
                            tags={value.tags}
                            reverse
                        />
                    }
                    return <WorksItem
                        key={value.title}
                        title={value.title}
                        image={value.image}
                        tags={value.tags}
                    />
                })
            }
        </div>
    )
}

export default WorksList
