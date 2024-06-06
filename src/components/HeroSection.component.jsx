import React from "react";
import "./HeroSection.style.css"

const HeroSectionComponent = () => {
    return (
       <section className="HeroSection">
         <div className="writeup-box">
            <h1 className="writeup">
                Discover The Pathway to Mastering the Art of Profitable Crypto Trading
            </h1>
            <p>
                Linx Finance is your sure guide to financial freedom. We're are a supportive community dedicated to teaching you the art of cypto trading.
            </p>
        </div>
        <div className="Hero-img-box">
            <img src="#" alt="Crypto Trading"/>
        </div>
       </section>

    )
}

export default HeroSectionComponent;