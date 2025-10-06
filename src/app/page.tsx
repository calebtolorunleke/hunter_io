import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>;<Link href="/products">product</Link>
      <Link href="/blog">blog</Link>
    </>
  );
}
