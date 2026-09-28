export default function CourseHero({ search = "" }: { search?: string }) {
	return (
		<section className="hero-grid-bg bg-primary-700 py-16">
			<div className="mx-auto max-w-xl px-6 text-center">
				<h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
					Find Your Next Course
				</h1>

				<form
					action="/courses"
					method="get"
					className="mx-auto mt-8 flex max-w-lg items-center gap-3 rounded-full bg-white p-1.5 pl-5"
				>
					<input
						type="text"
						name="q"
						defaultValue={search}
						placeholder="Search"
						className="flex-1 bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
					/>
					<button
						type="submit"
						className="flex items-center gap-1 rounded-full bg-secondary-400 px-5 py-3 text-sm font-semibold text-neutral-950"
					>
						Courses
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path
								d="M2 4l4 4 4-4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}
