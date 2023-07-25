// import css
import { useState, useEffect } from 'react';

const Settings = props => {
    const [date, SetDate] = useState(new Date());

    const changeNickName = (name) => {
        props.SetNickName(name)
    }

    const changeBirthday = (date) => {
        let temp = new Date(date.timeStamp)
        console.log(temp)
        console.log("here")
        // props.SetBirthday(date)
    }

    return (
        <div>
            Test
            <input type="date" onChange={(value) => changeBirthday(value)} />
        </div>
    )
}

export default Settings;