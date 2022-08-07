const generateArrayStars = () => {
    const coords = Array(1200).fill().map(() => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
    ])
    return coords
}

export default generateArrayStars
