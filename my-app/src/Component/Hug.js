import "../css/MainBody.css"

const Hug = props => {

    const UpdateHugs = (event) => {
        if (event.target.id === "add") {
            props.SetHug(props.hug + 1)
        }
        else {
            props.SetHug(props.hug - 1)
        }
    }

    return (
        <div className="image-div">
            {/* return different versions based on the sliderVal */}
            <div className="top">要抱抱</div>
            {props.image && <img src={props.image} className="image"></img>}
            <div className="center">{props.hug}</div>
            <div className="bottom">
                <button id="add" onClick={UpdateHugs}>要抱抱</button>   <button id="minus" onClick={UpdateHugs}>還抱抱</button>
            </div>
        </div>
        //     <div>

        //         Hug Component
        //         <button>要抱抱還欠</button>
        //     </div>
    )
}

export default Hug;