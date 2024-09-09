import { ArrowLink } from "components/ArrowLink";
import Image from "next/image";
import profile from "public/images/photo.jpg";

const facts = {
  Name: "June",
  Location: "Stockholm, Sweden",
  Languages: "Chinese, English, Swedish, some Japanese",
  "I'm learning": "React, Next.js, CSS, Framer Motion, Figma, Shopify",
  "I'm interested in": "E-commerce, Design, Accessibility",
  "I like": "Nature, Music, Dancing, Learning new things",
};

export default function About() {
  return (
    <p>o_O</p>
    // <div>
    //   <div className=" flex justify-between ">
    //     <div>
    //       <h1 className="mb-4 font-heading text-4xl sm:text-6xl">Facts</h1>
    //       <ul className="ml-[2.5px] mr-2 flex flex-col gap-3 sm:gap-8">
    //         {Object.entries(facts).map(([key, value]) => (
    //           <li className="font-main   " key={key}>
    //             <span className="font-bold sm:text-lg">{key}: </span>
    //             {value}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="w-[259px]">
    //       <Image
    //         src={profile}
    //         height={2684}
    //         width={1738}
    //         alt="Photo of June"
    //         className="rounded-xl"
    //         placeholder="blur"
    //       />
    //     </div>
    //   </div>
    //   <article className="mt-16">
    //     <h1 className="font-heading text-4xl sm:text-6xl">About Me</h1>
    //     <p className="ml-[2.5px] mt-4 sm:text-lg">
    //       Growing up sitting in front of a computer, I&apos;ve always had a
    //       strong interest in the web. I remember in high school, when I
    //       couldn&apos;t fall asleep but wasn&apos;t allowed to do anything else,
    //       I would sometimes visualize how an ecommerce website for my own
    //       fashion brand would look like. <br />
    //       <br /> After trying many other things, I finally decided and got the
    //       chance to study to become a web developer at{" "}
    //       <ArrowLink
    //         href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
    //         newTab
    //       >
    //         Nackademin
    //       </ArrowLink>{" "}
    //       in Sweden.
    //       <br />
    //       <br />
    //       It&apos;s been an interesting journey: Speaking Swedish with my
    //       classmates to complete assignments, attending tech events and becoming
    //       friends with like-minded people, and of course, spending countless
    //       hours in front of the screen trying to make something work. The moment
    //       I finally see the complete website I built on my own go live is
    //       incredible.
    //       <br /> <br />
    //       While pursuing my fullstack education, I discovered a strong passion
    //       for design and frontend. I designed and developed my{" "}
    //       <ArrowLink href="https://github.com/june7001/portfolio" newTab>
    //         portfolio
    //       </ArrowLink>{" "}
    //       from scratch, and I&apos;m committed to continuously integrating new
    //       knowledge I learn. In my project{" "}
    //       <ArrowLink href="https://commerce-three-rose-76.vercel.app/" newTab>
    //         blomsterhandel
    //       </ArrowLink>
    //       , I redesigned Vercel&apos;s e-commerce template (Next.js, Shopify). I
    //       changed the overall visuals, connected it to my Shopify store, and
    //       localized the site for Swedish users. I also implemented a dynamic
    //       navbar and improved the UX.
    //       <br />
    //       <br />
    //       To cultivate my interest in web design aesthetics, I frequently seek
    //       inspiration from platforms like The Headless Club and Awwwards, as
    //       well as a variety of websites and related Instagram accounts. With an
    //       eye for details, I often find myself analyzing user experience and
    //       visual design as I browse the internet. Whenever I get some free time,
    //       I plan to implement a blog section to this portfolio using Sanity as
    //       the CMS, where I&apos;ll share my observations and insights. Eager to
    //       quickly prototype my ideas and demonstrate potential improvements,
    //       I&apos;ve also picked up the basics of Figma and soon I&apos;ll take a
    //       specialized course focused on ecommerce design to learn more advanced
    //       techniques.
    //       <br />
    //       <br />
    //       Please <ArrowLink href="/contact">contact me</ArrowLink> if you have
    //       any project I could help with or any excting opportunites! :)
    //       <br /> <br />
    //     </p>
    //   </article>
    // </div>
  );
}
