import React from "react";
import {useSpring, animated} from 'react-spring'



const Welcome = () => {


    // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    // return <animated.div style={props}>I will fade in</animated.div>
    return(
    <div>
        <h1>Hello There!</h1>
    </div>
    )

    
    
}

export default Welcome;