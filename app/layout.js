import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Paragraph } from "@/components/Typography";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

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

        <footer className="footer">
          <Section>
            <Wrapper className="!py-2 mt-[60px] border-t border-tertiary-dark flex-row justify-between text-sm">
              <Paragraph>
                Designed by <span className="text-white">Joeward</span>
              </Paragraph>
              <ul className="text-white flex gap-4">
                <li>
                  <Link className="tertiary-btn" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="tertiary-btn" href="/terms-and-conditions">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
              <Paragraph>&copy; 2025 All rights reserved.</Paragraph>
            </Wrapper>
          </Section>
        </footer>
      </body>
    </html>
  );
}
