<script>
  let { data } = $props();
  let count = $state(0);
</script>
<h1>Welcome to About page</h1>
<h3> I am still learning and applying new things in this site </h3>
<p><b>this is the data from <i>parent </i> layout.server.js : </b>{JSON.stringify(data)}</p>