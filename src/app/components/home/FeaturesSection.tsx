"use client"

import React, {useEffect} from 'react';


import AOS from "aos";

const FeaturesSection = () => {

    useEffect(()=>{
        AOS.init();
    }, [])


    return (
        <section className="features"  data-aos="fade-down" data-aos-duration="4000">

            <div className="container">

                <div>
                    <h1 className="section-title">The amazing NFT art of the world here</h1>
                </div>

                <div className="feature-item">
                    <div className="feature-logo">
                        <img src="/card-tick-11.svg" alt=""/>
                        <h5>Fast Transaction</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                </div>

                <div className="feature-item">
                    <div className="feature-logo">
                        <img src="/chart-square2.svg" alt=""/>
                        <h5>Growth Transaction</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;