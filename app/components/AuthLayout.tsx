import Image from "next/image";
import CourseCard from "./CourseCard";

export default function AuthLayout({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}) {
	return (
		<div className="hero-grid-bg min-h-screen bg-primary-700">
			<div className="mx-auto flex min-h-screen max-w-300 flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:gap-16">
				<div className="lg:flex-1">
					<Image
						src="/images/logo-mark.png"
						alt="ByteSpace"
						width={29}
						height={32}
						className="h-11 w-auto"
					/>

					<h1 className="mt-10 font-heading text-3xl font-bold text-white sm:text-4xl">
						{title}
					</h1>
					<p className="mt-3 max-w-md text-primary-100">{subtitle}</p>

					<div className="relative mt-20 hidden h-120 max-w-md lg:block">
						<Image
							src="/images/shape-squiggle-white-sm.png"
							alt=""
							width={177}
							height={176}
							className="absolute top-1/2 right-4 z-0 w-16"
						/>
						<div
							className="absolute bottom-0 left-0 z-0 aspect-square w-28 bg-secondary-400"
							style={{
								maskImage: "url(/images/shape-triangle.png)",
								maskSize: "contain",
								maskRepeat: "no-repeat",
								WebkitMaskImage: "url(/images/shape-triangle.png)",
								WebkitMaskSize: "contain",
								WebkitMaskRepeat: "no-repeat",
							}}
						/>
						<Image
							src="/images/shape-ring.png"
							alt=""
							width={346}
							height={343}
							className="absolute top-0 left-12 z-0 w-20"
						/>

						<div className="absolute top-24 left-0 z-10 w-72 opacity-90">
							<CourseCard
								title="Build Digital Asset"
								image="/images/course-digital-asset.png"
							/>
						</div>
						<div className="absolute top-0 left-28 z-20 w-72">
							<CourseCard
								title="the Power of Big Data"
								image="/images/course-big-data.png"
							/>
						</div>

						<Image
							src="/images/card-happy-students.png"
							alt="Happy Students"
							width={258}
							height={123}
							className="absolute top-64 right-0 z-30 w-56"
						/>
					</div>
				</div>

				<div className="w-full rounded-3xl bg-white p-8 sm:p-16 lg:max-w-xl">
					{children}
				</div>
			</div>
		</div>
	);
}
