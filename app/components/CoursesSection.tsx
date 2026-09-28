import Image from "next/image";

const categories = [
	"Featured",
	"Music",
	"Drawing & Painting",
	"Marketing",
	"Animation",
	"Social Media",
	"UI/UX Design",
	"Creative Marketing",
	"Digital Illustration",
	"Film & Video",
	"Crafts",
	"Freelance & Entrepreneurship",
	"Graphic Design",
	"Photography",
	"Productivity",
	"Web Development",
	"Data Science",
	"Cooking",
];

const courses = [
	{ title: "Learn Figma from Basic", image: "/images/course-figma.png" },
	{ title: "Build Digital Asset", image: "/images/course-digital-asset.png" },
	{ title: "the Power of Big Data", image: "/images/course-big-data.png" },
	{
		title: "Balancing Productivity and Life",
		image: "/images/course-productivity.png",
	},
	{ title: "Mastering Money Management", image: "/images/course-money.png" },
	{
		title: "From Idea to Startup Success",
		image: "/images/course-startup.png",
	},
];

function CourseCard({ title, image }: { title: string; image: string }) {
	return (
		<div className="rounded-2xl border border-neutral-100 bg-white p-3">
			<Image
				src={image}
				alt={title}
				width={341}
				height={196}
				className="w-full rounded-xl"
			/>

			<div className="mt-4 flex items-center justify-between gap-2">
				<h3 className="font-heading font-semibold text-neutral-950">{title}</h3>
				<span className="flex items-center gap-1 text-sm text-neutral-950">
					4.5 <span className="text-secondary-600">&#9733;</span>
				</span>
			</div>

			<p className="mt-1 text-sm text-neutral-500">
				by <span className="text-primary-700">purepearl studio</span>
			</p>

			<div className="mt-3 flex items-center gap-3">
				<span className="rounded-full bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
					Beginner
				</span>
				<div className="flex -space-x-2">
					<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-300" />
					<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-400" />
					<span className="h-6 w-6 rounded-full border-2 border-white bg-neutral-500" />
				</div>
				<span className="rounded-full bg-secondary-400 px-2 py-0.5 text-xs font-semibold text-neutral-950">
					26+
				</span>
			</div>

			<p className="mt-3 text-lg font-bold text-primary-700">
				$25
				<span className="text-sm font-normal text-neutral-500">/lifetime</span>
			</p>
		</div>
	);
}

export default function CoursesSection() {
	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-300 px-6">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="font-heading text-3xl font-bold text-neutral-950 sm:text-4xl">
						Discover Your Passion, Build Your Skills
					</h2>
					<p className="mt-4 text-neutral-500">
						At Bytespace Courses, we bring you closer to life-changing
						knowledge. Explore a variety of courses across different fields,
						from technology to the arts, and make a difference in your career
						and life.
					</p>
				</div>

				<div className="mt-8 flex flex-wrap justify-center gap-2">
					{categories.map((category, index) => (
						<span
							key={category}
							className={
								index === 0
									? "rounded-full bg-secondary-400 px-4 py-2 text-sm font-medium text-neutral-950"
									: "rounded-full bg-neutral-50 px-4 py-2 text-sm text-neutral-600"
							}
						>
							{category}
						</span>
					))}
					<span className="rounded-full px-4 py-2 text-sm text-primary-700">
						+ More
					</span>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{courses.map((course) => (
						<CourseCard
							key={course.title}
							title={course.title}
							image={course.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
