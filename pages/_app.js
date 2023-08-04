import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Averia_Serif_Libre } from "next/font/google";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-averia",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`flex min-h-screen flex-col bg-indigo-200 ${inter.variable} ${averia.variable}`}
    >
      <div className="mx-4 flex grow flex-col items-center sm:mx-8 md:mx-12">
        <div className="w-full max-w-6xl xl:w-3/4">
          <Navbar />
          <main className="my-16">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
