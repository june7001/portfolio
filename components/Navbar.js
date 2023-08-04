import Link from "next/link";
import { NavLink } from "./NavLink";
import { Flower } from "./Flower";

export function Navbar() {
  return (
    <nav className="relative flex flex-row items-center justify-between  bg-indigo-200  py-4 sm:px-12">
      <Link href="/" className="hidden sm:block">
        <Flower className=" animate-rotate " />
      </Link>
      <ul className="flex grow flex-row flex-wrap justify-center space-x-2 sm:grow-0">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/contact" name="Contact" />
      </ul>
    </nav>
  );
}
