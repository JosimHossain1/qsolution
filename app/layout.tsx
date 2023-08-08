import Navbar from "@/components/Navabar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q. Soluitons",
  description: "Q. Solution is a collection of all quetions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#02062c]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
