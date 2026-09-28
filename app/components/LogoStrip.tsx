import Image from "next/image";

const logos = [
	{ src: "/images/logo-1.png", width: 167, height: 41 },
	{ src: "/images/logo-2.png", width: 168, height: 41 },
	{ src: "/images/logo-3.png", width: 170, height: 41 },
	{ src: "/images/logo-4.png", width: 170, height: 41 },
	{ src: "/images/logo-5.png", width: 169, height: 42 },
];

export default function LogoStrip() {
	return (
		<section className="bg-neutral-50 py-16">
			<div className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-10 px-6 sm:justify-between">
				{logos.map((logo) => (
					<Image
						key={logo.src}
						src={logo.src}
						alt="Logoipsum"
						width={logo.width}
						height={logo.height}
					/>
				))}
			</div>
		</section>
	);
}
