import { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d'

import frameContact from '@utils/frameContact'
import redirectContact from '@utils/redirectContact'

const variants = {
    variantHover: { scale: 1.2, transition: { type: 'spring', duration: 0.3 } },
    initial: { scale: 1 }
}

const MainContact = ({ type, image, ...props }) => {
    const ref = useRef()
    const [hover, setHover] = useState(false)
    useEffect(() => {
        document.body.style.cursor = hover ? 'pointer' : 'auto'
    }, [hover])
    const hoverHandler = (value) => setHover(value)

    useFrame(({ clock }) => frameContact(ref, clock))
    const [texture] = useLoader(TextureLoader, [image])
    const redirectHandler = () => redirectContact(type)

    return (
        <motion.mesh
            onClick={redirectHandler}
            variants={variants}
            initial="initial"
            whileHover="variantHover"
            onPointerOut={() => hoverHandler(false)}
            onPointerOver={() => hoverHandler(true)}
            ref={ref}
            scale={1.1}
            {...props}
        >
            <boxGeometry args={[1, 1]} />
            <meshStandardMaterial map={texture} color="rgb(74, 0, 114)" />
        </motion.mesh>
    )
}

export default MainContact
