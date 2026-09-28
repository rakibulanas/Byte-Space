import Link from "next/link";

const paths = [
	{
		label: "Design",
		icon: <path d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 7l3 3" />,
	},
	{
		label: "Development",
		icon: (
			<>
				<rect x="6" y="3" width="12" height="18" rx="2" />
				<path d="M10 10l-2 2 2 2M14 10l2 2-2 2" />
			</>
		),
	},
	{
		label: "IT & Software",
		icon: (
			<>
				<rect x="4" y="5" width="16" height="11" rx="1" />
				<path d="M2 19h20" />
			</>
		),
	},
	{
		label: "Business",
		icon: (
			<>
				<rect x="5" y="3" width="14" height="18" rx="1" />
				<path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
			</>
		),
	},
	{
		label: "Marketing",
		icon: <path d="M4 10v4h3l6 4V6L7 10H4zM17 9a4 4 0 010 6" />,
	},
	{
		label: "Photography",
		icon: (
			<>
				<rect x="3" y="6" width="18" height="14" rx="2" />
				<path d="M9 6l1-2h4l1 2" />
				<circle cx="12" cy="13" r="3" />
			</>
		),
	},
];

export default function LearningPaths() {
	return (
		<section className="bg-white pb-20">
			<div className="mx-auto max-w-300 px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-heading text-3xl font-bold text-neutral-950 sm:text-4xl">
						Explore Diverse Learning Paths at Bytespace
					</h2>
					<p className="mt-4 text-neutral-500">
						At Bytespace, we believe in empowering individuals through
						knowledge. Our diverse range of courses spans various fields,
						ensuring there&apos;s something for everyone. Unleash your potential
						and explore our carefully curated categories.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
					{paths.map((path) => (
						<Link
							key={path.label}
							href="/courses"
							className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-100 py-8"
						>
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-400">
								<svg
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-neutral-950"
								>
									{path.icon}
								</svg>
							</span>
							<span className="text-sm font-medium text-neutral-950">
								{path.label}
							</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
