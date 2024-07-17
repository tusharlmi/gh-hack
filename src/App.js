import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [val, setVal] = useState(false)
  const [audioUrl, setAudioUrl] = useState('')
  const [voiceType, setVoiceType] = useState('alloy')
  const ctx = new AudioContext();

  console.log('>>> val', val, setVal)

    const createAudio = async () => {
      fetch('https://hackathingh.loca.lt/createAudio', {
        method: 'POST',
        headers:{
          'bypass-tunnel-reminder' : '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: val, voiceType: voiceType }),
      })
      .then(res => res.blob())
      .then(myBlob => {
        const obUrl = URL.createObjectURL(myBlob);
        setAudioUrl(obUrl);
      })
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
          audioUrl && <audio src={audioUrl} controls />
        }
      </header>
    </div>
  );
}

export default App;
