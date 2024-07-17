import { useState } from "react";
import { createAudio } from "./apiHelper.js";

const TextInput = () => {
    const [textValue, setVal] = useState("");
    const [voiceType, setVoiceType] = useState("alloy");

    return (
        <figure>
            <figcaption>Generate speech from text:</figcaption>

            <input type="text" value={textValue} onChange={(e) => setVal(e.target?.value)} />

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
                    <button onClick={() => createAudio(textValue, voiceType)}>Create Audio</button>
                </p>
            )}
        </figure>
    );
};

export default TextInput;
