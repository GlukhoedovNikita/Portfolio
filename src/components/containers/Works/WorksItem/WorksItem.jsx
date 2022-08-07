import cn from 'classnames'

import WorksLinkList from '../WorksLinkList/WorksLinkList'
import Image from '@components/ui/Image/Image'
import Tag from '@components/ui/Tag/Tag'
import Text from '@components/ui/Text/Text'

import styles from './WorksItem.module.scss'

import githubImg from '@assets/img/github.jpg'
import viewImg from '@assets/img/view.jpg'

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
                <Image image={image} alt="" size="big" />
            </div>
            <div className={styles.blockContent}>
                <Text text={title} size="h2" />
                <div className={styles.blockTags}>
                    {
                        tags.map((tag) => <Tag key={tag} text={tag} />)
                    }
                </div>
                <div className={styles.blockLink}>
                    <WorksLinkList name={title.toLowerCase()} type="github" image={githubImg} />
                    <WorksLinkList name={title.toLowerCase()} type="view" image={viewImg} />
                </div>
            </div>
        </div>
    )
}

export default WorksItem
