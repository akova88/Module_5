import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout(props) {
    const {children} = props;
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout