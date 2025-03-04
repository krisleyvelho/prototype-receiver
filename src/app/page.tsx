import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/admin/login">Login</Link>
      <Link href="/admin/login">Register</Link>
    
    </div>
  );
}
