import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
	return (
		<main className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
			<h1 className="text-4xl font-bold tracking-tight">BekarsSpace</h1>
			<form
				className="flex w-full max-w-sm gap-2"
			>
				<Input
					type="email"
					placeholder="your@email.com"
					required
				/>
				<Button type="submit">Subscribe</Button>
			</form>
		</main>
	)
}
