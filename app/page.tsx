"use client";

import UserProfile from "@/components/User/UserProfile";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const styles = {
    button: {
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      margin: "1rem",
      width: "300px",
      backgroundColor: "#333",
      color: "white",

      "&:hover": {
        backgroundColor: "red",
      },
    },
  };

  session && console.log(session);
  return (
    <div>
      {session && (
        <div>
          <UserProfile {...session?.user} idx={"23"} />
          <button style={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
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
