"use client";

import UserProfile from "@/components/User/UserProfile";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  session && console.log(session);
  return (
    <div>
      {session && (
        <div>
          <UserProfile {...session?.user} idx={"23"} />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}

      {!session && (
        <div>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </div>
  );
}
