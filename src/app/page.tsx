import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import classes from "./page.module.css";

import Cards from "@/components/CardPlan/CardItem";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <section id="landing" className={classes.landing}>
        <div className={classes.landingText}>
          <h1>Promote Your Business to Next Level</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque a augue id nunc efficitur elementum eu sit amet nisl.
            Phasellus vel venenatis quam, id iaculis
          </p>
          <div className={classes.cta}>
            <Button size={"lg"} variant={"default"} className={classes.btn}>
              <Link href="/service">Get Started</Link>
            </Button>
            <Button size={"lg"} variant={"link"} className={classes.btn}>
              <Link href="/contact">Contact Marketing</Link>
            </Button>
          </div>
        </div>
        <div className={classes.landingImage}>
          <Image
            layout="responsive"
            src=""
            height={500}
            width={500}
            alt="Landing Page Image"
          />
        </div>
      </section>
      <section id="services">
        <div className={classes.serviceHeading}>
          <h2>Choose your plan</h2>
        </div>
        <div className="flex gap-10 justify-evenly">
          <Cards
            title="Basic"
            description="Perfect Plan for Small and Startup Business"
            price={24.99}
          >
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </Cards>
          <Cards title="Advanced" description="Ideal for Business running for years" price={49.99} best>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </Cards>
          <Cards title="VIP" description="Best of the Best Service for Greater Business" price={49.99}>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </Cards>
        </div>
      </section>
      <section id="newsletter" className={classes.newsletter}>
        <h2>Subscribe our newsletter to get more news from us</h2>
        <Newsletter />
      </section>
    </>
  );
}
