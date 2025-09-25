import React from "react";
import Container from "../Container";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <Container className="grid sm:grid-cols-2 gap-8 my-5">
        <div className="relative py-10">
          <div className="p-4 sm:p-5 font-medium w-[200px] shadow-lg sm:w-[300px] rounded-xl sm:text-xl absolute z-10 bg-white">
            <h3 className="capitalize text-nuqi-bgdark">
              Turn your saving into smart investment <br /> with{" "}
              <span className="text-nuqi-gold">Nuqi Gold</span>
            </h3>
          </div>
          <div className="relative h-[300px] w-[300px] sm:h-[600px] sm:w-full">
            <Image src={"/brand/hero-bg.png"} alt="backgroun image" fill />
          </div>
        </div>
        <div className="sm:p-10">
          <h3 className="text-2xl text-wrap sm:text-left text-center text-nuqi-bgfade sm:text-6xl font-semibold sm:leading-[70px] ">
            Own <span className="text-nuqi-gold">24K</span> Physical Gold From
            <span className="text-nuqi-gold"> AED 200</span>
          </h3>
          <div>
            <div className="flex flex-col sm:flex-row mt-10 sm:p-5 rounded-xl items-center sm:items-start">
              <div className="relative h-[300px] w-[300px]">
                <Image alt="logo" src={"/brand/scanner.svg"} fill />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-medium leading-tight">
                  Scan QR To Download Now
                </h4>
                <div className="flex gap-5 flex-col mt-5">
                  <Link
                    href={
                      "https://play.google.com/store/apps/details?id=app.nuqigold.com"
                    }
                    className={cn(buttonVariants(), "p-8 py-9 rounded-xl")}
                  >
                    <Image
                      alt="playstore"
                      src={"/brand/playstore.svg"}
                      height={200}
                      width={200}
                    />
                  </Link>
                  <Link
                    href={
                      "https://apps.apple.com/in/app/nuqi-gold/id6711336841"
                    }
                    className={cn(buttonVariants(), "p-8 py-9 rounded-xl")}
                  >
                    <Image
                      className=""
                      alt="playstore"
                      src={"/brand/apple.svg"}
                      height={290}
                      width={290}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
