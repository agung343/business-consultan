
import { Button } from "../ui/button";
import Link from "next/link";

export default function LoginMenu() {
  const isLoggedIn = false;
  return (
    <div className="flex gap-2 items-center justify-center">
      {!isLoggedIn ? (
        <>
          <Button className="py-2 px-6 rounded-md hover:bg-transparent" variant={'ghost'} size={"sm"}>
            <Link className="text-xl" href={"/auth/login"}>Login</Link>
          </Button>
          <Button className="py-2 px-6 rounded-md bg-green-400 hover:bg-green-600" variant={"secondary"} size={"sm"}>
            <Link className="text-xl" href={"/auth/register"}>Sign up</Link>
          </Button>
        </>
      ) : (
        <>
          <form
            // action={async () => {
            //   "use server";
            //   // TODO : signOut func
            // }}
          >
            <Button type="submit" size={"sm"}>
              Logout
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
