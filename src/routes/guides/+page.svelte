<script>
	import "../styles.css";
	let { data } = $props();
	let guides = data.guides;
</script>

<h1 style="margin-top: 40px;"><b> Meet Our Hiking Guides</b></h1>
<h2 class="text-center">Choose Your Guide</h2>

<div class="container mt-4">
	<div class="row">
		{#each data.guides as guide}
			<div class="col-md-4 mb-4 d-flex">
	<div class="card shadow-sm w-100 text-center">
		<img
			src={`/images/${guide.photo}`}
			alt={`Photo of ${guide.first_name} ${guide.last_name}`}
			class="card-img-top"
			style="width: 100%; height: auto;"
		/>

		<div class="card-body">
			<h5 class="card-title">
				<a href={`/guides/${guide.id}`} class="text-decoration-none text-dark">
					<b>{guide.first_name} {guide.last_name}</b>
				</a>
			</h5>
			<p class="card-text mb-1">
				<b>Language:</b> {guide.language}
			</p>
			<p class="card-text">
				<b>Phone:</b> {guide.phone}
			</p>
		</div>
	</div>
</div>

		{/each}
	</div>
</div>
