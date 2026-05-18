<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/logo.png';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>Notepad++</title>
</svelte:head>

<div class="h-svh w-full">
	{@render children()}
</div>
