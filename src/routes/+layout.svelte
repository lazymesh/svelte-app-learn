<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/card">card</a>
	<a href="/about">about</a>
	<a href="/calendar">calendar</a>
</nav>

{@render children()}