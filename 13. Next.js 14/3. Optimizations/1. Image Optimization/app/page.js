import Image from "next/image";
import vercelLogo from "../public/vercel.svg";

export default function Home() {
  console.log(vercelLogo);

  return (
    <main>
      <h1>Image optimization in Next.js</h1>
      <Image src={vercelLogo} alt="Vercel Logo" />

      <Image
        src="https://images.unsplash.com/photo-1698417749491-72bba47caf07?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature image"
        width={1800}
        height={1800}
      />
    </main>
  );
}
