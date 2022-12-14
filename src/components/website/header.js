
import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    
  
         return (
          <>
           <header id="navbar" class="sticky-nav">
            
            <div class="header-menu header-sticky header-menu-2">
                <div class="custom-container">
                    <div class="row desktop-menu header-row">
                        <div class="header-col col-xl-2 col-lg-3 col-8">
                            <div class="header-logo pt-15 pb-15">
                                <a href="index.html"><img src="web-assets/img/logo-salomTV.png" class="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div class="header-col col-xl-7 col-lg-6 col-4">
                            <div class="main-menu d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><Link to="/home">Home</Link> </li>
                                        <li><a href="service.html">Tv Shows</a></li>
                                        <li><a href="about.html">Serials</a></li>
                                        <li><a href="faq.html">Movies</a></li>
                                        <li><a href="contact.html">Watch list</a></li>
                                        <li><a href="blog.html">Kids Section</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
    
                        <div class="header-col col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="header-right header-right-2 text-end">
                                <ul class="z-index header-3rd-section">
                                    <li>
                                        {/* <select class="selectpicker" data-width="fit">
                                            <option data-content='<span class="flag flag-us"></span> English'>English</option>
                                            <option  data-content='<span class="flag-icon flag-icon-mx"></span> Espa??ol'>Espa??ol</option>
                                        </select> */}
                                        {/* <form.Control as="select">
                                            <option><span className="flag-icon flag-icon-gr"></span>Germany</option>
                                            <option><span className="flag-icon flag-icon-gr"></span>English</option>
                                        </form.Control> */}
                                         <select class="language-menu selectpicker bg-dark text-white text-lg-center h5" data-width="fit">
                                            <option class="rounded" style={{backgroundImage:`url("web-assets/img/banner-img/ship-img2.jpg")`}}  data-content='English'><div style={{backgroundImage:`url("web-assets/img/banner-img/ship-img2.jpg")`}}></div>English</option>
                                            <option class="rounded"  data-thumbnail="web-assets/img/flags/italy.png" data-content='Espanol'>Espa??ol</option>
                                            <option class="rounded"  data-content='Italiano'>Italiano</option>
                                            <option class="rounded"  data-content='Dansk'>Dansk</option>
                                        </select> 
                                    </li>
                                    <li><a href=""><i class="fa fa-search nav-icons"></i></a></li>
                                    <li><a href=""><i class="fa fa-bell-o nav-icons"></i></a></li>

                                    {/* PROFILE SECTION STARTS ++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                    <li class="profile-dp">
                                        <a href="">
                                            <img class="profile" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" alt="profile img"/>
                                        </a>

                                        <div class="stv-profile-dropdown">
                                            <div class="stv-profile-dropdown-box">
                                                <div class="stv-profile-dropdown-item">
                                                    <a class="stv-profile-row" href="https://st-test-heroku.herokuapp.com/userprofile">
                                                        <img class="stv-profile-col" src="web-assets/img/user-profile-icon.png"></img>
                                                        <p class="stv-profile-col">My Profile</p>
                                                    </a>
                                                </div>
                                                {/* href="http://localhost:3000/pricingplan" */}

                                                


                                                <div class="stv-profile-dropdown-item stv-pf-d-p1">
                                                    <a class="stv-profile-row" href="https://st-test-heroku.herokuapp.com/pricingplan">
                                                        <img class="stv-profile-col" src="web-assets/img/settings.png"></img>
                                                        <p class="stv-profile-col">Pricing Plan</p>
                                                    </a>
                                                </div>
                                                <div class="stv-profile-dropdown-item">
                                                    <a class="stv-profile-row" href="">
                                                        <img class="stv-profile-col" src="web-assets/img/signout.png"></img>
                                                        <p class="stv-profile-col">Logout</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* PROFILE SECTION ENDS  =================================================*/}

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <div class="row mobile-menu-row header-row align-items-center">
                        <div class="header-col col-xl-2 col-lg-3 col-8">
                            <div class="header-logo pt-15 pb-15">
                                <a href="index.html"><img src="web-assets/img/logo-salomTV.png" class="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div class="header-col social-icons col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="header-right header-right-2 text-end">
                                <ul class="z-index header-3rd-section">
                                    <li>
                                        <select class="selectpicker bg-dark text-white small" data-width="fit">
                                            <option class="rounded"  data-content='English'>English</option>
                                            <option class="rounded"  data-content='Espanol'>Espa??ol</option>
                                            <option class="rounded"  data-content='Italiano'>Italiano</option>
                                            <option class="rounded"  data-content='Dansk'>Dansk</option>
                                        </select>
                                    </li>
                                    <li><a href=""><i class="fa fa-search nav-icons"></i></a></li>
                                    <li><a href=""><i class="fa fa-bell-o nav-icons"></i></a></li>
                                    <a href=""><img class="profile" src="web-assets/img/user-icon 1.png" alt="profile img"/></a>
                                </ul>
                            </div>
                        </div>

                        <div class="header-col col-xl-7 col-lg-6 col-4">
                               
                            <button id="myBtn" class="openbtn" onclick="openNav()">???</button> 
                                
                            <div id="myModal" class="modal">
                               
                                <div class="modal-content">
                                <span class="close">&times;</span>
                                <nav id="mobile-menu">
                                        <ul>
                                            <li><a href="index.html">Home</a> </li>
                                            <li><a href="service.html">Tv Shows</a></li>
                                            <li><a href="about.html">Serials</a></li>
                                            <li><a href="faq.html">Movies</a></li>
                                            <li><a href="contact.html">Watch list</a></li>
                                            <li><a href="blog.html">Kids Section</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
    
                    </div> */}


                </div>
            </div>
        </header>
          </>
         );
      }
export default Header;  