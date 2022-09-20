import { Canvas } from '@react-three/fiber'
import cn from 'classnames'

import PlanetList from './PlanetList/PlanetList'

import styles from './Planet.module.scss'

const Planet = ({ className, ...props }) => {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            <Canvas className={styles.canvas}>
                <pointLight intensity={0.2} position={[10, 10, 10]} />
                <rectAreaLight
                    intensity={1}
                    position={[10, 10, 10]}
                    width={10}
                    height={1000}
                />
                <rectAreaLight
                    intensity={1}
                    position={[-10, -10, -10]}
                    width={1000}
                    height={10}
                />
                <PlanetList />
            </Canvas>
        </div>
    )
}

export default Planet
