
import NextAuthProvider from "@/providers/NextAuthProvider";
import Navbar from "../generalComponents/Navbar";
import Footer from "../generalComponents/Footer";


export default function SiteLayout({ children }) {
  return (
/*         <Suspense fallback={<FullScreenLoader />}>
        </Suspense> */
    <>
      <NextAuthProvider>
          <Navbar />
        {children}
        <Footer />
      </NextAuthProvider>
    </>
  );
}
