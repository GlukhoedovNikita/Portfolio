import { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d'

import frame from '@utils/frame'
import redirectWorks from '@utils/redirectWorks'

const variants = {
    variantHover: { scale: 1.2, transition: { type: 'spring', duration: 0.3 } },
    initial: { scale: 1 }
}

const WorksLinkItem = ({
    name,
    type,
    image,
    ...props
}) => {
    const ref = useRef()
    const [hover, setHover] = useState(false)

    const hoverHandler = (value) => setHover(value)

    useEffect(() => {
        document.body.style.cursor = hover ? 'pointer' : 'auto'
    }, [hover])

    const redirectHandler = () => window.location.replace(redirectWorks(name, type))

    useFrame(({ clock }) => frame(ref, clock))
    const [texture] = useLoader(TextureLoader, [image])

    return (
        <motion.mesh
            onClick={redirectHandler}
            variants={variants}
            initial="initial"
            whileHover="variantHover"
            ref={ref}
            onPointerOut={() => hoverHandler(false)}
            onPointerOver={() => hoverHandler(true)}
            {...props}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial map={texture} color="rgb(74, 0, 114)" />
        </motion.mesh>
    )
}

export default WorksLinkItem
