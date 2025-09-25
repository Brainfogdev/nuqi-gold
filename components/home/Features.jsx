import React from "react";
import Container from "../Container";

const Features = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-5xl text-center text-nuqi-bgfade">
          Innovative Features
        </h1>
        <p className="sm:text-xl px-5 mt-5 sm:w-[60ch] text-center">
          Experience perfect gold investment journey with our cutting-edge tools
          and unparalleled user experience.
        </p>
      </div>
      <Container className={"my-10 grid gap-2 sm:grid-cols-3"}>
        <div className=" flex flex-col gap-7">
          <FeaturesCard
            label={"Gold Account Access"}
            desc={
              "Explore the secure gold account feature to buy and Sell Gold"
            }
            side={"right"}
          />
          <FeaturesCard
            label={"Real-Time Market Insights"}
            desc={
              "Your gold investments are stored securely in insured vaults, ensuring peace of mind and protection against external risks."
            }
          />
          <FeaturesCard
            label={"Secured Vault"}
            desc={
              "Your gold investments are stored securely in insured vaults, ensuring peace of mind and protection against external risks."
            }
            side={"right"}
          />
        </div>
        <div className="  ">
          <div className="relative w-full sm:max-w-[600px] mx-auto aspect-[9/16] overflow-hidden">
            <video
              className=" h-[530px] object-cover "
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/brand/mockups-app.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className=" flex flex-col gap-7">
          <FeaturesCard
            label={"Live Rates"}
            desc={"Get access to live gold rate anytime, anywhere"}
          />
          <FeaturesCard
            label={"Get Physical Gold"}
            desc={
              "Redeem your gold holdings to instant cash seamlessly, Physical coins or jewelry**"
            }
            side={"right"}
          />
          <FeaturesCard
            label={"Nuqi Regular Savings"}
            desc={
              "Tailor your Nuqi Regular Savings (Daily, Weekly, or Monthly) to suit your financial goals. With Nuqi Regular Savings, you can invest a fixed amount regularly, making it easy to save for gold over time."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;

const FeaturesCard = ({ side, label, desc }) => {
  return (
    <div
      className={`p-7 rounded-xl group hover:text-white hover:bg-gradient-to-tr hover:from-nuqi-bgfade hover:to-nuqi-bgdark shadow-md bg-white w-[32ch] ${
        side === "right" ? "self-end" : ""
      }`}
    >
      <h3 className="text-xl group-hover:text-nuqi-gold text-nuqi-bgfade w-fit mb-3 font-semibold">
        {label}
      </h3>
      <p className="text-base ">{desc}</p>
    </div>
  );
};
