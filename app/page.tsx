"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <div>
          Logged in as {session?.user?.email} <br />
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
