import Image from "next/image";
import Link from "next/link";

const linkColumns = [
	["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
	["Development", "Marketing", "Photography", "Finance", "Sport"],
	["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
	return (
		<footer className="border-t border-neutral-100 bg-white">
			<div className="mx-auto max-w-300 px-6 py-16">
				<div className="flex flex-wrap justify-between gap-12">
					<div className="max-w-md">
						<div className="flex items-center gap-2">
							<Image
								src="/images/logo-mark.png"
								alt=""
								width={29}
								height={32}
								className="h-8 w-auto"
							/>
							<span className="font-heading text-xl font-bold text-neutral-950">
								ByteSpace
							</span>
						</div>
						<p className="mt-4 text-sm text-neutral-600">
							Stay Up to date with our latest features and releases by joining
							our newsletter.
						</p>
						<form className="mt-4 flex max-w-sm items-center gap-3">
							<input
								type="email"
								placeholder="Enter your email"
								className="min-w-0 flex-1 rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
							/>
							<button
								type="submit"
								className="rounded-full bg-secondary-400 px-6 py-3 text-sm font-semibold text-neutral-950"
							>
								Search
							</button>
						</form>
						<p className="mt-4 text-xs text-neutral-500">
							By subscribing, you agree to our Privacy Policy and consent to
							receive updates from our company.
						</p>
					</div>

					<div className="flex flex-wrap gap-16">
						{linkColumns.map((column, index) => (
							<ul key={index} className="flex flex-col gap-3">
								{column.map((label) => (
									<li key={label}>
										<Link href="/" className="text-sm text-neutral-600">
											{label}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>

				<div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-6 text-sm text-neutral-500">
					<p>@ 2023 ByteSpace. All rights reserved.</p>
					<div className="flex gap-6">
						<Link href="/privacy-policy">Privacy Policy</Link>
						<Link href="/terms-of-service">Terms of Service</Link>
						<Link href="/cookies-settings">Cookies Settings</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
