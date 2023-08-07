import { ArrowLink } from "@/components/ArrowLink";
import Image from "next/image";
const facts = {
  Name: "June",
  Location: "Stockholm, Sweden",
  Languages: "Chinese, English, Swedish",
  "I'm learning": "React, Next.js, CSS, Framer Motion, Figma, Shopify",
  "I'm interested in": "E-commerce, Design, Accessibility",
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
            Here's a photo of me sitting on my favoriate spot in the forest
            nearby.
          </p>
        </div>
      </div>
      <h1 className="mt-8 font-heading text-3xl">About Me</h1>
      <p className="mt-8 text-lg font-medium">
        Growing up sitting in front of a computer, I've always had a strong
        interest in the web. I remeber in high school, when I couldn't fall
        asleep but wasn't allowed to do anything else, I would sometimes
        visualize how an ecommerce website for my own fashion brand would look
        like. <br />
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
        It's been an intresting journey: Speaking Swedish with my classmates to
        complete assignments, attending tech events and becoming friends with
        like-minded people, and of course, spending countless hours in front of
        the screen trying to make something work. The feeling when something
        finally works is amazing.
        <br /> <br />
        Frontend is only a small part of my fullstack education. It was
        interesting to develop a fullstack app but I found myself more
        passionate about the frontend. Recently I started to explore Framer
        Motion and I'm looking forward to getting really good at it.
        <br />
        <br />
        Right now I'm looking for a frontend internship oppotunity in
        Stockholm(2023-10-30 to 2024-04-11), I'm particularly intresed in
        working on ecommerce websites but I'm open to any oppotunity as long as
        I could learn something new and contribute to delieving a good user
        experience. Please <ArrowLink href="/contact">contact me</ArrowLink> if
        you've got anything! :)
        <br /> <br />
      </p>
    </div>
  );
}
