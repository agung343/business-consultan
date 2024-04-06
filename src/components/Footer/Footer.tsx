import Image from "next/image"
import Link from "next/link"
import classes from "./Footer.module.css"

export default function Footer() {
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
      ];
    return (<>
    <footer className={classes.footer}>
        <div className={classes.logo}>
            <Image layout="" alt="footer logo" height={250} width={250} src='' />
        </div>
        <div className={classes.footerLinks}>
            <ul>
                {MENU.map(link => (<li key={link.title}>
                    <Link href={link.path}>{link.title}</Link>
                </li>))}
            </ul>
        </div>
        <div className={classes.footerInformation}>
            <h3>Studio 191</h3>
            <p>Jalan Panglima Sudirman 191, Madiun</p>
            <p>📞 085257130599</p>
        </div>
    </footer>
    </>)
}