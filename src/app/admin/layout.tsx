export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-full h-full  bg-black">
      {children}
    </div>
  );
}