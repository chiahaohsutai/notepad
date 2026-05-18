<script>
	import { resolve } from '$app/paths';
</script>

<div class="bg-dotted flex h-full w-full items-center justify-center">
	<div
		class="z-10 flex max-w-md flex-1 flex-col justify-center gap-4 rounded border border-gray-300 bg-white p-10 shadow-xl"
	>
		<div class="space-y-4">
			<div class="flex items-center gap-2">
				<enhanced:img
					src="../../lib/assets/logo.png"
					alt="Application Logo"
					class="h-12 w-12 rounded-full border border-gray-300 shadow-xs"
				/>
				<h1 class="text-4xl">Sign in</h1>
			</div>
			<p class="text-sm text-gray-600">Use your Notepad++ Account</p>
		</div>
		<form class="space-y-4">
			<div>
				<label for="email">Email</label>
				<input
					name="email"
					id="email"
					type="email"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
				/>
			</div>
			<div>
				<label for="password">Password</label>
				<input
					name="password"
					id="password"
					type="email"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
				/>
			</div>
			<div class="flex items-center justify-end gap-4">
				<a href={resolve('/signup')} class="cursor-pointer text-blue-600 hover:underline">
					Create account
				</a>
				<button
					title="sign-in"
					class="cursor-pointer rounded-4xl bg-blue-600 px-4 py-1 text-white hover:opacity-75"
				>
					Next
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.bg-dotted {
		background-image: radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 1px);
		background-size: 16px 16px;
		mask-image: radial-gradient(circle, black 50%, transparent 100%);
	}
</style>
