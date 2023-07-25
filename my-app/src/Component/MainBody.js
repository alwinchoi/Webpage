import "../css/MainBody.css"

import React, { useState, useEffect } from "react";

const MainBody = props => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const birthday = props.birthday

    //componentDidUpdate, when there is update to props
    useEffect(() => {


        // clean up if needed
        return () => {

        };
    }, [props])

    const calculateDiff = () => {
        return "hi"
    }

    return (
        <div>
            <div className="heading">
                <p className="title"> Today's date: {date}
                </p>
                <p>
                    Birthday: {birthday} {calculateDiff()}
                </p>
            </div>
        </div>
    )
}

export default MainBody;