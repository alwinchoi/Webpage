import './App.css';
import MainBody from './Component/MainBody';
import React, { useState, useEffect } from "react";
import Settings from './Component/Settings';

function App() {
  const [birthday, SetBirthday] = useState('2001-11-15');
  const [nickname, SetNickName] = useState('小猫咪');
  const [an, SetAn] = useState('2022-10-03');
  const [image, SetImage] = useState();
  const [title, SetTitle] = useState('Been Together For');

  // onMount
  useEffect(() => {
    // load the birthday and nickname saved value
    const localStorageLoad = () => {
      const localStorageKeys = [
        { key: 'Birthday', setState: SetBirthday },
        { key: 'Nickname', setState: SetNickName },
        { key: 'Anniversary', setState: SetAn },
        { key: 'Image', setState: SetImage },
        { key: 'Title', setState: SetTitle }
      ]

      for (const { key, setState } of localStorageKeys) {
        const temp = window.localStorage.getItem(key);
        if (temp != null) {
          setState(temp);
        }
      }
    };

    localStorageLoad();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MainBody birthday={birthday} nickname={nickname} image={image} an={an} title={title}>
          <Settings SetBirthday={SetBirthday} birthday={birthday} nickname={nickname} SetNickName={SetNickName} SetImage={SetImage} SetAn={SetAn} SetTitle={SetTitle} />
        </MainBody>
      </header>
    </div>
  );
}

export default App;
