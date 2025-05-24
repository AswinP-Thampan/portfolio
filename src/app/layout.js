import { Jersey_10, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const geistSans = Jersey_10({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: '400',
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aswin P",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-white">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.3}
            duration={1}
            repeatDelay={0.5}
            className={cn(
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-5",
            )}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
