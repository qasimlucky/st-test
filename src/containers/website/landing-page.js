import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function LandingPage() {
    
  
         return (
          <>
           <Header/>
           <div class = "web-bg-color">

                {/* LANDING PAGE BANNER SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++ */}

                <div class="landing-main fill banner-ship-img" style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`}}>
                    <div class="landing-container-row">
                        <div  class="landing-container-col land-container-col1">
                            <h6 class="tag-line font-family-sans whitesmoke">World's Best</h6>
                            <div class="sm-heading"><h3>MOVIES OF THIS SEASON</h3></div>
                            <div class="slide_right" data-animation="animated bounceInRight">
                                <Link to="/signin" class="btn-trailer bg-whitesmoke pink bd-whitesmoke">SIGN IN</Link> <Link to="/signup-otp" class="btn-detail">SIGN UP</Link>
                            </div>
                        </div>
                        <div  class="landing-container-col stv-land-slider-main">
                            <div class="stv-land-slider">
                                <div class="stv-land-slider-body" >
                                    <div class="stv-land-slider-container">

                                        <input type="radio" name="slider" class="d-none" id="s1" checked></input>
                                        <input type="radio" name="slider" class="d-none" id="s2" checked></input>
                                        <input type="radio" name="slider" class="d-none" id="s3" checked></input>
                                        <input type="radio" name="slider" class="d-none" id="s4" checked></input>
                                        <input type="radio" name="slider" class="d-none" id="s5" checked></input>
                                    
                                        <div class="cards">
                                        
                                            <label class="stv-land-label" for="s1" id="slide1">
                                                <img src="https://filmfare.wwmindia.com/content/2022/oct/top-hollywood-movies-you-cant-miss-top-gun-maverick.jpg" alt=""/>
                                                
                                            </label>
                                        
                                            <label class="stv-land-label" for="s2" id="slide2">
                                                <img src="https://nettv4u.com/imagine/30-01-2020/thor--love-and-thunder-movie-review.jpg" alt=""/>
                                            </label>
                                        
                                            <label class="stv-land-label" for="s3" id="slide3">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDN3lAI7kHWf13NOjZMDFG_hKDRyc7uenWSZPT5xy605UnZL0QRxeDvI9IFJtwFxPTsU&usqp=CAU" alt=""/>
                                            </label>
                                        
                                            <label class="stv-land-label" for="s4" id="slide4">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6TFk40hFvUgHQw4ZtVq9hGxdk-OPGLgYRno-BWZcu0uZQxEQstfkoGE1z09BKrLjLUs&usqp=CAU" alt=""/>
                                            </label>
                                        
                                            <label class="stv-land-label" for="s5" id="slide5">
                                                <img src="https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/jurassicworlddominion-20220613153057-21055.jpg" alt=""/>
                                            </label>

                                        </div>
                                    
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LANDING PAGE BANNER SECTION ENDS ================================================ */}

                {/* LANDING PAGE SECOND 2 SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div class = "web-bg-color sec-2-main">
                    <div class="landing-sec-2">
                        <div class="landing-sec-2-row">
                            <div class="sec-2-img-container stv-land-col">
                                <div class="sec-2-img" style={{backgroundImage:`url("web-assets/img/landing/download-app.png")`}}>

                                </div>
                                {/* <img class="sec-2-img" src="https://media.istockphoto.com/photos/three-smartphones-with-blank-white-screen-picture-id1137069935?k=20&m=1137069935&s=612x612&w=0&h=AtuFIIRH8NSQLe8_NG7dNI0BxJlldQvvnmdcpZXCUzY=" alt= "image"></img> */}
                            </div>
                            <div class="sec-2-content stv-land-col">
                                <h1>Download Favourites, Watch them Offline!. </h1>
                                <p>It's supper easy to save your favourite shows! </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LANDING PAGE SECOND 2 SECTION ENDS ================================================= */}
                
                {/* LANDING PAGE 3 THIRD SECTION STARTS ++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <div class="lndg-sec-3-main">
                    <div class="lndg-sec-3-p1">
                        <h1>What's New on SaloMTV</h1>
                    </div>

                    <div class="lndg-sec-3-p2">

                        <div class="lndg-sec-3-p2-box">
                            <div class="lndg-sec-3-p2-img">
                                <img src="https://wallpapercave.com/wp/wp2162756.jpg" alt = "img data"></img>
                            </div>
                            <div class="lndg-sec-3-p2-title">
                                <h3>The Dark Knight</h3>
                            </div>
                        </div>

                        <div class="lndg-sec-3-p2-box">
                            <div class="lndg-sec-3-p2-img">
                                <img src="https://wallpaperaccess.com/full/1077181.jpg" alt = "img data"></img>
                            </div>
                            <div class="lndg-sec-3-p2-title">
                                <h3>The Defining Chapter</h3>
                            </div>
                        </div>

                        <div class="lndg-sec-3-p2-box">
                            <div class="lndg-sec-3-p2-img">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/491/821/139/movies-hollywood-movies-wallpaper-preview.jpg" alt = "img data"></img>
                            </div>
                            <div class="lndg-sec-3-p2-title">
                                <h3>Seventh Son</h3>
                            </div>
                        </div>

                        <div class="lndg-sec-3-p2-box">
                            <div class="lndg-sec-3-p2-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfpbU3oYImCkzJvHtpo9IxLPxwxPvQgWW1Q&usqp=CAU" alt = "img data"></img>
                            </div>
                            <div class="lndg-sec-3-p2-title">
                                <h3>Dracula Untold</h3>
                            </div>
                        </div>

                    </div>

                    <div class="lndg-sec-3-p3">
                        <div class="lndg-sec-3-p3-box">
                            <button>Subscribe Now*</button>
                            <p>* Terms and Conditions Apply | $7.99 a month or $69.90 a year </p>
                        </div>
                    </div>
                </div>

                {/* LANDING PAGE 3 THIRD SECTION ENDS ================================================= */}

                        {/*  */}
                {/* LANDING PAGE 4 FOURTH SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div class = "web-bg-color sec-2-main">
                    <div class="landing-sec-2">
                        <div class="landing-sec-2-row">
                            <div class="sec-2-content sec-4th-content stv-land-col">
                                <h1>Watch Anywhere You Want. </h1>
                                <p>Watch an endless number of shows, on your phone, tablet, laptop and TV. </p>
                            </div>
                            <div class="sec-2-img-container stv-land-col">
                                <div class="sec-2-img sec-4th-img" style={{backgroundImage:`url("web-assets/img/landing/watch-device.png")`}}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LANDING PAGE 4 FOURTH SECTION ENDS ================================================= */}
                    
                    
                {/* LANDING PAGE 5 FIFTH SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++ */}
                        
                <div class="lndg-sec-5-main">
                    <div class="lndg-sec-5-p1">
                        <h1>
                            Popuplar Movies And Shows
                        </h1>
                    </div>

                    <div class="lndg-sec-5-p2">

                        <div class="lndg-sec-5-p2-box">
                            <div class="lndg-sec-5-p2-img">
                                <img src="https://wallpapercave.com/wp/wp2162756.jpg" alt = "img data"></img>
                            </div>
                        </div>

                        <div class="lndg-sec-5-p2-box">
                            <div class="lndg-sec-5-p2-img">
                                <img src="https://wallpaperaccess.com/full/1077181.jpg" alt = "img data"></img>
                            </div>
                        </div>

                        <div class="lndg-sec-5-p2-box">
                            <div class="lndg-sec-5-p2-img">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/491/821/139/movies-hollywood-movies-wallpaper-preview.jpg" alt = "img data"></img>
                            </div>
                        </div>

                        <div class="lndg-sec-5-p2-box">
                            <div class="lndg-sec-5-p2-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfpbU3oYImCkzJvHtpo9IxLPxwxPvQgWW1Q&usqp=CAU" alt = "img data"></img>
                            </div>
                        </div>

                    </div>
                </div>
                {/* LANDING PAGE 5 FIFTH SECTION ENDS ================================================= */}

                <WebFooter/>  
            </div>
           
          </>
         );
      }
export default LandingPage;