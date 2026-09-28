import Image from "next/image";

export default function CourseCard({
	title,
	image,
}: {
	title: string;
	image: string;
}) {
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
