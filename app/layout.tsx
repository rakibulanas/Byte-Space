import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "ByteSpace",
	description: "Get access to hundreds of courses on ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${poppins.variable} h-full antialiased`}>
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
