import "../css/MainBody.css"

import React, { useState, useEffect } from "react";

const MainBody = props => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const birthday = props.birthday
    // const birthday = new Date(props.birthday.substr(0, 4).props.birthday.substr(5, 7), props.birthday.substr(8,))
    // const date2 = `${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`

    //componentDidUpdate, when there is update to props
    useEffect(() => {


        // clean up if needed
        return () => {

        };
    }, [props])

    const calculateDiff = () => {
        // const compare = current - birthday;
        // return compare.toISOString()
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
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default MainBody;