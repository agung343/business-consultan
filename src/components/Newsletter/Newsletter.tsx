"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import classes from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={classes.input}>
      <Input
        type={"text"}
        placeholder="Subscribe for newsletter"
        className={classes.newsletter}
      />
      <Button type="submit" size={"lg"} className={classes.btn}>
        Subscribe
      </Button>
    </div>
  );
}
