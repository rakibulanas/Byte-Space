import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

export default function JoinPage() {
	return (
		<AuthLayout
			title="Sign up and come in"
			subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
		>
			<p className="text-sm font-medium text-primary-700">Create an Account</p>
			<h2 className="mt-1 font-heading text-3xl font-bold text-neutral-950">
				Welcome to ByteSpace
			</h2>

			<form className="mt-8 flex flex-col gap-5">
				<div>
					<label className="text-sm text-neutral-700">Full Name</label>
					<input
						type="text"
						placeholder="Jamie Davis"
						className="mt-2 w-full rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
					/>
				</div>
				<div>
					<label className="text-sm text-neutral-700">Email</label>
					<input
						type="email"
						placeholder="designer@example.com"
						className="mt-2 w-full rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
					/>
				</div>
				<div>
					<label className="text-sm text-neutral-700">Password</label>
					<input
						type="password"
						placeholder="••••••••"
						className="mt-2 w-full rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-950 outline-none placeholder:text-neutral-400"
					/>
				</div>
				<div className="flex justify-end">
					<button
						type="submit"
						className="rounded-full bg-secondary-400 px-8 py-3 text-sm font-semibold text-neutral-950"
					>
						Continue
					</button>
				</div>
			</form>

			<p className="mt-8 text-center text-sm text-neutral-500">
				Already have an account?{" "}
				<Link href="/sign-in" className="font-medium text-primary-700">
					Login
				</Link>
			</p>
		</AuthLayout>
	);
}
