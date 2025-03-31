import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [features, setFeatures] = useState(false);
    const [support, setSupport] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                // gives current vertical scroll location
                setScrolling(true);
                // scrolled 50px than navbar changes
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // run above function when we scroll (event,handler)
        return () => window.removeEventListener("scroll", handleScroll);
        // to stop the function call after event once occured
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? "navbar-dark bg-dark" : "navbar-light bg-transparent"}`}>
            <div className="container-fluid">
                <a className="navbar-brand" >Wallet Extension</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item" onMouseEnter={() => setFeatures(true)} onMouseLeave={() => setFeatures(false)}>
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item" onMouseEnter={() => setSupport(true)} onMouseLeave={() => setSupport(false)}>
                            <a className="nav-link" href="#support">Support</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#download">Download</a></li>
                    </ul>
                    <a className="btn btn-primary btn-animated" href="#download">Get Extension</a>
                </div>
            </div>

            {/* Sliding Features Panel */}
            <div className={`features-panel ${features ? "show" : ""}`}>
                <div className="features-content">
                    <h2>Our Features</h2>
                    <ul>
                        <li><p>Secure multi-chain support, seamless dApp integration, and fast transactions.</p></li>
                        <li><p>Experience a user-friendly and powerful crypto wallet.</p></li>
                    </ul>
                </div>
            </div>

            <div className={`support-panel ${support ? "show" : ""}`}>
                <div className="support-content">
                    <h2>It Supports</h2>
                    {/* <img src=""/> */}
                    <p>Lorem, ipsum dolor sit amet cnus laudantium ex commoa delectus architecto voluptatibus?</p>
                    <p>Lorem, ipsum dolor sit amet cnus laudantium ex commoa delectus architecto voluptatibus?</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;