/* eslint-disable */

const frame = (ref, clock, speed = 8) => {
    ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
        Math.cos(clock.getElapsedTime() / speed) * Math.PI
}

export default frame
