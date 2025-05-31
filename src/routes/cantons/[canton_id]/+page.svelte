<script>
	let { data } = $props();
	const { canton, hikes } = data;
</script>

<h1>Available hikes in canton {canton.name}</h1>

<ul>
	{#each hikes as hike}
		<li>
			<a
				href={`/hikes/${hike.hiking_route_id}?canton_id=${canton.canton_id}`}
				>{hike.name}
			</a>
		</li>
	{/each}
</ul>
