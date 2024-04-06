import classes from "./CardItem.module.css";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

interface CardProps {
    title: string;
    description: string
    price: number
    children: React.ReactNode
    best?: boolean
}

export default function Cards({title, description, price, children, best}: CardProps) {
    return (
        <Card className={`${classes.card} ${best && classes.bestCard}`}>
            <CardHeader className={classes.cardHeader}>
                <CardTitle className={classes.title}>{title}</CardTitle>
                <CardDescription className={classes.description}>{description}</CardDescription>
                <CardDescription className={classes.price}>$ {price}/<span className={classes.monthly}>month</span></CardDescription>
            </CardHeader>
            <CardContent className={classes.cardContent}>
               {children}
            </CardContent>
            <CardFooter className={classes.cardFooter}>
                <Button size={'lg'} className="bg-cyan-500 cursor-pointer hover:bg-green-500">
                    Purchase
                </Button>
            </CardFooter>
        </Card>
    )
}