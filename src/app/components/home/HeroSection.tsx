import React from 'react';
import Button from "@/app/components/Button";

const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className="hero-content">
                    <div>
                        <h1 className="hero-title">Discover, and collect Digital Art  NFTs </h1>
                        <p className="para">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>

                        <Button>Explore Now</Button>

                        <div className="slats">
                            <li>
                                <h1>98k+</h1>
                                <span>Artwork</span>
                            </li>
                            <li>
                                <h1>12k+</h1>
                                <span>Auction</span>
                            </li>
                            <li>
                                <h1>15k+</h1>
                                <span>Artist</span>
                            </li>

                        </div>

                    </div>
                    <div className="image-stack">
                        <img src="/unsplash_E8Ufcyxz514(1).png" alt=""/>
                        <img src="/unsplash_pVoEPpLw818.png" alt=""/>
                        <img src="/unsplash_tZCrFpSNiIQ.png" alt=""/>

                        <div className="image-badge">
                            <img src="/badge.png" alt=""/>
                        </div>

                        <div className="image-stack-overlay">

                                <h3>Abstr Gradient NFT</h3>
                                <div>
                                    <img src="/Ellipse95.png" alt=""/>
                                    <span>Arkhan17</span>
                                </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;