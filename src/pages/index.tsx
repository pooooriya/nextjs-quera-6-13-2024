// import Link from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push(`/product/${2655584}`);
        }}
      >
        Go To Product Page
      </button>
      <Link href={`/product/${95985958954}`}>Product</Link>
    </div>
  );
}
