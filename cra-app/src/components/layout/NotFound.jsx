import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row col-sm-6 h-50 text-center">
                <h3 className="text-danger fw-bolder">404 NOT FOUND</h3>
                <Link className="btn btn-link" to={"/"}>Back to Home Page</Link>
            </div>
        </div>
    )
}

export default NotFound