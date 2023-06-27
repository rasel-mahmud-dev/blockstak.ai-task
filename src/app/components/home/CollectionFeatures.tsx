import React from 'react';
import Button from "@/app/components/Button";

const CollectionFeatures = () => {
    return (
        <section className="collection-section">
            <div className="container">

                <div>
                    <h1 className="section-title">Collection Featured NFTs</h1>
                </div>

                <div className="feature-card-list">
                    {Array.from({length: 3}).fill("1").map((item, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feature-image-row">
                                <div>
                                    <img src="/unsplash_F56Y7dgrAkc(1).png" alt=""/>
                                </div>
                                <div>
                                    <img src="/unsplash_pVoEPpLw818(1).png" alt=""/>
                                    <img src="/unsplash_pVoEPpLw818(1).png" alt=""/>
                                    <img src="/unsplash_pVoEPpLw818(1).png" alt=""/>
                                </div>
                            </div>
                            <h5>Amazing Collection</h5>
                            <div className="flex align-center justify-between">
                                <div className="flex align-center gap-x-10 mt-10">
                                    <img src="/Ellipse 9(1).png" alt=""/>
                                    <span>by Arkhan</span>
                                </div>
                                <Button variant="primary-outline" size="sm">Total 54 Items</Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default CollectionFeatures;