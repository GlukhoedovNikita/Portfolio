const PlanetItem = (props) => {
    return (
        <mesh {...props}>
            <sphereBufferGeometry args={[0.5, 50, 50]} />
            <meshStandardMaterial color="rgb(215, 204, 200)" />
        </mesh>
    )
}

export default PlanetItem
