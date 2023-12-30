"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      {status === "authenticated" ? (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </div>
  );
}

export default Navbar;
