const TitleDate = ({ title, date }) => {
    return (
        <div className="td">
            <h2>{title}</h2>
            <h2 style={{textAlign: 'right'}}>{date}</h2>
        </div>
    )
}

export default TitleDate