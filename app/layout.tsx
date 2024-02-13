import type { Metadata } from "next";
import { Inter, Koulen } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabien Etheve",
  description:
    "Passionate junior front-end developer creating engaging websites with HTML, CSS, and JavaScript. Explore my journey in web development.",
    keywords: "front-end developer, web development, HTML, CSS, JavaScript, 3D graphics, Three.js, Next.js, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
