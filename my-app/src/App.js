import logo from './logo.svg';
import './App.css';
import MainBody from './Component/MainBody';
import React, { useState, useEffect } from "react";
import Settings from './Component/Settings';

function App() {
  const [birthday, SetBirthday] = useState('15/11/2001');
  const [nickname, SetNickName] = useState('小猫咪');

  return (
    <div className="App">
      <header className="App-header">
        <MainBody birthday={birthday} nickname={nickname}>
          <Settings SetBirthday={SetBirthday} birthday={birthday} nickname={nickname} SetNickName={SetNickName} />
        </MainBody>
      </header>
    </div>
  );
}

export default App;
