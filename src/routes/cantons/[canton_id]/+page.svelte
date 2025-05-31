<script>
	let { data } = $props();
	const {canton, hikes } = data;
</script>

<h1> Available hikes in canton {canton.name}</h1>
<h1> canton ID {canton.canton_id}</h1>

<ul>
	{#each hikes as hike}
	<li>{hike.name}</li>
	{/each}
</ul>
