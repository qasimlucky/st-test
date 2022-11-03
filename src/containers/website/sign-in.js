import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignIn() {
    
  
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
              <h3 class="form-group col-12"  style={{textAlign:"center", marginTop:"20px", color:"white"}} >Sign In</h3>
              
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="form-group col-12">
                      <input id="phone_number" type="text"  class="form-control" name="phone_number"  placeholder="Email or Phone number" style={{backgroundColor: "#1d1d41"}}/>
                    </div>
                    
                  </div> 
                  <div class="row"> !
                  <div class="form-group col-12">
                        <div class="input-group-prepend" >
                        <input  id="password" type="password" name="password"   class="form-control"  placeholder="Password"  style={{borderBottom:"2px solid red", backgroundColor: "#1d1d41"}}/>
                      </div>
                      <p style={{color:"red"}}>your password must contain 4 and 60 characters</p>
                      
                    </div>
                  </div>

                  <div class="row">
                  <div class="form-group col-2"></div>
                    <div class="form-group col-8">
                     <button  type="submit" class="btn btn-danger btn-lg btn-block">
                          Singn In
                        </button>   
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
                  </div>
                  <div>
                  <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label style={{color:"white"}}>Remember me</label>
                  </div>
                  <div >
                    <p style={{color:"white", lineHeight:"11px", textAlign:"center"}}>Don't have an account?<a style={{color:"red"}}>Sign up</a><br></br>Forgot your password </p>
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
export default SignIn;