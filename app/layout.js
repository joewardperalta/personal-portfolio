import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Joeward Peralta - Full Stack Developer",
  description: "Joeward Peralta is a full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
