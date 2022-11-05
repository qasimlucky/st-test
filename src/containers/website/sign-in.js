import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignIn() {
    
  
         return (
          <>
           <Header/>

<div id="app" style={{marginTop:"7px"}} >
    <section class="section ">
        <div class="sign-img"  style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`,boxShadow: "inset 0rem 0rem 27rem 20rem #1d1d41"}}>
        <div class="container" >
        <div class="row" style={{marginTop : "150px" }}>
          <div >
            <div class="card card-primary web-bg" >
              <h3 class="form-group col-12"  style={{textAlign:"center", marginTop:"20px", color:"white",fontSize:"x-large",fontFamily:"sans-serif"}} >Sign In</h3>
              
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="form-group col-12">
                      <input id="phone_number" type="text"  class="form-control" name="phone_number"  placeholder="Email or Phone number" style={{backgroundColor: "#1d1d41"}}/>
                    </div>
                    
                  </div> 
                  <div class="row">
                  <div class="form-group col-12">
                        <div class="input-group-prepend" >
                        <input  id="password" type="password" name="password"   class="form-control"  placeholder="Password"  style={{ backgroundColor: "#1d1d41"}}/>
                      </div>
                      
                      <p style={{color:"red",textAlign:"right",fontSize:"larger"}}>Forgot your password</p>
                      
                    </div>
                  </div>

                  <div class="row">
                  {/* <div class="form-group col-2"></div> */}
                    <div class="form-group col-12" style={{textAlign:"center",borderRadius:"20px"}}>
                     <button  type="submit" class="btn btn-lg btn-block" style={{borderRadius:"20px",backgroundColor:"#d51c58", color:"whitesmoke",fontSize:"large"}}>
                          Sign In
                        </button>   
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
                  </div>
                  <div style={{paddingBottom:"10%"}}>
                  <input type="checkbox" value="isRememberMe" id="rememberMe"></input> <label style={{color:"white",fontSize:"larger"}}>Remember me</label>
                  </div>
                  <div >
                    <p style={{color:"white", lineHeight:"11px", textAlign:"center",fontSize:"larger"}}>Don't have an account? <a style={{color:"red"}}> Sign up</a><br></br> </p>
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