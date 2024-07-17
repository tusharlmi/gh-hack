function AudioPlayer(input) {
    return (
        <figure>
            <figcaption>Listen to speech:</figcaption>
            <audio controls src={input}></audio>
        </figure>
    );
}

export default AudioPlayer;
