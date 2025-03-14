import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/admin/auth/login">Login</Link>
      <Link href="/admin/auth/register">Register</Link>
    
    </div>
  );
}
