import React from "react";
import Container from "../Container";
import { Logo } from "../Navbar";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import CallToAction from "./CallToAction";

const links = [
  {
    herf: "/",
    label: "Home",
  },
  {
    herf: "/insight",
    label: "Insights",
  },
  {
    herf: "/faq",
    label: "FAQs",
  },
  {
    herf: "/legal",
    label: "Legal",
  },
  {
    herf: `/legal/NUQI-GOLD-Ethical-Certificate-.pdf`,
    label: "Ethical Certificate",
  },
  {
    herf: "/contact",
    label: "Contact",
  },
];

const Footer = () => {
  return (
    <>
      <CallToAction />
      <section className="bg-gray-100">
        <Container className={"flex flex-col gap-5 items-center pt-32 pb-20"}>
          <Logo height={300} width={200} />
          <div className="flex gap-5 text-nuqi-gold mt-5">
            <Mail />
            <Instagram />
            <Facebook />
            <Linkedin />
          </div>
          <div className="flex flex-col text-center sm:flex-row  sm:gap-8 my-5 mt-8">
            {links.map((item, index) => {
              return (
                <Link key={index} href={item.herf}>
                  {item.label}
                </Link>
              );
            })}
          </div>
          <p className=" text-gray-500 sm:w-[30ch] text-center">
            UAE : Office 501, 05th FLoor, Innovation One, DIFC, Dubai, UAE
          </p>
          <p className=" text-gray-500 sm:w-full text-sm text-center">
            8-12 %* Annualized Returns – This information is based on historical
            gold returns over the past 25 years and is for informational
            purposes only. It should not be considered financial advice. Past
            performance is not necessarily indicative of future results Redeem
            your gold holdings to instant cash seamlessly, Physical coins or
            jewelry** – Coming soon in collaboration with Kalyan Jewellers Gold
            Account Access*** – Available only for Non UAE customers.
          </p>
          <p className="text-center sm:px-20 mt-5 text-sm text-gray-500">
            © 2024 Nuqi Gold DMCC. All rights reserved Nuqi Gold DMCC is
            registered at Dubai Multi Commodities Centre (“DMCC”) Nuqi Gold DMCC
            registered address is Unit No: 4094 DMCC Business Centre Level No 1
            Jewellery & Gemplex 3,Dubai, United Arab Emirates Disclaimer:
            Investment in Gold are subject to market risks. Read all the related
            documents carefully before investing.
          </p>

          <p className="mt-6">
            Copyright © 2025 NUQI Gold. Developed and maintained by BrainFog
            Agency LLP
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;
