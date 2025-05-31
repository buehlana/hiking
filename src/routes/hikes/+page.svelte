<script>
	import "../styles.css";
	let { data } = $props();
	let hikes = data.hikes;
</script>

<h1>Swiss hiking routes</h1>
<h4><a href="/hikes/create"> +Add a new hike </a></h4>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>Name</th>
			<th>Duration</th>
			<th>Distance</th>
			<th>Elevation</th>
		</tr>
	</thead>
	<tbody>
		{#each hikes as hike}
			<tr>
				<td>{hike.name}</td>
				<td>{hike.duration}</td>
				<td>{hike.distance}</td>
				<td>{hike.elevation}</td>
				<td>
					<form method="POST" action="?/delete">
						<input type="hidden" name="id" value={hike._id} />
						<button class="btn btn-danger">Delete hike</button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
