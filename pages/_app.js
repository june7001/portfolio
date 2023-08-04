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
    <div className={`bg-indigo-200  ${inter.variable} ${averia.variable}`}>
      <div className="flex flex-col flex-grow items-center mx-4 sm:mx-8 md:mx-12">
        <div className="w-full xl:w-3/4 max-w-6xl">
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
