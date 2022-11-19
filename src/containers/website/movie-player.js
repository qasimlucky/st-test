import React, { useState,useEffect,Component,useCallback } from 'react';
import Modal from 'react-modal';
import { useFullScreen } from 'react-hooks-full-screen'
import { useRef } from "react";
const MoviePlayer = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    
    const [showFullScreen, setShowFullScreen] = useState(false)
    useFullScreen('app', showFullScreen)
    const videoRef = useRef(null);
    const progressBar = useRef();
    const [playing, setPlaying] = useState(false);
    const [ismuted, setIsMuted] = useState(true);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [videoprogress, setVideoProgress] = useState(0);
    const [volume, setVolume] = useState(1)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume ** 2

    

    function openModal() {
        /* window.location.reload(false); */
            setIsOpen(true);
            //setIsShown(false)
        
        
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
        //setIsShown(true)
      }
    
    const videoHandler = (control) => {
        if (control === "play") {
          videoRef.current.play();
           console.log(videoRef.current.volume ) 
           /* videoRef.current.volume = 0.02 */

          setPlaying(true);
          var vid = document.getElementById("video1");
          setVideoTime(vid.duration);
        } else if (control === "pause") {
          videoRef.current.pause();
          /* videoRef.current.volume = 1 */
          setPlaying(false);
        }
      };

       const  isMuted= () => {
        setIsMuted(false)
        videoRef.current.volume=0;
 
      }; 
      const  isMutedOff= () => {
        setIsMuted(true)
        videoRef.current.volume=0.5;
        setVolume(0.5)
 
      };
      
      
      const fastForward = () => {
        videoRef.current.currentTime += 5;
      };
    
      const revert = () => {
        videoRef.current.currentTime -= 5;
      };

      window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
      }, 1000);
      
                           
  
         return (
            <section class="home-popup-s1" id="app" >
            {/* video li width or heihgt 100% krni hai or baher wali div ki height adjust krni hai */}
            <div style={{backgroundColor:"black "}} class="video-box">
                <video style={{height:"100vh"}} id="video1" ref={videoRef} className="video" src="/movie.mkv"></video>
            </div>
            
            <div className="controlsContainer">

                <div class="audio-control audio-control-row">
                    {/* <img className="video-play-center" alt="" src="/audioIcon.gif"/>  setMuted(m => !m) */}
                    <div class="audio-btn-box audio-control-col opacity">
                    {ismuted ? (

                        
                        <a   class="center-video-btn audio-play-center">
                            
                            <i className="fa fa-volume-up" style={{fontSize:"36px", color:"whitesmoke"}} onClick={() =>isMuted() }></i>
                        </a>
                        ) : (
                        <a   class="center-video-btn audio-play-center">
                            <i className="fas fa-volume-mute" style={{fontSize:"36px", color:"whitesmoke"}} onClick={() =>isMutedOff() }></i>
                        </a>
                    
                    )}
                    </div>
                    <div class="audio-control-col audio-bar input-row">
                        <input  class="input-col"
                            type="range"
                            min={0}
                            max={1}
                            step={0.02}
                            value={volume}
                            onChange={event => {
                                setVolume(event.target.valueAsNumber)
                                const resetVolume =event.target.valueAsNumber/10;
                                /* console.log (typeof(resetVolume))
                                console.log (typeof(videoRef.current.volume)) */
                                videoRef.current.volume = resetVolume;
                                console.log(videoRef.current.volume)

                        }}
                        />
                        {/* <button onClick={() => setMuted(m => !m)}>
                            {muted ? "muted" : "unmuted"}
                        </button> */}
                        <p class="input-col"> &nbsp;{(finalVolume.toFixed(1)*100)}</p>
                    </div>

                    
                </div>

            <div class="center-box opacity">
                {playing ? (
                <a onClick={() => videoHandler("pause")} class="center-video-btn">
                    <img className="controlsIcon--small video-play-center" alt="" src="/pause.svg"/> 
                </a>

                ) : (
                <a onClick={() => videoHandler("play")} class="center-video-btn">
                    <img className="controlsIcon--small video-play-center" alt="" src="/play.svg"/>
                </a>
                )}
            </div>

            <div className="controls">
                 <img onClick={revert} className="controlsIcon" alt="" src="/backward-5.svg"/>
                <div class="video-title"><h2>The Marshal King </h2></div>
            {playing ? (

                <a onClick={() => videoHandler("pause")} class="btn-trailer video-btn">
                    <img className="controlsIcon--small video-play" alt="" src="/pause.svg"/> &nbsp; Resume 
                </a>
                
                ) : (
                <a onClick={() => videoHandler("play")} class="btn-trailer video-btn">
                    <img className="controlsIcon--small video-play" alt="" src="/play.svg"/> &nbsp; Resume
                </a>
                )}
                <div class="video-btn-like-row">
                    <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                    <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                </div>
                 <img onClick={fastForward} className="controlsIcon" alt="" src="/forward-5.svg"/> 
            </div>
            </div>
            <div className="timecontrols" >
            
                <div   style={{width:"100%"}}>
                    {/* <div style={{ width: `${progress}%` }} className="time_progressBar"></div> */}
                    <input style={{background:"pink !important", width:"100%"}}
                            type="range"
                                min={0}
                                max=  {Math.floor(videoTime)} 
                                 step= {0.1} /* {Math.floor(videoTime /100)} */
                                 value=  {currentTime} 
                                 onChange={event => {
                                 console.log(event.target.valueAsNumber +"seclected number")
                                 //console.log(Math.floor(videoTime)+"video time")
                                // console.log((videoTime/100))
                                // const resetTime =(Math.floor((videoTime/100)*event.target.valueAsNumber));
                                 //const resetTime =(Math.floor((videoTime/100)*event.target.valueAsNumber));
                                 //const resetTime =(Math.floor(event.target.currentTime/videoTime)*100);

                                 //console.log(resetTime+"reset time")
                                // setVideoProgress(event.target.valueAsNumber)
                                /* console.log (typeof(resetVolume))
                                console.log (typeof(videoRef.current.volume)) */
                                 videoRef.current.currentTime = event.target.valueAsNumber;
                                 console.log(videoRef.current.currentTime)
                                // console.log(videoRef.current.volume)
                        }}
                        />
                </div>
                 <div class="movie-time-control">
                    <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                    &nbsp; &nbsp; <p> of </p> &nbsp; &nbsp;
                    <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
                </div> 
            </div>
             {/* // Volume Control Range slider */} 
            {/* <input
                type="range"
                defaultValue="0"
                className="mx-2 progressBarvolume bar volume"
            /> */}
            
                
            
             {/* <input
                type="range"
                className="progressBar bar"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
            /> */}   
           
                        
             <div id="app">
             <i class="fa fa-expand" style={{fontSize:"36px", color:"whitesmoke"}} onClick={() => setShowFullScreen(!showFullScreen)}></i>
                {/* <button onClick={() => setShowFullScreen(!showFullScreen)}>Toggle</button> */}
             </div>
             <button style={{ background: "black"}} onClick={openModal}><img src="/subtitles.png" ></img></button>
             <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                class="modal-class"
            > 
           <div style={{background:"red", marginTop:"20px"}}><h1>Data comes here</h1></div>
            </Modal>
             
            </section>
         );
      }
export default MoviePlayer;