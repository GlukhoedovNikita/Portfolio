import cn from 'classnames'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

import PlanetList from './PlanetList/PlanetList'

import styles from './Planet.module.scss'

const Planet = ({ className, ...props }) => {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            <Canvas>
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

                {/* <OrbitControls
                    enableDamping={false}
                    enablePan={false}
                    enableZoom={false}
                    enableRotate
                    rotateSpeed={0.25}
                /> */}

                <PlanetList />
            </Canvas>
        </div>
    )
}

export default Planet
