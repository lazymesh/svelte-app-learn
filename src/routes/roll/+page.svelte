<script>
	/** @type {number} */
	let number = $state();

	async function roll() {
		const response = await fetch('/roll');
		number = await response.json();
	}
</script>

<button type="button" class="btn preset-filled-primary-500" onclick={roll}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
