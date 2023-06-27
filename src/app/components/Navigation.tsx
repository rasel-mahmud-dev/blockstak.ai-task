import React from 'react';
import Button from "@/app/components/Button";
import Link from "next/link";

const Navigation = () => {
    return (
        <header className="header">
            <nav className="container">
                <div className="left-nav-content">
                    <div className="nav-logo">
                        <Link href="/"><img src="/NFters.svg" alt="logo"/></Link>
                    </div>
                    <div className="nav-items">
                        <li><a href="#hero-section">Marketplace</a></li>
                        <li><a href="#resource-section">Resource</a></li>
                        <li><a href="#about-section">About</a></li>
                    </div>
                </div>

                <div className="right-nav-content">
                    <div className="search-input">
                        <input placeholder="Search"/>
                        <img src="/search-normal.svg" alt=""/>
                    </div>
                    <Button variant="primary">Upload</Button>
                    <Button variant="primary-outline">Connect Wallet</Button>
                </div>

            </nav>
        </header>
    );
};

export default Navigation;