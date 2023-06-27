import React from 'react';
import Button from "@/app/components/Button";

const TopCollection = () => {

    const data = [
        {
            image: "/Group88.png",
            title: "The Futr Abstr",
            text: "1 of 8",
            btnLabel: "Place a bid"

        },
        {
            image: "/unsplash_Tyg0rVhOTrE.png",
            title: "The Futr Abstr",
            text: "1 of 8",
            btnLabel: "Place a bid"

        },
        {
            image: "/unsplash_wHJ5L9KGTl4.png",
            title: "The Futr Abstr",
            text: "1 of 8",
            btnLabel: "Place a bid"

        }
    ]
    const collections = [
        {
            image: "/unsplash_k0rVudBoB4c.png",
            title: "CryptoFunks",
            count: "19,769.39",
            rate: "+26.52%",
            isBadge: true
        },
        {
            image: "/unsplash_fT49QnFucQ8.png",
            title: "Cryptix",
            count: "2,769.39",
            rate: "+10.52%",
            isBadge: false
        },
        {
            image: "/unsplash_5MTf9XyVVgM.png",
            title: "Frensware",
            count: "19,769.39",
            rate: "+2.52%",
            isBadge: false
        }, {
            image: "/unsplash_zkNT5mikUuo.png",
            title: "PunkArt",
            count: "3,769.39",
            rate: "+1.52%",
            isBadge: true
        },
        {
            image: "/unsplash_WjIB-6UxA5Q.png",
            title: "Art Crypto",
            count: "10,769.39",
            rate: "+2.52%",
            isBadge: false
        },

    ]


    return (
        <section className="top-collection-section">
            <div className="container">
                <div className="col-one">
                    <img src="/unsplash_F56Y7dgrAkc.png" alt=""/>
                    <div className="meta-info">
                        <span className="flex align-center">
                            <img src="/Ellipsesdf95.png" alt=""/>
                           <div className="meta-info-title">
                               <span>The Futr Abstr</span>
                               <span>10 in the stock</span>
                           </div>
                        </span>
                        <div className="meta-info-price">
                            <span>Highest Bid</span>
                            <span className="flex align-center">
                                <img src="/ethereum2.svg" alt=""/>
                                <h6>0.25 ETH</h6>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-two">
                    {data.map((item, i) => (
                        <div className="flex">
                            <img src={item.image} alt=""/>
                            <div className="right-content">
                                <h5>{item.title}</h5>
                                <div className="flex align-center  ">
                                    <img src="/Ellipse95.png" alt=""/>
                                    <Button size="sm" rounded={true} variant="secondary-outline">
                                        <img src="/ethereum2(1).svg" alt=""/>
                                        <span>0.25 ETH</span>
                                    </Button>
                                    <span>{item.text}</span>
                                </div>
                                <Button variant={i === 0 ? "primary" : "primary-outline"}>{item.btnLabel}</Button>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="col-three">
                    <h2>Top Collections over </h2>
                    <h4>Last 7 days</h4>
                    {collections.map((collection, index) => (

                        <div className="flex justify-between align-center " key={index}>

                            <div className="flex align-center gap-x-22">
                                <span className="collection-no">{index + 1}</span>
                                <div className="flex align-center gap-x-22">

                                    <div className={collection.isBadge ? "verified" : ""}>
                                        <img src={collection.image} alt=""/>
                                    </div>

                                    <div className="total-count-parent">
                                        <h5>{collection.title}</h5>
                                        <span className="total-count">
                                            <img src="/ethereum4561.svg" alt=""/>
                                            <span>{collection.count}</span>
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <span className="rate">
                                {collection.rate}
                            </span>

                        </div>


                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopCollection;