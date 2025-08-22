
import NextAuthProvider from "@/providers/NextAuthProvider";
import Navbar from "../generalComponents/Navbar";
import Footer from "../generalComponents/Footer";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";


export default function SiteLayout({ children }) {
/*     const { data: session, status } = useSession()
  const router = useRouter()
    if (status === "loading") return <p>Loading...</p>
  if (!session) {
    router.push("/login")
    return null
  } */
  return (
    <>
      <NextAuthProvider>
        <Navbar />
        {children}
        <Footer />
      </NextAuthProvider>
    </>
  );
}
