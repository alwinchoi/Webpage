import logo from './logo.svg';
import './App.css';
import MainBody from './Component/MainBody';
import React, { useState, useEffect } from "react";
import Settings from './Component/Settings';

function App() {
  const [birthday, SetBirthday] = useState('2001-11-15');
  const [nickname, SetNickName] = useState('小猫咪');
  const [an, setAn] = useState('2022=10-03');
  const [image, SetImage] = useState();

  // onMount
  useEffect(() => {
    // load the birthday and nickname saved value
    const birthday = window.localStorage.getItem("Birthday");
    const nickname = window.localStorage.getItem("nickname");
    const img = window.localStorage.getItem("Image");
    const an = window.localStorage.getItem("Anniversary");
    console.log(img)
    if (birthday != null) { SetBirthday(birthday); }
    if (nickname != null) { SetNickName(nickname); }
    if (img != null) { SetImage(img); }
    if (an != null) { setAn(an); }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MainBody birthday={birthday} nickname={nickname} image={image} an={an}>
          <Settings SetBirthday={SetBirthday} birthday={birthday} nickname={nickname} SetNickName={SetNickName} SetImage={SetImage} SetAn={SetAn} />
        </MainBody>
      </header>
    </div>
  );
}

export default App;
