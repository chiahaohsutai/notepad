<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Notepad++</title>
</svelte:head>

<div class="h-full w-full space-y-4 px-12 py-8">
	{@render children()}
</div>
