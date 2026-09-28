import Image from "next/image";
import Link from "next/link";

export default function CreatorCta() {
	return (
		<section className="hero-grid-bg relative overflow-hidden bg-primary-700 py-24">
			<Image
				src="/images/shape-squiggle-lime.png"
				alt=""
				width={267}
				height={387}
				className="absolute -top-10 -left-10 hidden w-40 md:block"
			/>
			<Image
				src="/images/shape-squiggle-white-sm.png"
				alt=""
				width={177}
				height={176}
				className="absolute top-4 left-40 hidden w-32 md:block"
			/>
			<div
				className="absolute top-0 right-40 hidden aspect-square w-40 bg-secondary-400 md:block"
				style={{
					maskImage: "url(/images/shape-triangle.png)",
					maskSize: "contain",
					maskRepeat: "no-repeat",
					WebkitMaskImage: "url(/images/shape-triangle.png)",
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
				}}
			/>
			<div
				className="absolute -top-6 -right-10 hidden aspect-213/372 w-40 bg-white md:block"
				style={{
					maskImage: "url(/images/shape-box.png)",
					maskSize: "contain",
					maskRepeat: "no-repeat",
					WebkitMaskImage: "url(/images/shape-box.png)",
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
				}}
			/>
			<Image
				src="/images/shape-triangle.png"
				alt=""
				width={190}
				height={189}
				className="absolute -bottom-6 -left-10 hidden w-40 md:block"
			/>
			<Image
				src="/images/shape-ring.png"
				alt=""
				width={346}
				height={343}
				className="absolute -bottom-14 left-24 hidden w-56 md:block"
			/>
			<Image
				src="/images/shape-squiggle-lime.png"
				alt=""
				width={267}
				height={387}
				className="absolute -right-8 -bottom-6 hidden w-40 md:block"
			/>

			<div className="relative mx-auto max-w-2xl px-6 text-center">
				<h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
					Unlock Your Potential as a Creator with ByteSpace
				</h2>
				<p className="mt-6 text-primary-100">
					Experience the collaboration of numerous creators and an expanding
					selection of courses. Register now and become a part of a community
					comprising over 10,000 local and international creators. Utilize our
					Course Editor, and showcase your expertise by publishing your finest
					course on the ByteSpace Course Library.
				</p>
				<Link
					href="/join-creator"
					className="mt-8 inline-block rounded-full bg-secondary-400 px-8 py-3 text-sm font-semibold text-neutral-950"
				>
					Join as Creator
				</Link>
			</div>
		</section>
	);
}
