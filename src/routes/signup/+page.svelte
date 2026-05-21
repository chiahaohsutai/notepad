<script lang="ts">
	import { auth } from '$lib/client/auth';

	type SignupFormElements = HTMLFormControlsCollection & {
		name: HTMLInputElement;
		email: HTMLInputElement;
		password: HTMLInputElement;
		confirmation: HTMLInputElement;
	};

	type SignupForm = HTMLFormElement & { elements: SignupFormElements };

	function onSignup(event: SubmitEvent) {
		event.preventDefault();

		const { elements } = event.currentTarget as SignupForm;
		const { name, email, password, confirmation } = elements;

		if (password.value !== confirmation.value) {
			alert('Please make sure both passwords match');
		}
		auth.signUp.email({
			name: name.value,
			email: email.value,
			password: password.value,
			callbackURL: '/'
		});
	}
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
					class="h-12 w-12 rounded-full border border-gray-300 p-1 shadow-xs"
				/>
				<h1 class="text-4xl">Sign Up</h1>
			</div>
			<p>Create your Notepad++ account</p>
		</div>
		<form class="space-y-4" onsubmit={onSignup}>
			<div>
				<label for="username">Name</label>
				<input
					name="name"
					id="name"
					type="text"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
					autocomplete="off"
					required
				/>
			</div>
			<div>
				<label for="email">Email</label>
				<input
					name="email"
					id="email"
					type="email"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
					autocomplete="off"
					required
				/>
			</div>
			<div>
				<label for="password">Password</label>
				<input
					name="password"
					id="password"
					type="password"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
					autocomplete="off"
					required
				/>
			</div>
			<div>
				<label for="confirmation">Confirm Password</label>
				<input
					name="confirmation"
					id="confirmation"
					type="password"
					class="mt-1 w-full rounded border border-gray-300 px-3 py-2"
					autocomplete="off"
					required
				/>
			</div>
			<div class="flex items-center justify-end gap-4">
				<button
					title="sign-up"
					class="cursor-pointer rounded-4xl bg-blue-600 px-4 py-1 text-white hover:opacity-75"
				>
					Create
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
