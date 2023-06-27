import React from 'react';
import Button from "@/app/components/Button";

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="footer-cols">
                    <div className="footer-col footer-col1">
                        <h1>NFters</h1>
                        <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible
                            tokens (NFTs). Buy, sell, and discover exclusive digital items.

                        </p>
                        <ul className="social-links">
                            <a href="">
                                <img src="/facebook.svg" alt=""/>
                            </a>
                            <a href="">
                                <img src="/twitter.svg" alt=""/>
                            </a>
                            <a href="">
                                <img src="/linkedin.svg" alt=""/>
                            </a>
                        </ul>
                    </div>

                    <div className="footer-col footer-col2">
                        <h2>Market Place</h2>
                        <ul className="footer-links">
                            <a href="#">All NFTs</a>
                            <a href="#">New</a>
                            <a href="#">Art</a>
                            <a href="#">Sports</a>
                            <a href="#">Utility</a>
                            <a href="#">Music</a>
                            <a href="#">Domain Name</a>
                        </ul>
                    </div>

                    <div className="footer-col footer-col3">
                        <h2>My Account</h2>
                        <ul className="footer-links">
                            <a href="#">Profile</a>
                            <a href="#">Favorite</a>
                            <a href="#">My Collections</a>
                            <a href="#">Settings</a>
                        </ul>
                    </div>

                    <div className="footer-col footer-col4">
                        <h2>Stay in the loop</h2>
                        <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
                            tips and tricks for navigating NFTs.</p>

                        <div className="subscribe-input">
                            <input placeholder="Enter your email address.. " />
                            <Button variant="primary">Subscibe Now</Button>
                        </div>

                    </div>

                </div>

            </div>


            <div className="bottom-footer">
                Copyright © 2022 Avi Yansah
            </div>

        </footer>
    );
};

export default Footer;