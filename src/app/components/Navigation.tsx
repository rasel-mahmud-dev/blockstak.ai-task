import React from 'react';
import Button from "@/app/components/Button";

const Navigation = () => {
    return (
        <header className="header">
            <nav className="container">
                <div className="left-nav-content">
                    <div className="nav-logo">
                        <img src="/NFters.svg" alt="logo"/>
                    </div>
                    <div className="nav-items">
                        <li>Marketplace</li>
                        <li>Resource</li>
                        <li>About</li>
                        <li>Marketplace</li>
                    </div>
                </div>

                <div className="right-nav-content">
                    <div className="search-input">
                        <span>Search</span>
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