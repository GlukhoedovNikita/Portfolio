import { Canvas } from '@react-three/fiber'
import cn from 'classnames'

import WorksLinkItem from '../WorksLinkItem/WorksLinkItem'

import styles from './WorksLinkList.module.scss'

const WorksLinkList = ({
    name,
    type,
    image,
    className,
    ...props
}) => {
    return (
        <Canvas
            className={cn(styles.container, className)}
            {...props}
        >
            <ambientLight intensity={1} />
            <directionalLight />
            <WorksLinkItem name={name} type={type} image={image} position={[0, 0, 0]} />
        </Canvas>
    )
}

export default WorksLinkList
