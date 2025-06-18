<script>
	import '../app.css';
	let { data, children } = $props();
</script>

<nav>
	{data[0]}
	{#each data.nav_tabs as nav_tab}
		{#if nav_tab == "home"}
		<a href="/">{nav_tab}</a>
		{:else}
		<a href="/{nav_tab}">{nav_tab}</a>
		{/if}
	{/each}
</nav>

{@render children()}
<style>
nav {
	display: flex;
	padding: 1rem;
	border-bottom: 1px solid #ccc;
	background-color: #eee;
	box-shadow: 0 0 5px #ccc;
	justify-content: right;
	align-items: center;
}
nav a {
	color: #333;
	font-weight: bold;
	padding: 0.5rem;
	border-radius: 0.25rem;

}
nav a:hover {
	background-color: #ADD8E6;
}
</style>