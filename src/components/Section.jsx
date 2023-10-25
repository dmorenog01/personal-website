const Section = (props) => {
    return (
    <section className="projects">
        <h2 className="black">{ props.sectionLabel }</h2>
        <hr />
        { props.children }
    </section>
    )
}

export default Section