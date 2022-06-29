import React from "react";
import './homepage.css'


const Homepage = ({setLoginUser}) => {
  return (
    <div className="homepage">
        <h2>Heyyyy! you have logged in successfully </h2>
        <h3>Do you wish to log out?</h3>  
        <div className="button" onClick={() => setLoginUser({})}>Logout</div>
    </div>
  )
}

export default Homepage

