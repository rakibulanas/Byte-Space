import Link from "next/link";
import { categories } from "./courses-data";

export default function CategoryPills({
	active = "Featured",
}: {
	active?: string;
}) {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{categories.map((category) => (
				<Link
					key={category}
					href={`/courses?category=${encodeURIComponent(category)}`}
					className={
						category === active
							? "rounded-full bg-secondary-400 px-4 py-2 text-sm font-medium text-neutral-950"
							: "rounded-full bg-neutral-50 px-4 py-2 text-sm text-neutral-600"
					}
				>
					{category}
				</Link>
			))}
			<span className="rounded-full px-4 py-2 text-sm text-primary-700">
				+ More
			</span>
		</div>
	);
}
