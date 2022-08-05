import ToolsItem from '../ToolsItem/ToolsItem'

import { imageToolsArr } from '@constants/tools.constants'

import styles from './ToolsList.module.scss'

const ToolsList = () => {
    return (
        <div className={styles.container}>
            {
                imageToolsArr.map((v, i) => <ToolsItem key={v.alt} index={i} image={v.image} alt={v.alt} />)
            }
        </div>
    )
}

export default ToolsList
