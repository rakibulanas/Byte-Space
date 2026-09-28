import CategoryPills from "./CategoryPills";
import CourseCard from "./CourseCard";
import { courses } from "./courses-data";

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

				<div className="mt-8">
					<CategoryPills />
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
