import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

export default function SignInPage() {
	return (
		<AuthLayout
			title="Sign in with ease"
			subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
		>
			<p className="text-sm font-medium text-primary-700">Sign In</p>
			<h2 className="mt-1 font-heading text-3xl font-bold text-neutral-950">
				Welcome Back
			</h2>

			<form className="mt-8 flex flex-col gap-5">
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
						Sign In
					</button>
				</div>
			</form>

			<div className="mt-8 flex items-center gap-3">
				<div className="h-px flex-1 bg-neutral-200" />
				<span className="text-sm text-neutral-400">or</span>
				<div className="h-px flex-1 bg-neutral-200" />
			</div>

			<div className="mt-6 flex justify-center gap-4">
				<button
					aria-label="Continue with Facebook"
					className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 text-lg font-bold text-neutral-950"
				>
					f
				</button>
				<button
					aria-label="Continue with Google"
					className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 text-lg font-bold text-neutral-950"
				>
					G
				</button>
			</div>

			<p className="mt-8 text-center text-sm text-neutral-500">
				New user?{" "}
				<Link href="/join" className="font-medium text-primary-700">
					Create an account
				</Link>
			</p>
		</AuthLayout>
	);
}
