import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import PlanetItem from '../PlanetItem/PlanetItem'

import { frame } from '@utils/index'

const PlanetList = (props) => {
    const ref = useRef()
    useFrame(({ clock }) => frame(ref, clock))
    return (
        <group ref={ref} {...props}>
            <PlanetItem position={[0, 0, 0]} scale={2.3} />
            <PlanetItem position={[-2.3, 3, 0]} scale={0.4} />
            <PlanetItem position={[-3.3, -2.2, 0]} scale={0.4} />
            <PlanetItem position={[3.3, -1.8, 0]} scale={0.4} />
            <PlanetItem position={[2.8, 2.6, 0]} scale={0.4} />
        </group>
    )
}

export default PlanetList
