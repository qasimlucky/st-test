import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function UserPerfile() {
   
         return (
          < >
           <Header/>
        <div class = "user-perfile">    
            <div style={{width:"65%", margin:"auto"}}>
                <h3 class= "text-color" style={{padding:"0 0 6px",fontFamily:'sans-serif'}}>Account Setting</h3>
            </div>
                
            <div style={{display:"flex", width :"67%",  margin :"auto",   position: "relative"}}>
                <div class="stv-profile-p1" style={{height:"275px",width: "30%",padding:"1%",  position: "relative" , float : "left",marginTop:"0 !important", margin:"auto", backgroundColor: "#1d1d41"}}>
                  <div  style= {{ fontSize: "initial", height :"10% !important", width : "100%"}}>
                          
                          <div style={{textAlign:"right"}}><a href= "" style={{ color:"red", textAlign:"right",fontFamily:'sans-serif'}}>Edit</a></div>
                      </div>
                      <div style= {{ fontSize: "initial", height : "39%"}}>
                              <div class="form-group col-8" style={{height: "100%" , width:"50%", margin: "auto"}}><img
                                          alt="image"
                                          src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1"
                                          className="rounded-circle"
                                          style={{height: "100%" }}
                                        />
                                  </div>
                        </div>   
                        <div style={{ color:"white" , textAlign:"center", paddingTop : "5px"}}><div><h3 style= {{color: "white",fontFamily:'sans-serif'}}>John Doe</h3></div></div>
                        <p style={{color :"white", padding: " 2px 12px", textAlign: "center",fontFamily:'sans-serif',fontSize:"small", lineHeight:"22px"}}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div style={{height:"680px", width: "65%", margintop:"0",float : "left",position: "relative", margin:"auto" ,padding : "10px 20px" , backgroundColor: "#1d1d41"}}>
                     <div><h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px",fontFamily:'sans-serif'}}>Personal Details</h3></div> 
                     <div>
                <div class="row" style={{fontSize: "initial"}}>
                <div class="form-group col-6" style={{color:"white"}}><label style={{color:"white",fontFamily:'sans-serif'}}>Email</label><br></br>johndoe@gmail.com</div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}} ><a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Change</a></div>
                  </div> 
                  <div class="row" style={{fontSize: "initial"}}>
                    <div class="form-group col-6" style={{color:"white",fontFamily:'sans-serif'}}><label style={{color:"white"}}>Password</label><br></br>*******</div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}} ><a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Change</a></div>
                  </div> 
                  <div class="row" style={{fontSize: "initial"}}>
                    <div class="form-group col-6" style={{color:"white"}}><label style={{color:"white",fontFamily:'sans-serif'}}>Phone Number</label><br></br>+92 300 1234 562</div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}} ><a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Change</a></div>
                  </div> 
                  <div class="row" style={{fontSize: "initial"}}>
                    <div class="form-group col-6" style={{color:"white"}}><label style={{color:"white",fontFamily:'sans-serif'}}>Date of Birth</label><br></br>08-03-1995</div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}}><a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Change</a></div>
                  </div> 
                  <div class="row" style={{fontSize: "initial"}}>
                    <div class="form-group col-6" style={{color:"white"}}><label style={{color:"white",fontFamily:'sans-serif'}}>Language</label><br></br>English</div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}} ><a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Change</a></div>
                  </div>
                  <div><h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px",fontFamily:'sans-serif'}}>Billing Details</h3></div> 
                  <div class="row" style={{fontSize: "initial"}}>
                  <div class="form-group col-6" style={{color:"white"}}><label style={{color:"white",fontFamily:'sans-serif'}}>Your next billing date is 19 september 2022</label></div>
                    <div class="form-group col-3" ></div>
                    <div class="form-group col-3" style={{textAlign:"end"}} ><a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>Update Payment info</a></div>
                  </div> 
                  <div class="row" style={{fontSize: "initial"}}>
                  <div class="form-group col-6" style={{color:"white",fontFamily:'sans-serif'}}><button class = "btn"  style={{backgroundColor:"#D51C58",borderRadius:"20px",color:"whitesmoke",padding:"8px 15px",fontWeight:"bold"}}>Cancel Membership</button></div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}}></div>
                  </div>
                  <div><h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px",fontFamily:'sans-serif'}}>Plan Details</h3></div>
                  <div class="row" style={{fontSize: "initial"}}>
                    <div class="form-group col-6" style={{ color:"white",fontFamily:'sans-serif'}}><label style={{color:"white"}}>premium</label></div>
                    <div class="form-group col-4" ></div>
                    <div class="form-group col-2" style={{textAlign:"end"}} ><a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>change plan</a></div>
                  </div>
                </div>
                </div>
            </div>
        
        </div>


  <WebFooter/>  
          </>
         );
      }
export default UserPerfile;