/* eslint-disable indent */

const redirectWorks = (name, type) => {
    switch (name) {
        case 'sneakers':
            if (type === 'github') return 'https://github.com/GlukhoedovNikita/Sneakers'
            return ''
        case 'realty':
            if (type === 'github') return 'https://github.com/kendoow/realEstate'
            return ''
        case 'music':
            if (type === 'github') return ''
            return ''
        default:
            throw new Error('Error redicrect works')
    }
}

export default redirectWorks
