"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/posts" },
  { name: "Create", href: "/posts/create" },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex space-x-2">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "flex h-[48px] uppercase font-bold grow items-center justify-center gap-2 rounded-md bg-gray-50 px-4 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname == link.href }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
