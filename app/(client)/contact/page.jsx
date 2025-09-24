import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl font-semibold text-nuqi-bgfade sm:text-center">
          Your questions, Our expertise - <span className="text-nuqi-gold">Let’s talk</span> 
        </h1>
        <div className="grid mt-10 gap-5 sm:grid-cols-2">
          <div>
            <h1 className="text-2xl sm:text-4xl text-nuqi-bgfade mb-10 font-semibold">Global Offices</h1>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="p-5 group hover:bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark sm:p-10 rounded-2xl border">
                <div className="relative mb-5 h-[80px] w-[80px]">
                  <Image src={"/brand/dubai.svg"} fill alt="dubai" />
                </div>
                <h4 className="text-2xl text-nuqi-gold font-semibold">UAE</h4>
                <p className="text-lg group-hover:text-white  mt-5">
                  UAE: Office 501, 05th FLoor, Innovation One, DIFC, Dubai, UAE
                </p>
              </div>
              <div className="p-5 group hover:bg-gradient-to-tr from-nuqi-bgfade to-nuqi-bgdark sm:p-10 rounded-2xl border">
                <div className=" mb-5 border rounded-md p-4 bg-white h-fit w-fit">
                  <Image src={"/brand/mumbai.svg"} height={45} width={45} alt="mumbai" />
                </div>
                <h4 className="text-2xl text-nuqi-gold font-semibold">India</h4>
                <p className="text-lg group-hover:text-white mt-5">
                  India: Office Nos 206, Parinee I, Veera Desai Road, Andheri
                  West, Mumbai - 400053
                </p>
              </div>
            </div>
          </div>
          <div className="sm:p-10">
            <form className="flex flex-col rounded-3xl gap-5 p-10 sm:p-20 border-2 border-nuqi-bgfade">
              <h1 className="text-3xl mb-5">Contact Us</h1>
              <input
                placeholder="Name"
                className="p-3 rounded-xl text-base border"
                type="text"
              />
              <input
                placeholder="Email Address"
                className="p-3 rounded-xl text-base border"
                type="text"
              />
              <input
                placeholder="Phone Number"
                className="p-3 rounded-xl text-base border"
                type="text"
              />
              <textarea
                placeholder="Message"
                className="border h-44 p-3 rounded-xl"
                type="text"
              />
              <Button className="text-xl p-7 text-nuqi-gold rounded-xl">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
