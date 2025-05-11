<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/card">card</a>
</nav>

{@render children()}