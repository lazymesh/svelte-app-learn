<script>
  let count = $state(0);
  let str = $state("");
</script>
<h1>Welcome to Svelte TRYINGS</h1>
<h2>this is me learning and applying svelte stuffs where i have tried developing nepali calendar</h2>
<button onclick={() => count++}>Count: {count}</button>
<button onclick={() => str = str+"x"}>Add x: {str}</button>
