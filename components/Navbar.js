import Link from "next/link";
import { NavLink } from "./NavLink";
import { Flower } from "./Flower";

export function Navbar() {
  return (
    <nav className="flex relative justify-between bg-indigo-200 px-12 pt-6 pb-4">
      <Link href="/">
        <Flower className=" animate-rotate " />
      </Link>
      <ul className="flex flex-wrap flex-row space-x-2 justify-center">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/contact" name="Contact" />
      </ul>
    </nav>
  );
}
