"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="hero-grid-bg relative w-full bg-primary-700">
			<div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="ByteSpace"
						width={171}
						height={37}
						preload
					/>
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					<Link href="/" className="text-sm font-medium text-white">
						Home
					</Link>
					<Link
						href="/courses"
						className="text-sm font-medium text-primary-100"
					>
						Courses
					</Link>
					<Link
						href="/creators"
						className="text-sm font-medium text-primary-100"
					>
						Creators
					</Link>
				</nav>

				<div className="hidden items-center gap-6 md:flex">
					<Link href="/sign-in" className="text-sm font-medium text-white">
						Sign In
					</Link>
					<Link href="/join" className="text-sm font-medium text-white">
						Join Us
					</Link>
					<Link
						href="/cart"
						className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white"
						aria-label="Cart"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path
								d="M6 6h15l-1.5 9h-13z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinejoin="round"
							/>
							<path d="M6 6L4.5 3H2" stroke="currentColor" strokeWidth="1.5" />
							<circle cx="9" cy="19" r="1.3" fill="currentColor" />
							<circle cx="17" cy="19" r="1.3" fill="currentColor" />
						</svg>
					</Link>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className="flex flex-col gap-1.5 md:hidden"
					aria-label="Menu"
				>
					<span className="h-0.5 w-6 bg-white"></span>
					<span className="h-0.5 w-6 bg-white"></span>
					<span className="h-0.5 w-6 bg-white"></span>
				</button>
			</div>

			{open && (
				<div className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden">
					<Link href="/" className="text-sm font-medium text-white">
						Home
					</Link>
					<Link
						href="/courses"
						className="text-sm font-medium text-primary-100"
					>
						Courses
					</Link>
					<Link
						href="/creators"
						className="text-sm font-medium text-primary-100"
					>
						Creators
					</Link>
					<Link href="/sign-in" className="text-sm font-medium text-white">
						Sign In
					</Link>
					<Link href="/join" className="text-sm font-medium text-white">
						Join Us
					</Link>
				</div>
			)}
		</header>
	);
}
