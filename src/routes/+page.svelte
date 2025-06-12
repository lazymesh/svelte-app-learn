<script>
  import Nested from './Nested.svelte';
  let property = " and import word is sent from parent";
  let count = $state(0);
  let str = $state("");
  let totalStr = $derived(str.length);
</script>
<h1>Welcome to Svelte TRYINGS</h1>
<h2>this is me learning and applying svelte stuffs where i have tried developing nepali calendar</h2>
<button onclick={() => count++}>Count: {count}</button>
<button onclick={() => str = str+"x"}>Add x: {str}</button>
{#if totalStr > 0}
<p>{totalStr} x added</p>
{/if}
<Nested property={property}></Nested>
