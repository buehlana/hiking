<script>
    import Canton from "$lib/components/Canton.svelte";
    import "../styles.css";
    let { data } = $props();
    let cantons = data.cantons;
</script>

<h1>Explore available hikes</h1>

<div>
    {#each cantons as canton}
        <a href={"/cantons/" +canton._id}>
            <Canton name={canton.name} />
        </a>
    {/each}
</div>
