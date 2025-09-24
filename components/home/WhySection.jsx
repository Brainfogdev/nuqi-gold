import React from "react";
import Container from "../Container";

const WhySection = () => {
  return (
    <section className="py-32">
      <Container className={"flex flex-col"}>
        <div className="mb-10">
          <h1 className="text-2xl sm:text-5xl mb-5 font-semibold text-nuqi-bgfade">
            Reason for{" "}
            <span className="text-nuqi-gold">customers to invest</span>
          </h1>
          <p className="text-lg sm:w-[80ch]">
            We understand the importance of trust, convenience, and security
            when it comes to your gold investments. Three Major Reasons to
            Choose Nuqi Gold
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="p-10 group hover:bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark border rounded-xl shadow-md">
            <h5 className="text-2xl mb-5 text-nuqi-bgfade group-hover:text-nuqi-gold font-semibold">
              Trusted Partner
            </h5>
            <p className="group-hover:text-white">
              Guiding you towards the best investments aligned with your goals
              and risk tolerance.
            </p>
          </div>
          <div className="p-10 group hover:bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark border rounded-xl shadow-md">
            <h5 className="text-2xl mb-5 text-nuqi-bgfade group-hover:text-nuqi-gold font-semibold">
              User Friendly Experience
            </h5>
            <p className="group-hover:text-white">
              Our intuitive app interface makes investing in gold a seamless and
              enjoyable experience. Whether you're a seasoned investor or new to
              the world of finance, Nuqi Gold offers a user-friendly platform
              tailored to your needs.
            </p>
          </div>
          <div className="p-10 group hover:bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark border rounded-xl shadow-md">
            <h5 className="text-2xl mb-5 text-nuqi-bgfade group-hover:text-nuqi-gold font-semibold">
              Robust Security Measures
            </h5>
            <p className="group-hover:text-white">
              We take security seriously. With state-of-the-art encryption
              technology and secure storage solutions, Nuqi Gold ensures the
              safety of your investments at every step of the journey.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhySection;
