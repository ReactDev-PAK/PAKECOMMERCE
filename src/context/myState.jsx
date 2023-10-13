import React, { useState } from "react";
import MyContext from "./myContext";


const Mystate = (props) => {
     const {children} = props
     
     const [mode,setMode] = useState('Light')

     const toggleMode = () => {
        console.log("res",mode);
        if(mode === 'Light')
        {
            setMode('Dark')
            document.body.style.backgroundColor = "rgb(10,20,39)"
        }
        else
        {
            setMode('Light')
            document.body.style.backgroundColor = "white"
        }

     }
     
     return (
        <MyContext.Provider value={{mode,toggleMode}} >
            {children}
        </MyContext.Provider>
     )

}

export default Mystate;
