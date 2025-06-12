<script>
    let { property } = $props();
    let info = "this is nested <strong>svelte component</strong>";
</script>

<p>{@html info} {property}</p>

<style>
p {
    color:rgb(235, 10, 10);
    font-weight: 2rem;
    font-size: 2rem;
}
</style>
