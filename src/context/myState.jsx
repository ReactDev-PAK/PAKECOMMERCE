import React from "react";
import MyContext from "./myContext";


const Mystate = (props) => {
     const {children} = props
     
     const state = {
        name: "SYED TAYYAB SAGHEER",
        class_name: '9 C',
        school: 'D M' 
     }

     const color = 'red'
     
     return (
        <MyContext.Provider value={{state,color}}>
            {children}
        </MyContext.Provider>
     )

}

export default Mystate;
