import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full py-20">
      <Container
        className={
          "flex flex-col sm:flex-row gap-10 sm:gap-32 items-start justify-between"
        }
      >
        <div className=" h-[350px] bg-blend-screen w-[350px] sm:h-[600px] relative  sm:w-[600px]">
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/brand/app-mockup.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-1 flex gap-10 flex-col">
          <h2 className="text-2xl sm:leading-relaxed sm:text-5xl leading-normal text-nuqi-bgfade font-semibold">
            Download Your App : <br className="hidden sm:inline-block" />
            <span className="text-nuqi-gold">Shape Your Wealth Today</span>
          </h2>
          <p className="text-lg sm:w-[60ch]">
            Take control of your financial future today by downloading the Nuqi
            Gold app. With our intuitive platform, you can start investing in
            gold effortlessly. Join the Nuqi Gold community now and get on your
            journey to financial empowerment.
          </p>
          <div className="flex flex-col sm:flex-row sm:my-5 items-center sm:items-start gap-5 sm:gap-10">
            <div className="">
              <h3 className="text-xl sm:text-left text-center font-medium text-nuqi-bgfade mb-3 sm:mb-5">
                Available On
              </h3>
              <div className="flex gap-5">
                <Link href={'https://play.google.com/store/apps/details?id=app.nuqigold.com'}>
                <Image
                  className="p-5 bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark rounded-xl"
                  height={80}
                  width={80}
                  src={"/brand/playstore.svg"}
                  alt="Google Playstore"
                />
                </Link>
                <Link href={'https://apps.apple.com/in/app/nuqi-gold/id6711336841'}>
                <Image
                  className="p-5 bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark rounded-xl"
                  height={80}
                  width={80}
                  src={"/brand/apple.svg"}
                  alt="Apple Appstore"
                />
                </Link>
              </div>
            </div>
            <div className="border hidden sm:block h-[140px]"></div>
            <div className="">
              <h3 className="text-xl sm:text-left text-center font-medium text-nuqi-bgfade mb-3">
                Scan QR Code
              </h3>
              <Image
                width={180}
                height={180}
                src={"/brand/scanner.svg"}
                alt="sacnner to download app"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
