import Navbar from "../components/Navbar";
import CourseHero from "../components/CourseHero";
import FilterBar from "../components/FilterBar";
import CategoryPills from "../components/CategoryPills";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { courses } from "../components/courses-data";

const PAGE_SIZE = 3;

export default async function CoursesPage({
	searchParams,
}: PageProps<"/courses">) {
	const params = await searchParams;
	const category =
		typeof params.category === "string" ? params.category : "Featured";
	const search = typeof params.q === "string" ? params.q : "";

	let filteredCourses = courses;
	if (category !== "Featured") {
		filteredCourses = filteredCourses.filter(
			(course) => course.category === category,
		);
	}
	if (search) {
		filteredCourses = filteredCourses.filter((course) =>
			course.title.toLowerCase().includes(search.toLowerCase()),
		);
	}

	const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
	const requestedPage =
		typeof params.page === "string" ? Number(params.page) : 1;
	const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
	const pageCourses = filteredCourses.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE,
	);

	return (
		<div>
			<Navbar />
			<CourseHero search={search} />
			<FilterBar />

			<section className="pb-20">
				<div className="mx-auto max-w-300 px-6">
					<CategoryPills active={category} />

					{pageCourses.length === 0 ? (
						<p className="mt-12 text-center text-neutral-500">
							No courses found.
						</p>
					) : (
						<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{pageCourses.map((course) => (
								<CourseCard
									key={course.title}
									title={course.title}
									image={course.image}
								/>
							))}
						</div>
					)}

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						category={category}
						search={search}
					/>
				</div>
			</section>

			<Footer />
		</div>
	);
}
