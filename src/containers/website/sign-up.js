import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignUp() {
    
         return (
          <>
           <Header/>

<div id="app" style={{marginTop:"7px"}} >
    <section class="section ">
        <div class="sign-img" style={{backgroundImage: `url("web-assets/img/banner-img/ship-img1.jpg")`}}>
        <div class="container mt-10 " >
        <div class="row" style={{marginTop : "150px" }}>
          <div >
            <div class="card card-primary web-bg" >
              <h3 class="form-group col-12"  style={{textAlign:"center", marginTop:"20px", color:"white"}} >Sign Up</h3>
              
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="form-group col-12" >
                      <input id="fullName" type="text"  class="form-control" name="full_name"  placeholder="Full Name"  style={{backgroundColor: "#1d1d41", border:"#1d1d41"}} />
                    </div>
                    
                  </div>
                    
                  <div class="row">
                    <div class="form-group col-12">
                      <input id="email" type="email"  class="form-control" name="email"  placeholder="Email"   style={{backgroundColor: "#1d1d41", border:"#1d1d41"}}/>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                    <input type="date" value="2017-06-01" class="form-control" style={{backgroundColor: "#1d1d41",color:"grey", border:"#1d1d41"}}/>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                      <input id="username" type="text"  class="form-control" name="username"  placeholder="User Name"   style={{backgroundColor: "#1d1d41", border:"#1d1d41",color:"grey"}}/>
                    </div>
                    
                  </div> 
                  <div class="row">
                    <div class="form-group col-12">
                        <select name="choice" class="form-control" style={{backgroundColor: "#1d1d41",color:"grey",height:"42px", border:"#1d1d41"}}>
                        <option value="first" style={{backgroundColor: "#1d1d41",color:"grey"}}>Male</option>
                        <option value="second" style={{backgroundColor: "#1d1d41",color:"grey"}} selected>Gender</option>
                        <option value="third" style={{backgroundColor: "#1d1d41",color:"grey"}}>Female</option>
                        </select>
                    </div>
                  
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                        <select name="choice" class="form-control" style={{backgroundColor: "#1d1d41",color:"grey",height:"42px", border:"#1d1d41"}}>
                        <option value="first" style={{backgroundColor: "#1d1d41",color:"grey"}}>Pakistan</option>
                        <option value="second" style={{backgroundColor: "#1d1d41",color:"grey"}} selected>Country</option>
                        <option value="third" style={{backgroundColor: "#1d1d41",color:"grey"}}>India</option>
                        </select>
                    </div>
                  
                  </div>
                  <div class="row"> !
                  <div class="form-group col-12">
                        <input  id="password" type="password" name="password"   class="form-control" data-indicator="pwindicator" placeholder="Password"  style={{backgroundColor: "#1d1d41", border:"#1d1d41",color:"grey"}}/>
                      
                    </div>
                  </div>

                  <div class="row">
                  <div class="form-group col-2"></div>
                    <div class="form-group col-8">
                     <button  type="submit" class="btn btn-danger btn-lg btn-block">
                          Singn Up
                        </button>   
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
                  </div>
                  <div>
                  <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label style={{color:"white"}}>I accept terms and conditions</label>
                  </div>
                  <div >
                    <p style={{color:"white", lineHeight:"40px", textAlign:"center"}}>Alread have an account?<a style={{color:"red"}}>Sign In</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
      
    </section>
  </div>
  <WebFooter/>  
          </>
         );
      }
export default SignUp;