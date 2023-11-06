import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
}

export default Navbar;
