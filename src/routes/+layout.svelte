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