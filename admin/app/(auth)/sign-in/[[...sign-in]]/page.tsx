import { SignIn } from "@clerk/nextjs";

// TODO: add meta data

export default function Page() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<SignIn />
		</div>
	);
}
