import { Canvas } from '@react-three/fiber'
import cn from 'classnames'

import StarsList from './StarsList/StarsList'

import styles from './Stars.module.scss'

const Stars = ({ className, ...props }) => {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight
                    intensity={0.6}
                    position={[30, 30, 50]}
                    angle={0.2}
                    penumbra={1}
                    castShadow
                />
                <StarsList />
            </Canvas>
        </div>
    )
}

export default Stars
