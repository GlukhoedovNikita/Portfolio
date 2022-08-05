/* eslint-disable */

const frameContact = (ref, clock) => {
    ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
        Math.cos(clock.getElapsedTime() / 8) * Math.PI
}

export default frameContact
