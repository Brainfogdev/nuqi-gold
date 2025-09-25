import React from "react";
import Container from "@/components/Container";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import WhySection from "@/components/home/WhySection";
import Image from "next/image";

const page = () => {
  return (
    <main className="bg-white h-full">
      <header className=" bg-[#f8f8f8] border-b">
        <Container className="py-3 flex gap-5 overflow-y-scroll sm:overflow-hidden">
          <p className="text-nuqi-bgdark text-nowrap uppercase flex sm:gap-2 font-semibold">
            Gold Price(USD){" "}
            <span className="text-green-600 flex">
              8447.90/gm <ArrowUpRight />{" "}
            </span>
          </p>
          <p className="text-nuqi-bgdark text-nowrap uppercase flex sm:gap-2 font-semibold">
            Gold Price(AED){" "}
            <span className="text-green-600 flex">
              {" "}
              8447.90/gm <ArrowUpRight />
            </span>
          </p>
        </Container>
      </header>
      <HeroSection />
      <Stats />
      <Features />
      <section className="w-full py-10">
        <Container className={"flex flex-col gap-10 sm:flex-row items-center"}>
          <div className="flex-1">
            <h3 className="text-2xl sm:leading-relaxed sm:text-4xl text-nuqi-bgfade font-semibold">
              <span className="text-nuqi-gold">Track Your Gold Growth</span>: <br className="hidden sm:inline-block" />
              Real-Time  Insights and <br className="hidden sm:inline-block" /> Profit Visualization
            </h3>
            <p className="w-[30ch] sm:w-[48ch]  sm:text-xl mt-8 sm:leading-loose ">
              Our intuitive graph feature allows you to monitor your gold
              investments in real-time. Visualize your portfolio’s growth and
              track your profits effortlessly. With Nuqi Gold, staying informed
              about your financial progress has never been simpler.
            </p>
          </div>
          <div className=" w-[350px] h-[350px] sm:h-[540px] relative  sm:w-[600px]">
            <Image
              src={"/brand/screen1.jpg"}
              className="rounded-[3rem]"
              fill
              alt="nuqi gold screen1"
            />
          </div>
        </Container>
      </section>
      <WhySection />
      <section className="w-full ">
        <Container className={"flex flex-col sm:flex-row  gap-10 sm:gap-32 items-center justify-between"}>
          <div className="w-[340px] h-[340px] sm:h-[500px] relative  sm:w-[580px]">
            <Image
              src={"/brand/screen2.png"}
              className="rounded-[3rem] border"
              fill
              // height={300}
              alt="nuqi gold screen1"
            />
          </div>
          <div className="flex-1 flex-col flex gap-10 ">
            <div className="my-3">
              <h1 className="text-3xl font-semibold text-nuqi-bgfade">
                About App UI
              </h1>
              <p className="sm:w-[50ch] mt-5">
                Explore a user-friendly app UI for an enjoyable investment
                journey. Effortless navigation, real-time data, and interactive
                tools cater to both new and seasoned investors. Experience Nuqi
                Gold's sophistication today.
              </p>
            </div>
            <div className="my-3">
              <h1 className="text-3xl font-semibold text-nuqi-bgfade">
                Simlified Navigation
              </h1>
              <p className="sm:w-[50ch] mt-5">
                A clean and intuitive interface, allowing you to navigate
                effortlessly through the platform.
              </p>
            </div>
            <div className="my-3">
              <h1 className="text-3xl font-semibold text-nuqi-bgfade">
                Interactive Tools
              </h1>
              <p className="sm:w-[50ch] mt-5">
                Explore our interactive tools designed to enhance your
                investment experience, from real-time market data to
                customizable investment portfolios.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-32">
        <Container>
          <h1 className="text-4xl sm:text-5xl font-semibold text-nuqi-bgfade">
            Mission & <span className="text-nuqi-gold">Vision</span>
          </h1>
          <div className="mt-10 my-8">
            <h1 className="text-3xl font-semibold text-nuqi-bgfade mb-3">
              Mission
            </h1>
            <p className="text-xl leading-loose">
              Our mission is to democratize gold investment, making it
              accessible and convenient for everyone. We believe that financial
              empowerment should be within reach for all individuals, regardless
              of their background or expertise.
            </p>
          </div>
          <div className="my-8">
            <h1 className="text-3xl font-semibold text-nuqi-bgfade mb-3">
              Vision
            </h1>
            <p className="text-xl leading-loose">
              Our vision is to revolutionize the way people invest in gold,
              empowering them to take control of their financial futures with
              confidence and ease. We envision a world where gold investment is
              not only accessible but also transparent, secure, and rewarding
              for all.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
