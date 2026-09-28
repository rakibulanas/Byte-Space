import Image from "next/image";

export default function Hero() {
	return (
		<section className="hero-grid-bg relative overflow-hidden bg-primary-700 pt-10 sm:pt-14">
			<Image
				src="/images/shape-squiggle-lime.png"
				alt=""
				width={267}
				height={387}
				className="absolute -left-16 top-24 hidden w-56 md:block"
			/>
			<Image
				src="/images/shape-squiggle-white-sm.png"
				alt=""
				width={177}
				height={176}
				className="absolute left-32 top-72 hidden w-40 md:block"
			/>
			<Image
				src="/images/shape-ring.png"
				alt=""
				width={346}
				height={343}
				className="absolute -left-10 bottom-10 hidden w-72 md:block"
			/>
			<Image
				src="/images/shape-box.png"
				alt=""
				width={213}
				height={372}
				className="absolute -right-8 top-16 hidden w-44 md:block"
			/>
			<Image
				src="/images/shape-triangle.png"
				alt=""
				width={190}
				height={189}
				className="absolute right-24 top-72 hidden w-40 md:block"
			/>
			<Image
				src="/images/shape-squiggle-white-lg.png"
				alt=""
				width={317}
				height={332}
				className="absolute -right-12 bottom-10 hidden w-64 md:block"
			/>

			<div className="relative mx-auto max-w-[800px] px-6 text-center">
				<h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
					Get Access to Hundreds Courses Available
				</h1>
				<p className="mx-auto mt-6 max-w-lg text-primary-100">
					Unlock your creativity, gain valuable knowledge, and grow your
					business with our wide range of courses.
				</p>

				<form className="mx-auto mt-8 flex max-w-lg items-center rounded-full bg-white p-1.5 pl-5">
					<input
						type="text"
						placeholder="Course, topic, creator"
						className="flex-1 bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
					/>
					<button
						type="submit"
						className="rounded-full bg-secondary-400 px-6 py-3 text-sm font-semibold text-neutral-950"
					>
						Search
					</button>
				</form>
			</div>

			<div className="relative mx-auto mt-8 aspect-9/5 w-full max-w-200 overflow-hidden px-6">
				<div className="absolute top-0 left-1/2 aspect-square w-[96%] -translate-x-1/2 rounded-full bg-secondary-400" />

				<Image
					src="/images/hero-student.png"
					alt="Student learning on ByteSpace"
					width={722}
					height={515}
					className="absolute bottom-0 left-1/2 w-[55%] -translate-x-1/2"
				/>

				<div className="absolute top-[10%] left-[8%] w-[36%] rounded-2xl bg-white p-3 shadow-lg sm:p-4">
					<p className="text-xs font-semibold text-neutral-950 sm:text-sm">
						UI/UX Design
					</p>
					<p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
						200 Courses &middot; 1000+ Students
					</p>
				</div>

				<div className="absolute top-[12%] right-[6%] w-[30%] rounded-2xl bg-white p-3 shadow-lg sm:p-4">
					<p className="text-[10px] text-neutral-500 sm:text-xs">
						Learning Progress
					</p>
					<p className="mt-1 text-xl font-bold text-neutral-950 sm:text-2xl">
						55%
					</p>
					<div className="mt-2 h-1.5 w-full rounded-full bg-neutral-100">
						<div className="h-1.5 w-[55%] rounded-full bg-secondary-400" />
					</div>
				</div>

				<div className="absolute bottom-[10%] left-[4%] w-[36%] rounded-2xl bg-white p-3 shadow-lg sm:p-4">
					<p className="text-xs font-semibold text-neutral-950 sm:text-sm">
						Happy Students
					</p>
					<p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
						4.5 (240) &#9733;
					</p>
					<div className="mt-2 flex items-center">
						<div className="flex -space-x-2">
							<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-200" />
							<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-300" />
							<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-400" />
						</div>
						<span className="ml-2 rounded-full bg-secondary-400 px-2 py-0.5 text-[10px] font-semibold text-neutral-950">
							2K+
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
