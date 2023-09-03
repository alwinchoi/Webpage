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
  const [hug, SetHug] = useState(0);
  const [update, SetUpdate] = useState(false);
  const [jsonData, SetJsonData] = useState({
    'Birthday': '2001-11-15',
    'Nickname': '小猫咪',
    'Anniversary': '2022-10-03',
    'Title': 'Been Together For',
    'Hug': 10
  });

  // onMount
  useEffect(() => {
    const loadJson = () => {
      const value = window.localStorage.getItem('jsonData');
      // console.log(value)
      if (value != null) {
        console.log(JSON.parse(value))
        SetJsonData(JSON.parse(value));
        console.log(jsonData)
      }

      const image = window.localStorage.getItem('Image');
      if (image) {
        SetImage(image)
      }
    };

    loadJson();

    // console.log(jsonData)

    // load the birthday and nickname saved value
    // const localStorageLoad = () => {
    //   const localStorageKeys = [
    //     { key: 'Birthday', setState: SetBirthday },
    //     { key: 'Nickname', setState: SetNickName },
    //     { key: 'Anniversary', setState: SetAn },
    //     // { key: 'Image', setState: SetImage },
    //     { key: 'Title', setState: SetTitle },
    //     { key: 'Hug', setState: SetHug }
    //   ]

    //   for (const { key, setState } of localStorageKeys) {
    //     console.log(jsonData[key])
    //     const val = jsonData[key]
    //     if (val != null) {
    //       setState(val)
    //     }
    //     // const temp = window.localStorage.getItem(key);
    //     // if (temp != null) {
    //     //   setState(temp);
    //     // }
    //   }
    // };

    // localStorageLoad();

  }, []);

  useEffect(() => {
    window.localStorage.setItem('jsonData', JSON.stringify(jsonData))

    const localStorageKeys = [
      { key: 'Birthday', setState: SetBirthday },
      { key: 'Nickname', setState: SetNickName },
      { key: 'Anniversary', setState: SetAn },
      // { key: 'Image', setState: SetImage },
      { key: 'Title', setState: SetTitle },
      { key: 'Hug', setState: SetHug }
    ]

    for (const { key, setState } of localStorageKeys) {
      // console.log(jsonData[key])
      const val = jsonData[key]
      if (val != null) {
        setState(val)
      }
    }
  }, [jsonData])

  // update json and then localStorage
  useEffect(() => {
    // create a dictionary
    console.log(update)
    if (update) {
      const dictionary = {
        'Birthday': birthday,
        'Nickname': nickname,
        'Anniversary': an,
        'Title': title,
        'Hug': hug
      }
      SetJsonData(dictionary)
      SetUpdate(false)
    }
  }, [update])

  return (
    <div className="App">
      <header className="App-header">
        <MainBody birthday={birthday} nickname={nickname} image={image} an={an} title={title} jsonData={jsonData} hug={hug} SetHug={SetHug} SetUpdate={SetUpdate}>
          <Settings SetBirthday={SetBirthday} birthday={birthday} nickname={nickname} SetNickName={SetNickName} SetImage={SetImage} SetAn={SetAn} SetTitle={SetTitle}
            SetUpdate={SetUpdate} />
        </MainBody>
      </header>
    </div>
  );
}

export default App;
