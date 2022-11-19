
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


// admin pages
import AdminHomePage from './containers/admin/index';
import MoviesUpload from './containers/admin/movies-upload';
 import AddMovies from './containers/admin/movies'; 
import User from './containers/admin/user';
import Post from './containers/admin/post'

//web Pages
import SignUp from './containers/website/sign-up';
import UserPerfile from './containers/website/user-perfile';
import LandingPage from './containers/website/landing-page';
import TestList from './containers/website/test';
import HomePage from './containers/website/home';
import SignIn from './containers/website/sign-in';
import SignUpOtp from './containers/website/signup-otp';
import PricingPlan from './containers/website/pricing-plan';
import HomePopUp from './containers/website/home-page-popup';
import MoviePlayer from './containers/website/movie-player';



function App() {
  return (
    <main>
             <Routes>
                <Route path="/" exact element={<LandingPage/>}/>
                <Route path="/home" exact element={<HomePage/>}/>
                <Route path="/signin" exact element={<SignIn/>}/>
                <Route path="/signup" exact element={<SignUp/>}/>
                <Route path="/userprofile" exact element={<UserPerfile/>}/>
                <Route path="/test" exact element={<TestList/>}/>
                <Route path="/signupotp" exact element={<SignUpOtp/>}/>
                <Route path="/pricingplan" exact element={<PricingPlan/>}/>
                <Route path="/popup" exact element={<HomePopUp/>}/>
                <Route path="/player" exact element={<MoviePlayer/>}/>
                
            </Routes> 

            <Routes>
                <Route path="/dashboard" exact element={<AdminHomePage/>}/>
                <Route path="/movieupload" exact element={<MoviesUpload/>}/>  
                <Route path="/addmovies" exact element={<AddMovies/>}/>
                
                 <Route path="/user" exact element={<User/>}/>
                 <Route path="/post" exact element={<Post/>}/>
                
               {/* <Route path="/subscription" exact element={<Subscription/>}/>
                <Route path="/notification" exact element={<Notification/>}/> */}
            </Routes>
           {/*  <h1> this ism w</h1> */}
            
        </main>
  );
}

export default App;
