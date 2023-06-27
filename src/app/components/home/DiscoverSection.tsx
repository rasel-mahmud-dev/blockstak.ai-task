"use client"

import React, {useState} from 'react';
import Button from "@/app/components/Button";

const DiscoverSection = () => {

    const categories = [
        "All Categories",
        "Art",
        "Celebrities",
        "Gaming",
        "Sport",
        "Music",
        "Sport",
        "Crypto"
    ]

    const [activeIndex, setActiveIndex] = useState(0)


    const discoverData = [
        {
            thumb: "/image1.png",
            title: "ArtCrypto",

        },
        {
            thumb: "/asdfasdf.png",
            title: "This NFT",

        },
        {
            thumb: "/image453).png",
            title: "NameCrypto",

        },
        {
            thumb: "/imagesd1(4).png",
            title: "KingCrypto",

        }
    ]

    function sortArr(arr:  {thumb: string, title: string}[], isOdd: number){
        let cpArray = [...arr]
        return isOdd ? cpArray.reverse() : arr
    }


    return (
        <section className="discover-section">
            <div className="container">

                <h1 className="section-title">Discover more NFTs</h1>


                <div className="discover-categories">
                    <div>
                        {categories.map((category, i) => (
                            <Button key={i} variant={i === activeIndex ? "primary" : "light"}
                                    onClick={() => setActiveIndex(i)}>
                                {category}
                            </Button>
                        ))}
                    </div>
                    <Button className="flex items-center" variant="light">
                        <img src="/filter-results-button1.png" alt=""/>
                        <span>All Filters</span>
                    </Button>

                </div>


                <div className="discover-card-items">
                    {Array.from({length: 4}).fill(1).map((_, i: number)=> sortArr(discoverData, i % 2).map((item) => (
                        <div className="discover-card" key={item.title}>

                            <div className="discover-card-image">
                                <img src={item.thumb} alt=""/>
                            </div>

                            <div className="discover-card-body">

                                <div className="avatar-group">
                                    <img src="/Ellipse95.svg" alt=""/>
                                    <img src="/Ellipseasd(4).svg" alt=""/>
                                    <img src="/Ellipse95(2).svg" alt=""/>
                                    <img src="/Ellipse95(3).svg" alt=""/>
                                </div>

                                <h4>{item.title}</h4>

                                <div className="price-row">
                                    <div>
                                        <img src="/ethereumsd(2).svg" alt="" className="s"/>
                                        <span>0.25 ETH</span>
                                    </div>
                                    <p>1 of 321</p>
                                </div>

                                <div className="action-row">

                                    <Button variant="light"><span>3h 50m 2s left</span></Button>
                                    <span>Place a bid</span>
                                </div>


                            </div>


                        </div>
                    ))
                    )}
                </div>


                <Button variant="primary-outline" className="discover-more-btn">More NFTs</Button>


            </div>

        </section>

    );
};

export default DiscoverSection;