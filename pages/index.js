// pages/index.js
import Image from "next/image";
import { headers } from "next/dist/client/components/headers";
import { ArrowLink } from "@/components/ArrowLink";

export default function Home() {
  return (
    <header>
      <h1 className="text-7xl  font-heading">Hi, I'm June </h1>
      <h2 className="font-main text-xl font-medium">
        I'm a fullstack student at{" "}
        <ArrowLink
          href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
          newTab
        >
          Nackademin
        </ArrowLink>
        currently looking for a frontend intership in Stockholm from 2023-10-30
        to 2024-04-11. Please <ArrowLink href="/contact">contact me</ArrowLink>{" "}
        if you
        <br />
        <br />
        <ArrowLink href="/about">Learn more about me</ArrowLink>
      </h2>
    </header>
  );
}
