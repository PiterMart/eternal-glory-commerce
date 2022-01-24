import React from "react";
import './Welcome.css';
import { Link } from "react-router-dom";



const Welcome = () => {

    return(
        <div className="welcome">
            <p className="glow">WELCOME TO ETERNAL GLORY</p>
            <Link to={'releases'} className='link'><button>ENTER SITE</button></Link>
        </div>
        )

    
    
}

export default Welcome;