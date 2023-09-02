import "../css/MainBody.css"

const CountDays = props => {
    const current = new Date()

    const getNumberOfDays = () => {
        const anni = new Date(props.an);
        return Math.round((current - anni) / (1000 * 3600 * 24));
    }

    return (
        <div className="image-div">
            {/* return different versions based on the sliderVal */}
            <div className="top">{props.title}</div>
            {props.image && <img src={props.image} className="image"></img>}
            <div className="center">{getNumberOfDays()}</div>
            <div className="bottom"> {props.an}</div>
        </div>
    )
}

export default CountDays;