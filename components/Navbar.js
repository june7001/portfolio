import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flower } from "./Flower";

export function Navbar() {
  return (
    <nav className="relative flex flex-row items-center justify-between bg-indigo-200 py-6 sm:px-12">
      <Link href="/">
        <Flower className="h-10 w-10 animate-rotate sm:h-16 sm:w-16" />
      </Link>

      <ul className="hidden grow flex-row flex-wrap justify-center space-x-0 sm:flex sm:grow-0 sm:space-x-2">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/contact" name="Contact" />
      </ul>
      <HamburgerMenu className="z-50" />
    </nav>
  );
}

export function NavLink({ href, name }) {
  const pathname = usePathname();

  const active = pathname === href;
  return (
    <li>
      <Link
        href={href}
        key={href}
        className="relative rounded-full px-3 py-2 font-medium text-white outline-sky-400 transition focus-visible:outline-2"
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {active && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 bg-black "
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 mix-blend-exclusion">{name}</span>
      </Link>
    </li>
  );
}

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const topBar = {
    open: { rotate: 45, translateY: 5, backgroundColor: "white" },
    closed: { rotate: 0, translateY: 0, backgroundColor: "black" },
  };

  const bottomBar = {
    open: { rotate: -45, translateY: -5, backgroundColor: "white" },
    closed: { rotate: 0, translateY: 0, backgroundColor: "black" },
  };

  const navTransition = {
    hidden: { x: "100%" },
    show: {
      x: "0%",
      transition: {
        type: "spring",
        bounce: 0.25,
        duration: 0.5,
      },
    },
    exit: {
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    // Added z-index to the button's parent div
    <div className="relative z-30 sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-indigo-200"
      >
        <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
          <motion.div variants={topBar} className="mb-2 h-1 w-8" />
          <motion.div variants={bottomBar} className="h-1 w-8" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          // Changed the z-index to 20, it is within the same parent div as the button.
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={navTransition}
            className="fixed right-0 top-0 z-20 flex h-screen w-64 flex-col items-start justify-center overflow-y-scroll bg-black p-4 text-white"
          >
            <ul className="space-y-4">
              <NavLink href="/" name="Home" />
              <NavLink href="/about" name="About" />
              <NavLink href="/projects" name="Projects" />
              <NavLink href="/contact" name="Contact" />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
