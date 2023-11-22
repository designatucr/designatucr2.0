import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Design at UCR",
  description:
    "Empowering students interested in UI/UX design, web design, and design thinking at the University of California, Riverside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${worksans.className} flex justify-center items-center flex-col`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
