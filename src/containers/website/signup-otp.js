import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignUpOtp() {
    
  
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
              <h3 class="form-group col-12"  style={{textAlign:"center", marginTop:"20px", color:"white",fontSize:"x-large",fontFamily:"sans-serif"}} >Sign Up</h3>
              
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
                    </div>
                  </div>

                  <div class="row">
                  {/* <div class="form-group col-2"></div> */}
                    <div class="form-group col-12" style={{textAlign:"center",borderRadius:"20px"}}>
                     <Link to="/signup"><button  type="submit"   class="btn btn-lg btn-block" style={{borderRadius:"20px",backgroundColor:"#d51c58", color:"whitesmoke",fontSize:"large"}}>
                          Sign Up
                        </button> </Link>  
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
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
export default SignUpOtp;