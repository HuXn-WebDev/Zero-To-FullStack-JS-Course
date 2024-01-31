"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js Complete Course</h1>
      <Link href="/login">Go To Login Page</Link>
    </main>
  );
}
