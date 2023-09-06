import React, { createContext, useState } from "react";
import Content from "../Content/Content";

function Main() {
    
    return (
        // <ThemeContext.Provider value={{theme, handleChangeTheme}}>
            <main className="flex-shrink-0 vh-100">
                <div className="container">
                    <Content />
                </div>
            </main>
        // </ThemeContext.Provider>

    )
}

export default Main