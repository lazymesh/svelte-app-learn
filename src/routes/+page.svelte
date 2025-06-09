<script>
  let count = $state(0);
  let str = $state("");
</script>
<h1>Welcome to SvelteKit</h1>
<button onclick={() => count++}>Count: {count}</button>
<button onclick={() => str = str+"x"}>Add x: {str}</button>
