import React from "react";
import "./Features.css";
import { FaEthereum, FaLock, FaSignInAlt, FaCubes } from "react-icons/fa";

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose Our Wallet?</h2>
                <p className="features-subtitle">Secure, seamless, and developer-friendly.</p>

                <div className="row">
                    <div className="col-md-6 col-lg-3 feature-card">
                        <FaCubes className="feature-icon" />
                        <h3>Multi-Chain Support</h3>
                        <p>Supports Ethereum, Solana, and other major networks with seamless switching.</p>
                    </div>

                    <div className="col-md-6 col-lg-3 feature-card">
                        <FaSignInAlt className="feature-icon" />
                        <h3>dApp Integration</h3>
                        <p>Easily connect with decentralized applications via a standardized API.</p>
                    </div>

                    <div className="col-md-6 col-lg-3 feature-card">
                        <FaLock className="feature-icon" />
                        <h3>Secure Key Management</h3>
                        <p>Private keys are securely stored with encryption, keeping your assets safe.</p>
                    </div>

                    <div className="col-md-6 col-lg-3 feature-card">
                        <FaEthereum className="feature-icon" />
                        <h3>Transaction Signing</h3>
                        <p>Approve transactions safely before broadcasting with a clear approval UI.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
