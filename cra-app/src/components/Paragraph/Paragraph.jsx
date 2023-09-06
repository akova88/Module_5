import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
// import { ThemeContext } from "../main/Main";

function Paragraph() {
    // const {theme, handleChangeTheme} = props
    const {theme}= useContext(ThemeContext)
    
    return (
        <div className={theme}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis quia ut iure. Modi nobis reiciendis saepe id, 
                possimus quo consectetur, odit debitis dolore dolorum praesentium error, incidunt magni consequuntur.</p>
        </div>
    )
}

export default Paragraph