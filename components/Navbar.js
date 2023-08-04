import Link from "next/link";
import { NavLink } from "./NavLink";
import { Flower } from "./Flower";

export function Navbar() {
  return (
    <nav className="relative flex justify-between  bg-indigo-200 px-12 pb-4 pt-6">
      <Link href="/">
        <Flower className=" hidden animate-rotate sm:block" />
      </Link>
      <ul className="flex flex-row flex-wrap justify-center space-x-2">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/contact" name="Contact" />
      </ul>
    </nav>
  );
}
