import Link from "next/link";

function buildHref(page: number, category: string, search: string) {
	const params = new URLSearchParams();
	if (category && category !== "Featured") params.set("category", category);
	if (search) params.set("q", search);
	params.set("page", String(page));
	return `/courses?${params.toString()}`;
}

export default function Pagination({
	currentPage,
	totalPages,
	category,
	search,
}: {
	currentPage: number;
	totalPages: number;
	category: string;
	search: string;
}) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="mt-12 flex items-center justify-center gap-2">
			<Link
				href={buildHref(Math.max(1, currentPage - 1), category, search)}
				aria-label="Previous page"
				className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600"
			>
				&#8249;
			</Link>

			{pages.map((page) => (
				<Link
					key={page}
					href={buildHref(page, category, search)}
					className={
						page === currentPage
							? "flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white"
							: "flex h-9 w-9 items-center justify-center rounded-full text-sm text-neutral-600"
					}
				>
					{page}
				</Link>
			))}

			<Link
				href={buildHref(
					Math.min(totalPages, currentPage + 1),
					category,
					search,
				)}
				aria-label="Next page"
				className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600"
			>
				&#8250;
			</Link>
		</div>
	);
}
