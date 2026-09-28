import Image from "next/image";

const stats = [
	{ value: "12K", label: "Students" },
	{ value: "70+", label: "Courses" },
	{ value: "16", label: "Creators" },
];

const features = [
	"Share Your Expertise",
	"Monetize Your Passion",
	"Flexibility and Autonomy",
	"Build a Community",
];

export default function GrowthSection() {
	return (
		<section className="relative overflow-hidden bg-neutral-50 py-24">
			<div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-secondary-200 opacity-60 blur-3xl" />
			<div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-primary-200 opacity-50 blur-3xl" />
			<div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-primary-200 opacity-50 blur-3xl" />
			<div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-secondary-200 opacity-60 blur-3xl" />

			<div className="relative mx-auto flex max-w-300 flex-col gap-24 px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<h2 className="font-heading text-3xl font-bold text-neutral-950 sm:text-5xl">
							Your Path to Professional Growth Starts Here!
						</h2>
						<p className="mt-8 max-w-md leading-relaxed text-neutral-600">
							Explore our curated selection of courses tailored to enhance your
							capabilities and accelerate your career journey. Whether you are
							looking to sharpen specific skills, gain industry expertise, or
							embark on a new career path entirely, we have the resources you
							need.
						</p>
						<div className="mt-10 flex gap-14">
							{stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-heading text-3xl font-medium text-primary-700">
										{stat.value}
									</p>
									<p className="mt-1 text-neutral-600">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					<Image
						src="/images/growth-student.png"
						alt="Student learning on ByteSpace"
						width={703}
						height={697}
						className="mx-auto w-full max-w-lg"
					/>
				</div>

				<div className="grid items-center gap-12 lg:grid-cols-2">
					<Image
						src="/images/growth-creator.png"
						alt="Creator managing courses on ByteSpace"
						width={587}
						height={719}
						className="mx-auto w-full max-w-md"
					/>

					<div>
						<h2 className="font-heading text-3xl font-bold text-neutral-950 sm:text-5xl">
							Create &amp; Manage Courses Easily.
						</h2>
						<p className="mt-8 max-w-md leading-relaxed text-neutral-600">
							<span className="font-semibold text-neutral-950">ByteSpace</span>{" "}
							supports individuals or entities in the creation, publication, and
							administration of educational courses.
						</p>
						<ul className="mt-8 flex flex-col gap-4">
							{features.map((feature) => (
								<li
									key={feature}
									className="flex items-center gap-3 text-neutral-950"
								>
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-700">
										<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
											<path
												d="M2 5l2 2 4-4"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
