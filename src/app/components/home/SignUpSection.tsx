"use client"

import React, {useEffect} from 'react';
import Button from "@/app/components/Button";
import AOS from "aos";

const SignUpSection = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="signup-section" id="resource-section" data-aos="fade-down">
            <div className="container">

                <div className="signup-section-left">
                    <div className="flex">
                        <div className="img img1">
                            <img src="/unsplash_E8Ufcyxz514(2).png" alt=""/>
                            <img src="/Ellipse95(2).png" alt=""/>
                        </div>
                        <div className="img img2">
                            <img src="/unsplash_pVoEPpLw818(2).png" alt=""/>
                            <img src="/Group106.png" alt=""/>
                        </div>
                    </div>
                    <div className="img img3">
                        <img src="/unsplash_tZCrFpSNiIQ(1).png" alt=""/>
                        <img src="/Group106.png" alt=""/>
                    </div>
                </div>

                <div className="signup-section-right">
                    <h1 className="section-title">Create and sell your NFTs</h1>
                    <p className="para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a
                        pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id
                        consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                    </p>
                    <Button variant="primary">
                        Sign Up Now
                    </Button>
                </div>

            </div>

        </section>

    );
};

export default SignUpSection;