import React, { useContext } from "react";
import Paragraph from "../Paragraph/Paragraph";
import { ThemeContext } from "../../Context/ThemeProvider";
// import { ThemeContext } from "../main/Main";

function Content() {

    // const {theme, handleChangeTheme} = props
    const {theme, handleChangeTheme} = useContext(ThemeContext)
    return (
        <>
            <div className={theme}>
                <h1 className="mt-5">Sticky footer with fixed navbar</h1>
                <p className="lead">Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code className="small">padding-top: 60px;</code> on the <code className="small">main &gt; .container</code>.</p>
                <p>Back to <a href="/docs/5.0/examples/sticky-footer/">the default sticky footer</a> minus the navbar.</p>
                <button className="btn btn-sm btn-secondary"
                    onClick={handleChangeTheme}
                >
                    Change theme
                </button>
            </div>
            <Paragraph theme={theme} />
        </>
    )
}

export default Content