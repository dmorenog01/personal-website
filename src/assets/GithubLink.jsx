import GitHubLinkSVG from './github-mark.svg'

const GitHubLink = () => {
    const svgStyle = {
        height: '20px',
        width: '20px'
    }
    return (
        <img src={GitHubLinkSVG} style={svgStyle} className="" alt="github link"/>
    )
}

export default GitHubLink