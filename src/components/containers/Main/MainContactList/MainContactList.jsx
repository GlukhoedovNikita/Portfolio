import { Canvas } from '@react-three/fiber'

import { MainContact } from '@components/containers'

import styles from './MainContactList.module.scss'

import { githubImg, telegramImg } from '@assets/img'

const MainContactList = () => {
    return (
        <div className={styles.container}>
            <Canvas className={styles.canvas}>
                <ambientLight intensity={1} />
                <directionalLight />
                <MainContact
                    position={[0, 1.1, 0]}
                    image={githubImg}
                    type="github"
                />
                <MainContact
                    position={[0, -1.1, 0]}
                    image={telegramImg}
                    type="telegram"
                />
            </Canvas>
        </div>
    )
}

export default MainContactList
