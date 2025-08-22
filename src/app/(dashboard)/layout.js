import NextAuthProvider from "@/providers/NextAuthProvider";
import Link from "next/link";


export default function DashboardLayout({ children }) {
  return (
    <>
      <NextAuthProvider>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-[450px] bg-gray-900 text-white p-6 lg:p-8">
            <Link href={'/'} className="mb-6"><h2 className="text-2xl font-bold ">Shop Me</h2></Link>
            <ul className="space-y-3 mt-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard/add-product">Add Product</Link></li>
            </ul>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </NextAuthProvider>
    </>
  );
}
