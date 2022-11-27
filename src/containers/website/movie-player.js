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
        videoRef.current.currentTime += 10;
      };
    
      const revert = () => {
        videoRef.current.currentTime -= 10;
      };

      window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
      }, 1000);
      
                           
  
         return (
        <section class="movie-player home-popup-s1" id="app" >
            {/* video li width or heihgt 100% krni hai or baher wali div ki height adjust krni hai */}
            <div class="mp-box">
                <video id="video1" ref={videoRef} className="mp-video" src="/movie2.mkv"></video>
            </div>
            
            <div className="mp-timecontrols" >
            
                <div  className="mp-timecontrols-box">
                    {/* <div style={{ width: `${progress}%` }} className="time_progressBar"></div> */}
                    <div className="mp-time_progressbarContainer">
                        <div style={{ width: `${progress}%` }} className="mp-time_progressBar"></div>
                    </div>

                    <input
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

                <div class="mp-movie-time-control">
                    <p className="mp-controlsTime">
                        {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
                    </p>
                    &nbsp; &nbsp; 
                    <p> of </p> 
                    &nbsp; &nbsp;
                    <p className="mp-controlsTime">
                        {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
                    </p>
                </div> 
            </div>
            <div className="mp-controlsContainer">

                

                

                <div className="mp-controls">

                    <div id='mp-btns'  class="mp-center-box mp-opacity">
                        {playing ? (
                        <a onClick={() => videoHandler("pause")} class="mp-center-video-btn">
                            <img className="mp-controlsIcon--small mp-video-play-center" alt="" src="/pause.svg"/> 
                        </a>

                        ) : (
                        <a onClick={() => videoHandler("play")} class="mp-center-video-btn">
                            <img className="mp-controlsIcon--small mp-video-play-center" alt="" src="/play.svg"/>
                        </a>
                        )}
                    </div>

                    <div id='mp-btns' >
                        <img onClick={revert} className="mp-controlsIcon" alt="" src="/back-in-time.png"/>
                    </div>
                    <div id='mp-btns' >
                        <img onClick={fastForward} className="mp-controlsIcon" alt="" src="/forward.png"/>
                    </div>
                     
                    <div id='mp-btns'  class="mp-audio-control mp-audio-control-row">
                        {/* <img className="video-play-center" alt="" src="/audioIcon.gif"/>  setMuted(m => !m) */}
                        <div class="mp-audio-btn-box mp-audio-control-col mp-opacity">
                            {ismuted ? (

                            <a class="mp-center-video-btn mp-audio-play-center">
                                {/* <i className="fa fa-volume-up" onClick={() =>isMuted() }></i> */}
                                <img src='/loud-speaker.png' onClick={() =>isMuted() }></img>
                            </a>
                            ) : (
                            <a class="mp-center-video-btn mp-audio-play-center">
                                {/* <i className="fas fa-volume-mute" onClick={() =>isMutedOff() }></i> */}
                                <img src='/volume-mute.png' onClick={() =>isMutedOff() }></img>
                            </a>
                        
                            )}
                        </div>
                        <div class="mp-audio-control-col mp-audio-bar mp-input-row">
                            <progressbar  class="mp-input-col"
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
                            <p class="mp-input-col"> &nbsp;{(finalVolume.toFixed(1)*100)}</p>
                        </div>

                    </div>

                    <div id='mp-btns'  className='mp-btn-previous'>
                        <a>
                            <img src='/step-previous.png'></img>
                        </a>
                    </div>

                    <div id='mp-btns'  class="mp-video-title">
                        <h2>The Marshal King </h2>
                    </div>

                    <div id='mp-btns'  className='mp-btn-forward'>
                        <a>
                            <img src='/step-forward.png'></img>
                        </a>
                    </div>

                    <div id='mp-btns'  className='mp-btn-seasons'>
                        <a>
                            <img src='/seasons.png'></img>
                        </a>
                    </div>

                    <button id='mp-btns'  className='mp-subtitles-btn' onClick={openModal}>
                        <img src="/subtitles.png" ></img>
                    </button>

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        class="modal-class"> 

                        <div className='mp-data-comes'>
                            <h1>Data comes here</h1>
                        </div>
                    </Modal>

                    <div id='mp-btns app'  className='mp-btn-expand'>
                        {/* <i class="fa fa-expand mp-expand" onClick={() => setShowFullScreen(!showFullScreen)}></i> */}
                        <img class="mp-expand"  src='/full-screen.png' onClick={() => setShowFullScreen(!showFullScreen)}></img>
                        {/* <button onClick={() => setShowFullScreen(!showFullScreen)}>Toggle</button> */}
                    </div>

                    {/* {playing ? (

                    <a onClick={() => videoHandler("pause")} class="mp-video-btn btn-trailer">
                        <img className="mp-controlsIcon--small mp-video-play" alt="" src="/pause.svg"/> &nbsp; Resume 
                    </a>
                    
                    ) : (
                    <a onClick={() => videoHandler("play")} class="mp-video-btn btn-trailer">
                        <img className="mp-controlsIcon--small mp-video-play" alt="" src="/play.svg"/> &nbsp; Resume
                    </a>
                    )} */}
                    {/* <div class="mp-video-btn-like-row">
                        <div class="mp-part2-1 mp-btn-like-col">
                            <a href=""><i class="fa-solid fa-heart"></i></a>
                        </div>
                        <div class="mp-part2-1 mp-btn-like-col">
                            <a href=""><i class="fa-solid fa-plus"></i></a>
                        </div>
                    </div> */}
                    
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
           
                        
            
            
            
            
             
        </section>
         );
      }
export default MoviePlayer;