import LinkArrowSVG from './linkto.svg'

const LinkArrow = () => {
    const svgStyle = {
        height: '18px',
        width: '18px'
    }
    return (
        <img src={LinkArrowSVG} style={svgStyle} className="" alt="live project link"/>
    )
}

export default LinkArrow