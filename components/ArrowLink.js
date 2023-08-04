import Link from "next/link";

export function ArrowLink({ href, newTab = false, children }) {
  return (
    <Link
      href={href}
      passHref
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
      className="hover-underline font-semibold "
    >
      {children}
      <svg
        className={`inline ${newTab ? "-rotate-45" : ""}`}
        viewBox="0 0 24 24"
        height="27"
        width={27}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Link>
  );
}
