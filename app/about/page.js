import { ArrowLink } from "components/ArrowLink";
import Image from "next/image";
import profile from "public/images/photo.jpg";

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
          <h1 className="mb-4 font-heading text-4xl sm:text-6xl">Facts</h1>
          <ul className="ml-[2.5px] mr-2 flex flex-col gap-3 sm:gap-8">
            {Object.entries(facts).map(([key, value]) => (
              <li className="font-main   " key={key}>
                <span className="font-bold sm:text-lg">{key}: </span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[259px]">
          <Image
            src={profile}
            height={2684}
            width={1738}
            alt="Photo of June"
            className="rounded-xl"
            placeholder="blur"
          />
        </div>
      </div>
      <article className="mt-16">
        <h1 className="font-heading text-4xl sm:text-6xl">About Me</h1>
        <p className="ml-[2.5px] mt-4 sm:text-lg">
          Growing up sitting in front of a computer, I&apos;ve always had a
          strong interest in the web. I remember in high school, when I
          couldn&apos;t fall asleep but wasn&apos;t allowed to do anything else,
          I would sometimes visualize how an ecommerce website for my own
          fashion brand would look like. <br />
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
          friends with like-minded people, and of course, spending countless
          hours in front of the screen trying to make something work. The
          feeling when something finally works is amazing.
          <br /> <br />
          Frontend is only a small part of my fullstack education. It was
          interesting to develop a fullstack app but I found myself more
          passionate about the frontend. Recently I started to explore Framer
          Motion and I&apos;m looking forward to getting really good at it.
          <br />
          <br />
          Right now I&apos;m looking for a frontend internship opportunity in
          Stockholm{" "}
          <span className="font-bold italic">(2023-10-30 to 2024-04-11)</span>.
          I&apos;m particularly interested in working on ecommerce websites but
          I&apos;m open to any opportunity as long as I could learn something
          new and contribute to delivering a good user experience. Please{" "}
          <ArrowLink href="/contact">contact me</ArrowLink> if you&apos;ve got
          anything! :)
          <br /> <br />
        </p>
      </article>
    </div>
  );
}
