import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [val, setVal] = useState(false)
  const [audioPath, setAudioPath] = useState('')

  console.log('>>> val', val, setVal)

    const createAudio = async () => {
      axios
      //.post('http://127.0.0.1:8000/createAudio', {
        .post('https://hackathingh.loca.lt/createAudio', {
          data: val
      })
      .then((arrayBuffer) => {
        //const blob = new Blob([arrayBuffer], { type: "audio/wav" });
        //audio.src = window.URL.createObjectURL(blob);
      })
      .catch((error) => console.error(error));
    //   const res = await fetch('/createAudio',{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       text: 'Hello world'
    //     })
    //   })
    //   console.log('>>> res', res)
    //   if(res.ok){
    //     const filePath = await res.json()
    //     console.log('>>> data', filePath)
    //     setAudioPath(filePath)
    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GH hackathon project
        </p>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        {
          val && <p>{
            <button onClick={createAudio}>Create Audio</button>
            }</p>
        }

        {
          audioPath && <p>{
            <audio controls>
            <source src={audioPath} type="audio/ogg" />
            <source src={audioPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          }</p>
        }
      </header>
    </div>
  );
}

export default App;
