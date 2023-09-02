import "../css/Settings.css"
import { useState } from 'react';

const Settings = props => {
    // const [date, SetDate] = useState(new Date());

    const changeNickName = (name) => {
        props.SetNickName(name)
    }

    // update jsonData by creating dictionary based on form

    // update useState after it has been selected
    const changeDate = (event) => {
        // console.log(event.target.id)

        // check if it is birthday or anniversay date
        if (event.target.id == "birthdayBtn") {
            let date = document.getElementById("birthdayDatePicker")

            // validation checking 
            if (date.value == "") {
                alert("Please select a valid date")
            }
            else {
                props.SetBirthday(date.value)
                window.localStorage.setItem('Birthday', date.value)
            }
            // reset value
            date.value = ''
        }
        else { //anniversary 
            let date = document.getElementById("anniversaryDatePicker")

            // validation checking 
            if (date.value == "") {
                alert("Please select a valid date")
            }
            else {
                props.SetAn(date.value)
                window.localStorage.setItem('Anniversary', date.value)
            }
            // reset value
            date.value = ''
        }
    }

    const imageChange = (event) => {
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

    const updateTitle = () => {
        const event = document.getElementById("titleInput");

        // check not empty
        if (event.value) {
            // update useState
            props.SetTitle(event.value)
        }

        event.value = "";
        localStorage.setItem('Title', event.value);
    }

    const reset = (event) => {
        const dict = {
            'birthdayResetBtn': "birthdayDatePicker",
            'anniversaryResetBtn': 'anniversaryDatePicker'
        }

        if (event.target.id in dict) {
            const tag = document.getElementById(dict[event.target.id])
            tag.value = ""
        }

    }

    return (
        <div>
            {/* onChange={(value) => changeBirthday(value)} */}
            <p className="title"> Settings </p>
            {/* <div>
                <form>
                    <label>Birthday</label>
                    <input type="date"></input><br></br>
                    <button>Reset</button>  <input type="submit"></input>
                </form>
            </div> */}
            <div>
                <p className="Setting-heading"> Dates </p>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <table>
                        <tr>
                            <td>Birthday</td>
                            <td className="centered-column"><input type="date" className="datepicker" id="birthdayDatePicker" /> <br /></td>
                            <td><button className='button' id="birthdayBtn" onClick={changeDate}> Change Date </button></td>
                            <td><button className='button' id="birthdayResetBtn" onClick={reset}> Reset </button></td>
                        </tr>
                        <tr>
                            <td>Anniversary</td>
                            <td className="centered-column"><input type="date" className="datepicker" id="anniversaryDatePicker" /> <br /></td>
                            <td><button className='button' id="anniversaryBtn" onClick={changeDate}> Change Date </button></td>
                            <td><button className='button' id="anniversaryResetBtn" onClick={reset}> Reset </button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="container">
                <p className="Setting-heading"> Change Image Title </p> <input type='Text' id="titleInput"></input>
                <button className='button' onClick={updateTitle}> Update </button>
            </div>
            <div className="container">
                <p className="Setting-heading"> Upload Image </p> <input type='file' onChange={imageChange} id="fileUpload"></input>
            </div>
        </div>
    )
}

export default Settings;