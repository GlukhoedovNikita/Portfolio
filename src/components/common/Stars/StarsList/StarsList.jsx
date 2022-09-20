/* eslint-disable react/no-array-index-key, react/jsx-closing-tag-location */

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { frame, generateArrayStars } from '@utils/index'

const StarsList = () => {
    const coords = useMemo(() => generateArrayStars(), [])
    const ref = useRef()

    useFrame(({ clock }) => frame(ref, clock, 70))

    return (
        <group ref={ref}>
            {
                coords.map(([p1, p2, p3], i) => <mesh
                    key={i}
                    position={[p1, p2, p3]}
                >
                    <sphereBufferGeometry args={[1, 7, 7]} />
                    <meshBasicMaterial color="lightpink" />
                </mesh>)
            }
        </group>
    )
}

export default StarsList
