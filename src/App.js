import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "./Checkbox.js";
import TextInput from "./TextInput.js";
import AudioPlayer from "./AudioPlayer.js";

function App() {
    const [audioUrl, setAudioUrl] = useState("");
    const [textValue, setVal] = useState("");
    const [voiceType, setVoiceType] = useState("alloy");

    const createAudio = async (textValue, voiceType) => {
        fetch("https://hackathingh.loca.lt/createAudio", {
            method: "POST",
            headers: {
                "bypass-tunnel-reminder": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: textValue, voiceType: voiceType }),
        })
            .then((res) => res.blob())
            .then((myBlob) => {
                const obUrl = URL.createObjectURL(myBlob);
                setAudioUrl(obUrl);
            });
    };

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
                        <figure>
                            <figcaption>Generate speech from text:</figcaption>

                            <input
                                type="text"
                                value={textValue}
                                onChange={(e) => setVal(e.target?.value)}
                            />

                            {textValue && (
                                <p>
                                    <select onChange={(e) => setVoiceType(e.target.value)}>
                                        <option value="alloy">Alloy</option>
                                        <option value="echo">Echo</option>
                                        <option value="fable">Fable</option>
                                        <option value="onyx">Onyx</option>
                                        <option value="nova">Nova</option>
                                        <option value="shimmer">Shimmer</option>
                                    </select>
                                    <button onClick={() => createAudio(textValue, voiceType)}>
                                        Create Audio
                                    </button>
                                </p>
                            )}
                        </figure>

                        {audioUrl && <audio src={audioUrl} controls />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
