import React from "react";
import app_logo from '../images/app_logo.png';

// const logo = '../images/app_logo.png';

function Titles(props) {
    return(
        <div>
            <img src={app_logo} alt="app logo"/>
            <p>Get temperature, expections and more...</p>
        </div>
    );
}

export default Titles;