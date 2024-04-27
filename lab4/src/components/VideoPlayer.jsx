import { useState, useRef } from "react";

export default function VideoPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    function handleClick (){
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setIsPlaying(!isPlaying)
    }
    console.log('rendering')
    return(
        <div className="VideoPlayer componentBox">
            <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
            <video ref={videoRef} width="250">
                <source type="video/mp4" src=""/>
            </video>

        </div>
    )
}