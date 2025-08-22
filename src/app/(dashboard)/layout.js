import NextAuthProvider from "@/providers/NextAuthProvider";


export default function DashboardLayout({ children }) {
  return (
    <>
      <NextAuthProvider>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white p-6">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <ul className="space-y-3">
              <li><a href="/dashboard">Overview</a></li>
              <li><a href="/dashboard/settings">Settings</a></li>
              <li><a href="/dashboard/profile">Profile</a></li>
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
