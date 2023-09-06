import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, ()=> ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video 
            ref={videoRef}
            src="https://uploads.codesandbox.io/uploads/user/908ec1ae-9eb7-487a-89cd-1335d3048dd9/9rmH-pure-heart.mp4"
        />
    )
}

export default forwardRef(Video) 