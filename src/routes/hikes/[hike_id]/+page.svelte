<script>
	export let data; 
	const {hike, canton} = data; 
</script>

<h1> Top the {data.hike.name}</h1>
<p>Canton: <strong> <a href={`/cantons/${canton.canton_id}`}>{data.canton.name}</a></strong> </p>
<p>Duration: <strong>{data.hike.duration}</strong> </p>
<p>Distance: <strong>{data.hike.distance}</strong> </p>
<p>Elevation: <strong>{data.hike.elevation}</strong> </p>
