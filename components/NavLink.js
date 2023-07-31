import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, name }) {
  const pathname = usePathname();

  const active = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={
          "flex flex-row items-center font-medium px-3 py-1" +
          (active ? " bg-black text-white rounded-full" : "")
        }
      >
        {name}
      </Link>
    </li>
  );
}
