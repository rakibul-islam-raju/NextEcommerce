import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { font } from "./fonts";
import Provider from "@/provider";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.className} container`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
