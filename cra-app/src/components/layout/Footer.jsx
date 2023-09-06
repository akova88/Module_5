import React from "react";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <i class="bi bi-bootstrap-fill"></i>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 CodeGym, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i class="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i class="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i class="bi bi-facebook"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer