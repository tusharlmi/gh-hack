import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Checkbox from "./Checkbox.js";
import TextInput from "./TextInput.js";
import AudioPlayer from "./AudioPlayer.js";

function App() {
    const [audioPath, setAudioPath] = useState("");

    return (
        <>
            <div className="main">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Text to Speech</p>
                </div>

                <div className="container">
                    <div className="column">
                        <Checkbox />
                    </div>
                    <div className="column">
                        <TextInput />

                        <AudioPlayer />
                    </div>
                </div>
            </div>

            {audioPath && (
                <p>
                    {
                        <audio controls>
                            <source src={audioPath} type="audio/ogg" />
                            <source src={audioPath} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    }
                </p>
            )}
        </>
    );
}

export default App;
