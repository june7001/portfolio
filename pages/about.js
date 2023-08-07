import { ArrowLink } from "@/components/ArrowLink";
import Image from "next/image";

const facts = {
  Name: "June",
  Location: "Stockholm, Sweden",
  Languages: "Chinese, English, Swedish",
  "I&apos;m learning": "React, Next.js, CSS, Framer Motion, Figma, Shopify",
  "I&apos;m interested in": "E-commerce, Design, Accessibility",
  "I like": "Nature, Music, Dancing, Learning new things",
};

export default function About() {
  return (
    <div>
      <div className=" flex justify-between ">
        <div>
          <h1 className="mb-8 font-heading text-3xl">Facts</h1>
          {Object.entries(facts).map(([key, value]) => (
            <p className="font-main text-lg font-medium leading-6" key={key}>
              <span className="font-bold">{key}: </span>
              {value}
              <br />
              <br />
            </p>
          ))}
        </div>
        <div className="w-[250px] ">
          <Image
            src="/photo.jpg"
            height={300}
            width={250}
            alt="Photo of June"
            className="rounded-xl"
          />
          <p className="text-sm italic">
            Here&apos;s a photo of me sitting on my favoriate spot in the forest
            nearby.
          </p>
        </div>
      </div>
      <h1 className="mt-8 font-heading text-3xl">About Me</h1>
      <p className="mt-8 text-lg font-medium">
        Growing up sitting in front of a computer, I&apos;ve always had a strong
        interest in the web. I remember in high school, when I couldn&apos;t
        fall asleep but wasn&apos;t allowed to do anything else, I would
        sometimes visualize how an ecommerce website for my own fashion brand
        would look like. <br />
        <br /> After trying many other things, I finally decided and got the
        chance to study to become a web developer at{" "}
        <ArrowLink
          href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
          newTab
        >
          Nackademin
        </ArrowLink>{" "}
        in Sweden.
        <br />
        <br />
        It&apos;s been an interesting journey: Speaking Swedish with my
        classmates to complete assignments, attending tech events and becoming
        friends with like-minded people, and of course, spending countless hours
        in front of the screen trying to make something work. The feeling when
        something finally works is amazing.
        <br /> <br />
        Frontend is only a small part of my fullstack education. It was
        interesting to develop a fullstack app but I found myself more
        passionate about the frontend. Recently I started to explore Framer
        Motion and I&apos;m looking forward to getting really good at it.
        <br />
        <br />
        Right now I&apos;m looking for a frontend internship opportunity in
        Stockholm (2023-10-30 to 2024-04-11). I&apos;m particularly interested
        in working on ecommerce websites but I&apos;m open to any opportunity as
        long as I could learn something new and contribute to delivering a good
        user experience. Please{" "}
        <ArrowLink href="/contact">contact me</ArrowLink> if you&apos;ve got
        anything! :)
        <br /> <br />
      </p>
    </div>
  );
}
