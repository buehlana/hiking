<script>
	import "../styles.css";
	import { goto } from "$app/navigation";
	let { data } = $props();
	let hikes = data.hikes;
	let cantons = data.cantons;

	function getCantonName(id) {
		const match = cantons.find((c) => c.canton_id === id);
		return match ? match.name : "Unknown";
	}

	function addNew() {
		goto("hikes/create");
	}
</script>

<h1>Swiss hiking routes</h1>

<div class="buttonAdd">
	<button onclick={addNew}>Add new hiking route</button>
</div>

<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>Name</th>
			<th>Canton</th>
			<th>Duration</th>
			<th>Distance</th>
			<th>Elevation</th>
			<th>Delete hike</th>
		</tr>
	</thead>
	<tbody>
		{#each hikes as hike}
			<tr>
				<td>{hike.name}</td>
				<td>{getCantonName(hike.canton_id)}</td>
				<td>{hike.duration}</td>
				<td>{hike.distance}</td>
				<td>{hike.elevation}</td>
				<td>
					<form method="POST" action="?/delete">
						<input type="hidden" name="id" value={hike._id} />
						<button class="btn btn-danger">Delete </button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
