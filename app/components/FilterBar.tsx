function PillButton({ label, icon }: { label: string; icon: React.ReactNode }) {
	return (
		<button className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
			{icon}
			{label}
		</button>
	);
}

export default function FilterBar() {
	return (
		<div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-4 px-6 py-8">
			<div className="flex flex-wrap gap-3">
				<PillButton
					label="Filter"
					icon={
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M2 4h12M4 8h8M6 12h4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					}
				/>
				<PillButton
					label="Level"
					icon={
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M3 13V8M8 13V3M13 13V10"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					}
				/>
				<PillButton
					label="Category"
					icon={
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<circle
								cx="6"
								cy="6"
								r="2.5"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<circle
								cx="10"
								cy="10"
								r="2.5"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
						</svg>
					}
				/>
			</div>

			<PillButton
				label="Most relevant"
				icon={
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M4 3v10M4 13l-2-2M4 13l2-2M12 13V3M12 3l-2 2M12 3l2 2"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
		</div>
	);
}
