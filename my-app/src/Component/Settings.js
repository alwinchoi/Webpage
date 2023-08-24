import "../css/Settings.css"
import { useState, useEffect } from 'react';

const Settings = props => {
    const [date, SetDate] = useState(new Date());

    const changeNickName = (name) => {
        props.SetNickName(name)
    }

    // update useState after it has been selected
    const changeBirthday = () => {
        let date = document.getElementById("datepicker")
        // validation checking 
        if (date.value == "") {
            alert("Please select a valid date")
        }
        props.SetBirthday(date.value)
        window.localStorage.setItem('Birthday', date.value)
        // reset value
        date.value = ''
    }

    const handleChange = (event) => {
        // console.log(e.target.files);
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const imageURL = reader.result;

            localStorage.setItem('Image', imageURL);

            props.SetImage(imageURL);
        }

        reader.readAsDataURL(file);
        document.getElementById("fileUpload").value = "";
    }

    return (
        <div>
            <p className="title"> Settings </p>
            <input type="date" id="datepicker" />
            {/* onChange={(value) => changeBirthday(value)} */}
            <br />
            <button className='button' onClick={() => changeBirthday()}> Change Birthday </button>
            <input type='file' onChange={handleChange} id="fileUpload"></input>
        </div >
    )
}

export default Settings;