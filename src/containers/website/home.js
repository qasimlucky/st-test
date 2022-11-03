
import React, { useState } from 'react';

import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {data} from "../../mockData"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
function HomePage() {
    const [isShown, setIsShown] = useState(false);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideLeft2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft - 500;
      };
      const slideLeft3 = () => {
        var slider3 = document.getElementById('slider3');
        slider3.scrollLeft = slider3.scrollLeft - 500;
      };
      const slideLeft4 = () => {
        var slider4 = document.getElementById('slider4');
        slider4.scrollLeft = slider4.scrollLeft - 500;
      };
      const slideLeft5 = () => {
        var slider5 = document.getElementById('slider5');
        slider5.scrollLeft = slider5.scrollLeft - 500;
      };
      const slideLeft6 = () => {
        var slider5 = document.getElementById('slider6');
        slider5.scrollLeft = slider5.scrollLeft - 500;
      };
      const slideLeft7 = () => {
        var slider7 = document.getElementById('slider7');
        slider7.scrollLeft = slider7.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
      };
      const slideRight2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft + 500
      };
      const slideRight3 = () => {
        var slider3 = document.getElementById('slider3');
        slider3.scrollLeft = slider3.scrollLeft + 500
      };
      const slideRight4 = () => {
        var slider4 = document.getElementById('slider4');
        slider4.scrollLeft = slider4.scrollLeft + 500
      };
      const slideRight5 = () => {
        var slider5 = document.getElementById('slider5');
        slider5.scrollLeft = slider5.scrollLeft + 500
      };
      const slideRight6 = () => {
        var slider6 = document.getElementById('slider6');
        slider6.scrollLeft = slider6.scrollLeft + 500
      };
      const slideRight7 = () => {
        var slider7 = document.getElementById('slider7');
        slider7.scrollLeft = slider7.scrollLeft + 500
      };
  
         return (  
                  <>
    <Header/>
    
    <div class="fullwidth-slider">
            <div id="headerslider" class="carousel slide"> 
                
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <div class="fill banner-ship-img" style={{backgroundImage:`url("web-assets/img/banner-img/ship-img2.jpg")`}}>
                         <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container"> 
                                <div class="row">
                                     <div class="col-sm-12 movie-slider-content"> 
                                        <div class="slider-content" >
                                            <div class="title" data-animation="animated bounceInRight" >Sail coaster</div>
                                            <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                            <div class="title-detail">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Play Now</a> <a href="javascript:;" class="btn-detail">More details</a>
                                            </div>
                                            <div class="watch-trailer">
                                                <a href=""><img src="web-assets/img/play (1).png" alt=""/> </a> &nbsp; &nbsp; Watch Trailer
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="fill  banner-ship-img2" style={{backgroundImage:`url("web-assets/img/banner-img/ship-img1.jpg")`}}>
                         <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container"> 
                                <div class="row">
                                     <div class="col-sm-12 movie-slider-content"> 
                                        <div class="slider-content" >
                                            <div class="title" data-animation="animated bounceInRight" >Sail coaster </div>
                                            <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                            <div class="title-detail">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Play Now</a> <a href="javascript:;" class="btn-detail">More details</a>
                                            </div>
                                            <div class="watch-trailer">
                                                <a href=""> <img src="web-assets/img/play (1).png" alt=""/>  </a> &nbsp; &nbsp; Watch Trailer
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="fill  banner-ship-img3" style={{backgroundImage:`url("web-assets/img/banner-img/ship-img3.jpg")`}} data-bg-image="images/header/header.png">
                         <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container"> 
                                <div class="row">
                                     <div class="col-sm-12 movie-slider-content"> 
                                        <div class="slider-content" >
                                            <div class="title" data-animation="animated bounceInRight" >Sail coaster </div>
                                            <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                            <div class="title-detail">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Play Now</a> <a href="javascript:;" class="btn-detail">More details</a>                                            </div>
                                            <div class="watch-trailer">
                                                <a href=""><img src="web-assets/img/play (1).png" alt=""/> </a> &nbsp; &nbsp; Watch Trailer
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control left" href="#headerslider" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right" href="#headerslider" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>  
        </div>  
         {/* this problem code start */}
         <div style={{paddingTop:"25px", backgroundColor:"#0d0d31"}}>
        <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
         <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft7} size={40} />
        <div
          id='slider7'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
         style={{padding:"13px 0"}}>
          {data.map((item) => (
            <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
            <img
              className='list-images inline-block hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <div class="overlay">
            <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
              
            </div>
          </div>
            
          ))}
        </div >
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight7} size={40}  />
      </div> 
        </div> 
        <div>
        <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
         <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft6} size={40} />
        <div
          id='slider6'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
         style={{padding:"13px 0"}}>
          {data.map((item) => (
            <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
            <img
              className='list-images inline-block hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <div class="overlay">
            <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
              
            </div>
          </div>
            
          ))}
        </div >
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight6} size={40}  />
      </div> 
        </div> 
        <div>
        <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
         <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft5} size={40} />
        <div
          id='slider5'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
         style={{padding:"13px 0"}}>
          {data.map((item) => (
            <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
            <img
              className='list-images inline-block hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <div class="overlay">
            <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
              
            </div>
          </div>
            
          ))}
        </div >
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight5} size={40}  />
      </div> 
        </div> 
        <div>
        <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
         <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft4} size={40} />
        <div
          id='slider4'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
         style={{padding:"13px 0"}}>
          {data.map((item) => (
            <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
            <img
              className='list-images inline-block hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <div class="overlay">
            <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
              
            </div>
          </div>
            
          ))}
        </div >
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight4} size={40}  />
      </div> 
        </div> 
         
         

         {/* there is problem code ends */}
        {/* new */}  
        <div class="fullwidth-slider video-slider">
            <div id="headerslider1" class="carousel slide"> 
                
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <div class="fill">
                            <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container section-3rd"> 
                                <div class="row third-row">
                                    <div class="third-col">
                                        <div class="courses-details video-link">
                                            <div class="courses-details-images">
                                                    <img src="web-assets/img/banner-img/ship-img3.jpg" alt="Courses Details"/>
                                                <a class="courses-play" href="https://www.youtube.com/watch?v=zJgHbifIx-Q" target="_blank">
                                                    <i class="fa-solid fa-play play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/ship-img1.jpg")`}}> 
                                        <div class="slider-content" >
                                            <div class="title section-3rd-title" data-animation="animated bounceInRight" >Shadow and Bone</div>
                                            <div class="views-ratings">
                                                <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                            </div>
                                            <div class="title-detail title-detail-2">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Watch Now</a>                                                 
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="fill">
                            <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container section-3rd"> 
                                <div class="row third-row">
                                    <div class="third-col">
                                        <div class="courses-details video-link">
                                            <div class="courses-details-images">
                                                    <img src="web-assets/img/banner-img/ship-img2.jpg" alt="Courses Details"/>
                                                <a class="courses-play" href="https://www.youtube.com/watch?v=zJgHbifIx-Q" target="_blank">
                                                <i class="fa-solid fa-play play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/ship-img2.jpg")`}}> 
                                        <div class="slider-content" >
                                            <div class="title section-3rd-title" data-animation="animated bounceInRight" >Sail Coaster</div>
                                            <div class="views-ratings">
                                                <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                            </div>
                                            <div class="title-detail title-detail-2">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Watch Now</a> 
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="fill">
                            <div class="bs-slider-overlay"></div>
                            <div class="container movie-slider-container section-3rd"> 
                                <div class="row third-row">
                                    <div class="third-col">
                                        <div class="courses-details video-link">
                                            <div class="courses-details-images">
                                                    <img src="web-assets/img/banner-img/ship-img1.jpg" alt="Courses Details"/>
                                                <a class="courses-play" href="https://www.youtube.com/watch?v=zJgHbifIx-Q" target="_blank">
                                                    <i class="fa-solid fa-play play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/ship-img1.jpg")`}}> 
                                        <div class="slider-content" >
                                            <div class="title section-3rd-title" data-animation="animated bounceInRight" >Lord of the Rings</div>
                                            <div class="views-ratings">
                                                <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                            </div>
                                            <div class="title-detail title-detail-2">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                </p>
                                            </div>
                                            <div class="slide_right" data-animation="animated bounceInRight">
                                                <a href="javascript:;" class="btn-trailer">Watch Now</a>                                                 
                                            </div>
                                            <div class="gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <a class="carousel-control left" href="#headerslider1" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right" href="#headerslider1" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>  
        </div> 
        {/* <div style={{ marginBottom:"20px", height:"250px", border:"2px solid green", backgroundColor:"#0d0d31"}}>
            <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px", height : "20%", width:"100%"}}>Trending see all <a style={{color:"red"}}>see all</a></div>
              <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
                  <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft6} size={40} />
                  <div id='slider6'className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <div style={{height:"70%", width:"100%"}}>
                    {data.map((item) => (
                      <div style={{border:"3px solid yellow"}} className='w-[200px] h-[110px] inline-block p-2 cursor-pointer '>
                        <div className='w-[200px] h-[110px] coming-slider-item' >
                              <img  src={item.img}  alt='/' />
                              <div class="overlay">
                                  <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
                              </div>
                          </div >
                      </div>
                    ))}

                    </div>
                    
                  </div>
                  <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight6} size={40}  />
            
                </div>
        </div > */}


        <div>
        <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
         <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft3} size={40} />
        <div
          id='slider3'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
         style={{padding:"13px 0"}}>
          {data.map((item) => (
            <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
            <img
              className='list-images inline-block hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <div class="overlay">
            <div class="overlay-box">
                                      <div class="overlay-parts overlay-part1">
                                          <h4>Boop Bitty</h4>
                                          <div class="part1-1">
                                              <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                          </div>
                                          <div class="part1-2 slide_right">
                                              <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                          </div>
                                      </div>
                                      <div class="overlay-parts overlay-part2">
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                          <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                      </div>
                                  </div>
              
            </div>
          </div>
            
          ))}
        </div >
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight3} size={40}  />
      </div> 
        </div>     
            
       
      <WebFooter/>    
                  </>
        
         );
      }

export default HomePage;