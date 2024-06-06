import React from "react";
import "./HeroSection.style.css";
import CtaButtonsComponent from "./Cta-buttons.component";

const HeroSectionComponent = () => {
  return (
    <section className="HeroSection">
      <div className="flex">
        <div className="writeup-box">
          <h1 className="writeup">
            Discover The Pathway to Mastering the Art of Profitable Crypto
            Trading
          </h1>
        </div>
        <div className="Hero-img-box">
          <img src="#" alt="Crypto Trading" />
        </div>
      </div>

      <p className="writeup-p">
        Linx Finance is your sure guide to financial freedom. We're are a
        supportive community dedicated to teaching you the art of cypto trading.
      </p>
      <div className="df">
        <CtaButtonsComponent name={"Signup"} />
        <CtaButtonsComponent name={"Login"} />
      </div>
    </section>
  );
};

export default HeroSectionComponent;
