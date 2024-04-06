"use client";
import { usePathname } from "next/navigation";
import classes from "./Menubar.module.css";
import Image from "next/image";
import Link from "next/link";
import LoginMenu from "./LoginMenu";

export default function Menubar() {
  const MENU = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Service",
      path : "/service"
    }
  ];
  const pathName = usePathname();
  return (
    <>
      <header className="flex items-center justify-between p-4 h-[10%]">
        <div className={classes.headerLogo}>
          <Link href="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div className={classes.menuLinks}>
          <ul>
            {MENU.map((link) => (
              <li key={link.title}>
                <Link
                  className={`${classes.link} ${
                    pathName === link.path && classes.active
                  }`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <LoginMenu />
      </header>
    </>
  );
}
