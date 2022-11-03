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
                        <div  class="landing-container-col">
                            <h6 class="tag-line font-family-sans whitesmoke">World's Best</h6>
                            <div class="sm-heading"><h3>MOVIES OF THIS SEASON</h3></div>
                            <div class="slide_right" data-animation="animated bounceInRight">
                                <Link to="/signin" class="btn-trailer bg-whitesmoke pink bd-whitesmoke">SIGN IN</Link> <Link to="/signup" class="btn-detail">SIGN UP</Link>
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
                            <div class="sec-2-img-container stv-land-col" style={{backgroundImage:`url("web-assets/img/img-ii.png")`,backgroundSize:"cover"}}>
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

                <div style = {{height: "500px",padding:"2% 0"}}>
                    <div style={{ textAlign: "center", width:"80%", height : "20%", margin:"auto"}}>
                        <h1 style={{color : "white", fontSize:"40px",fontFamily:'sans-serif',fontWeight:"bold"}}>What's New on SaloMTV</h1>
                    </div>
                    <div style ={{  display:"flex", width :"80%",height:"45%",  margin :"auto",   position: "relative" }}>
                        <div style = {{float : "left", margin : "auto" , width : "24%", height : "96%"}}>
                            <div style={{height:"80%",}}>
                                <img src="https://wallpapercave.com/wp/wp2162756.jpg" alt = "img data" style={{height :"100%", borderRadius:"5px",width:"100%"}}></img>
                            </div>
                            <div style={{height:"20%",padding:"10px 0" }}>
                                <h3 style = {{color:"white",fontFamily:'sans-serif',fontSize:"small",fontWeight:"bold"}}  >The Dark Knight</h3>
                            </div>
                        </div>
                        <div style = {{float : "left", margin : "auto" , width : "24%", height : "98%"}}>
                            <div style={{height:"80%" }}>
                                <img src="https://p4.wallpaperbetter.com/wallpaper/491/821/139/movies-hollywood-movies-wallpaper-preview.jpg" alt = "img data"  style={{height :"100%", borderRadius:"5px",width:"100%"}}></img>
                            </div>
                            <div style={{height:"20%",padding:"10px 0"  }}>
                                <h3 style = {{color:"white",fontFamily:'sans-serif',fontSize:"small",fontWeight:"bold"}}>The Defining Chapter</h3>
                            </div>
                        </div>
                        <div style = {{float : "left", margin : "auto" , width : "24%", height : "98%"}}>
                            <div style={{height:"80%"}}>
                                <img src="https://wallpaperaccess.com/full/1077181.jpg" alt = "img data"  style={{height :"100%", borderRadius:"5px",width:"100%"}}></img>
                            </div>
                            <div style={{height:"20%",padding:"10px 0" }}>
                                <h3 style = {{color:"white",fontFamily:'sans-serif',fontSize:"small",fontWeight:"bold"}}>Seventh Son</h3>
                            </div>
                        </div>
                        <div style = {{float : "left", margin : "auto" , width : "24%",  height : "98%"}}>
                            <div style={{height:"80%"}}>
                                <img src="https://wallpaperaccess.com/full/1923020.jpg" alt = "img data"  style={{height :"100%", borderRadius:"5px",width:"100%"}}></img>
                            </div>
                            <div style={{height:"20%",padding:"10px 0" }}>
                                <h3 style = {{color:"white",fontFamily:'sans-serif',fontSize:"small",fontWeight:"bold"}}>Dracula Untold</h3>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: "auto" , width : "80%", height : "20%", marginTop:"3%"}}>
                        <div style={{ margin: "auto" , width : "60%", textAlign:"center"}}>
                            <button class= "btn btn-lg  " style={{  padding: "8px 45px",fontFamily:'sans-serif',backgroundColor:"#D51C58", borderRadius:"20px",fontSize:"medium",fontWeight:"bold", color:"whitesmoke" }}>Subscribe Now*</button>
                            <p style={{fontFamily:'sans-serif', paddingTop:"40px",color:"whitesmoke",fontSize:"small"}}>* Terms and Conditions Apply | $7.99 a month or $69.90 a year </p>
                        </div>
                    </div>
                </div>

                {/* LANDING PAGE 3 THIRD SECTION ENDS ================================================= */}

                        {/*  */}
                {/* LANDING PAGE 4 FOURTH SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div class = "web-bg-color sec-2-main">
                    <div class="landing-sec-2">
                        <div class="landing-sec-2-row">
                            <div class="sec-2-content stv-land-col">
                                <h1>Watch Anywhere You Want. </h1>
                                <p>Watch an endless number of shows, on your phone, tablet, laptop and TV. </p>
                            </div>
                            <div class="sec-2-img-container stv-land-col" style={{backgroundImage:`url("web-assets/img/img-ii.png")`,backgroundSize:"cover"}}>
                                {/* <img class="sec-2-img" src="web-assets/img/img-ii.png" alt= "image"></img> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* LANDING PAGE 4 FOURTH SECTION ENDS ================================================= */}
                    
                    
                    {/* </div> */}
                        {/* New Row */}
                        <div style = {{height: "330px"}}>
                    <div style={{ textAlign: "center", width:"70%", height : "15%", margin:"auto"}}><h1 style={{color : "white", fontSize:"35px",fontFamily:'sans-serif',fontWeight:"bold"}}>Popuplar Movies And Shows</h1></div>
                        <div style ={{ display:"flex", width :"70%",height:"60%",  margin :"auto",   position: "relative" }}>
                            <div style = {{float : "left", margin : "auto" , width : "23%",  height : "80%"}}>
                                <div style={{height:"80%"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfpbU3oYImCkzJvHtpo9IxLPxwxPvQgWW1Q&usqp=CAU" alt = "img data" style={{height :"100%",width:"100%",borderRadius:"5px"}}></img></div>
                                {/* <div style={{height:"20%"}}><h3 style = {{color:"white",fontFamily:'sans-serif'}}>this is second movie title</h3></div> */}
                            </div>
                            <div style = {{float : "left", margin : "auto" , width : "23%",height : "80%"}}>
                                <div style={{height:"80%"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyoyX09MPGJfMcO9DkZxytToD8lx6Td9T5g&usqp=CAU" alt = "img data" style={{height :"100%",width:"100%",borderRadius:"5px"}}></img></div>
                                {/* <div style={{height:"20%"}}><h3 style = {{color:"white",fontFamily:'sans-serif'}}>this is second movie title</h3></div> */}
                            </div>
                            <div style = {{float : "left", margin : "auto" , width : "23%", height : "80%"}}>
                                <div style={{height:"80%"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubAUOPoCA0tRK7-t7e0hCujgTHzBpZFK0Aw&usqp=CAU" alt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGXl7lcSgSqqSuXD57mc5dPSBBTllA1fPJA&usqp=CAU" style={{height :"100%",width:"100%",borderRadius:"5px"}}></img></div>
                                {/* <div style={{height:"20%"}}><h3 style = {{color:"white",fontFamily:'sans-serif'}}>this is second movie title</h3></div> */}
                            </div>
                            <div style = {{float : "left", margin : "auto" , width : "23%", height : "80%"}}>
                                <div style={{height:"80%"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrxCy0ymSPJyC7ZgNHkNRIcdPztvMD8tGkg&usqp=CAU" alt = "" style={{height :"100%",width:"100%",borderRadius:"5px"}}></img></div>
                                {/* <div style={{height:"20%"}}><h3 style = {{color:"white",fontFamily:'sans-serif'}}>this is second movie title</h3></div> */}
                            </div>

                            
                        
                        </div>
                            
                        </div>
                    
            </div>
          <WebFooter/>  
          </>
         );
      }
export default LandingPage;