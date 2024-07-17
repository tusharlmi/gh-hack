export const createAudio = async (textValue, voiceType) => {
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
    fetch("https://hackathingh.loca.lt/createAudio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textValue, voiceType: voiceType }),
    });
    // .then(res => res.json())
    // .then(data => {
    //   console.log('>>> data', data)
    // })
};
