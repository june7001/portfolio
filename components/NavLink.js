import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
        <span className="relative z-10 mix-blend-exclusion"> {name}</span>
      </Link>
    </li>
  );
}
