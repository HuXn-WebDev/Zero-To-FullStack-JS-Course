"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (page) => {
    router.push(`/${page}`);
  };

  return (
    <main>
      <h1>Routing | Navigation</h1>
      <Link href="/login">Login</Link> <br />
      <Link href="/about">About</Link>
      <button onClick={() => router.push("/colors")}>Go To Colors</button>
      {/* Alternative (create seperate function) */}
      <button onClick={() => navigate("login")}>Go To Login Page</button>
    </main>
  );
}
