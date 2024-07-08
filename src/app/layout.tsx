import { ThemeProvider } from "@/components/ui/theme-provider";

import "./globals.css";

import { Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Kürşat Polatcı",
	authors: {
		name: "Kürşat Polatcı",
	},

	description:
		"Based in Istanbul, I'm a Fullstack Developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Kürşat Polatcı",
		description:
			"Based in Istanbul, I'm a Fullstack Developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000",
		siteName: "Kürşat Polatcı",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
