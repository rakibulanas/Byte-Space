import Image from "next/image";

const testimonials = [
	{
		name: "Sarah M.",
		role: "Enthusiastic Learner",
		quote:
			"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
	},
	{
		name: "James L.",
		role: "Lifelong Learner",
		quote:
			"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
	},
	{
		name: "Alex B.",
		role: "Inspired Creator",
		quote:
			"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
	},
];

export default function Testimonials() {
	return (
		<section className="relative overflow-hidden bg-neutral-50 py-24">
			<div className="absolute top-0 left-1/2 h-96 w-96 rounded-full bg-secondary-200 opacity-60 blur-3xl" />
			<div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-secondary-200 opacity-50 blur-3xl" />
			<div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary-200 opacity-60 blur-3xl" />

			<div className="relative mx-auto max-w-300 px-6">
				<div className="grid items-center gap-8 lg:grid-cols-2">
					<h2 className="font-heading text-3xl font-bold text-neutral-950 sm:text-5xl">
						Discover What Our Community Is Saying
					</h2>
					<p className="leading-relaxed text-neutral-600">
						At ByteSpace, our vibrant community of learners and creators is at
						the heart of what we do. Hear directly from those who have
						experienced the transformative journey of learning and creating on
						our platform. Explore testimonials that reflect the diverse
						perspectives of enthusiastic learners and accomplished creators.
					</p>
				</div>

				<div className="mt-16 grid items-start gap-10 md:grid-cols-3">
					{testimonials.map((item) => (
						<div key={item.name} className="rounded-3xl bg-white p-6">
							<Image
								src="/images/testimonial-avatar.png"
								alt={item.name}
								width={80}
								height={80}
								className="h-20 w-20 rounded-full"
							/>
							<p className="mt-6 font-heading text-lg font-semibold text-neutral-950">
								{item.name}
							</p>
							<p className="text-primary-700">{item.role}</p>
							<p className="mt-6 leading-relaxed text-neutral-600">
								&quot;{item.quote}&quot;
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
