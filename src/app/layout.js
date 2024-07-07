import { Open_Sans } from "next/font/google";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Release Notes",
  description: "Release Notes Hirefy app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
          
      </head>
      
      
      <body className={sans.className}>{children}</body>
    </html>
  );
}
