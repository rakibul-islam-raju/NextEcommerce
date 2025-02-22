"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ClerkProvider>{children}</ClerkProvider>
		</div>
	);
}
