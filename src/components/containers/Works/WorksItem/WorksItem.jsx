import cn from 'classnames'

import { WorksLinkList } from '@components/containers'
import { Image, Tag, Text } from '@components/ui'

import styles from './WorksItem.module.scss'

import { githubImg } from '@assets/img'

const WorksItem = ({
    title,
    image,
    tags,
    reverse = false,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(styles.container, className, {
                [styles.reverse]: reverse,
            })}
            {...props}
        >
            <div className={styles.blockImage}>
                <Image className={styles.image} image={image} alt="" size="big" />
            </div>
            <div className={styles.blockContent}>
                <Text className={styles.title} text={title} size="h2" />
                <div className={styles.blockTags}>
                    {
                        tags.map((tag) => <Tag key={tag} text={tag} />)
                    }
                </div>
                <div className={styles.blockLink}>
                    <WorksLinkList name={title.toLowerCase()} type="github" image={githubImg} />
                </div>
            </div>
        </div>
    )
}

export default WorksItem
