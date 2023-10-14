import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q. Soluitons",
  description: "Q. Solution is a smart education system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body className="bg-[#02062c] text-white">{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
