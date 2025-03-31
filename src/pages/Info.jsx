import React from "react";
import "./Info.css";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container text-center">
                <h1 className="hero-title">Secure, Fast, and Multi-Chain Wallet for the Future.</h1>
                <p className="hero-subtitle">
                    Seamless transactions. Secure key management. Multi-chain support.
                </p>
                <div className="hero-buttons">
                    <a href="#download" className="btn btn-primary btn-lg">Get Wallet</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
