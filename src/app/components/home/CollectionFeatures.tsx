import React from 'react';
import Button from "@/app/components/Button";

const CollectionFeatures = () => {

    type Images = {
        [key: number]: {
            thumb: string,
            gallery: string[]
        }
    }

    const images: Images = {
        0: {
            thumb: "/unsplash_F56Y7dgrAkc(1).png",
            gallery: [
                "/unsplash_pVoEPpLw818(1).png",
                "/unsplash_LpbyDENbQQg.png",
                "/unsplash_9anj7QWy-2g.png",

            ]
        },
        1: {
            thumb: "/unsplash_F56Y7dgrAkc(2).png",
            gallery: [
                "/unsplash_LpbyDENbQQg.png",
                "/unsplash_pVoEPpLw818(1).png",
                "/unsplash_9anj7QWy-2g345341).png",
            ]
        },
        2: {
            thumb: "/unsplash_F56Y7dgrAkcasdfasd(3).png",
            gallery: [
                "/unsplash_pVoEPpLw8183242(3).png",
                "/unsplash_LpbyDENbQQgasdasdasd(1).png",
                "/unsplash_9anj7QWy-2g234234(2).png",
            ]
        }
    }

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
                                    <img src={images[i].thumb} alt=""/>
                                </div>
                                <div>
                                    {images[i]?.gallery?.map((g: string, index: number) => (
                                        <img src={g} alt="" key={index}/>
                                    ))}
                                </div>
                            </div>
                            <h5>Amazing Collection</h5>
                            <div className="flex align-center justify-between feature-card-meta">
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