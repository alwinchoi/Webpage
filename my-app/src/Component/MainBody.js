import "../css/MainBody.css"

import React, { useState, useEffect } from "react";

const MainBody = props => {
    const [sliderVal, SetSliderVal] = useState(0)
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const birthday = props.birthday
    // const birthday = new Date(props.birthday.substr(0, 4).props.birthday.substr(5, 7), props.birthday.substr(8,))
    // const date2 = `${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`

    //componentDidUpdate, when there is update to props
    useEffect(() => {
        // clean up if needed
        // console.log(props.image)
        return () => {

        };
    }, [props])

    // read jsonData

    const calculateDiff = () => {
        // const compare = current - birthday;
        // return compare.toISOString()
    }

    const FormatBirthday = () => {
        const date = new Date(birthday)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const getNumberOfDays = () => {
        const anni = new Date(props.an);
        return Math.round((current - anni) / (1000 * 3600 * 24));
    }

    const setSlider = () => {
        const slider = document.getElementById('mySlider')
        console.log(slider.value)
        SetSliderVal(slider.value)
        // slider.value = toString(event.target.value)
    }

    const getButtonStyle = () => {
        if (sliderVal <= 50) {
            // left slide
            return "buttonBlack"
        }
        return "buttonWhite"
    }

    return (
        <div>
            <div className="heading">
                <p className="mainBody-title"> Today: {date} </p>
                <p>
                    {props.nickname}'s Birthday: {FormatBirthday()} {calculateDiff()}
                </p>
            </div>
            <div className="image-div">
                <div className="top">{props.title}</div>
                {props.image && <img src={props.image} className="image"></img>}
                <div className="center">{getNumberOfDays()}</div>
                <div className="bottom"> {props.an}</div>
            </div>
            {/* slider */}
            <div>
                <input type="range" min="0" max="100" value={sliderVal} id="mySlider" name="mySlider" step="100" onInput={setSlider}></input>
                <button class={getButtonStyle()}> Test </button>
                <label>test</label>
                {/* value="50" */}
                {/* onInput={setSlider}  */}
            </div>
            <hr style={{ marginBlockEnd: "0.35em" }}></hr> {/* marginBlockStart: "0.35em", */}
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default MainBody;