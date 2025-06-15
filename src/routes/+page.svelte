<script>
  import Nested from './Nested.svelte';
  let property = "this is sent from parent as $props";
  let count = $state(0);
  let str = $state("");
  let totalStr = $derived(str.length);
</script>
<h1>Welcome to Svelte TRYINGS</h1>
<h2>this is me learning and applying svelte stuffs where i have tried developing nepali calendar</h2>
<button class="button" onclick={() => count++}>Count: {count}</button>
<button class="button" onclick={() => str = str+"x"}>Add x: {str}</button>
{#if totalStr > 0}
<p>{totalStr} x added</p>
{/if}

<Nested property={property}></Nested>

<style>
.button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button {
  background-color: white; 
  color: black; 
  border: 2px solid #04AA6D;
}

.button:hover {
  background-color: #04AA6D;
  color: white;
}
</style>
