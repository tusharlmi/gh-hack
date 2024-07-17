import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [val, setVal] = useState(false)
  const [audioPath, setAudioPath] = useState('')
  const [voiceType, setVoiceType] = useState('alloy')

  console.log('>>> val', val, setVal)

    const createAudio = async () => {
      // axios
      //   .post('https://hackathingh.loca.lt/createAudio', 
      //     {
      //       data: val
      //     }
      //   )
      // .then((arrayBuffer) => {
      //   //const blob = new Blob([arrayBuffer], { type: "audio/wav" });
      //   //audio.src = window.URL.createObjectURL(blob);
      // })
      // .catch((error) => console.error(error));
      fetch('https://hackathingh.loca.lt/createAudio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: val, voiceType: voiceType }),
      })
      // .then(res => res.json())
      // .then(data => {
      //   console.log('>>> data', data)
      // })
      
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
          val && <p>
            <select onChange={(e) =>  setVoiceType(e.target.value)}>
              <option value="alloy">Alloy</option>
              <option value="echo">Echo</option>
              <option value="fable">Fable</option>
              <option value="onyx">Onyx</option>
              <option value="nova">Nova</option>
              <option value="shimmer">Shimmer</option>
            </select>
            <button onClick={createAudio}>Create Audio</button>
            </p>
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
