<script>
  let { data } = $props();
  const { canton, hikes } = data;
</script>

<h1>Available hikes in <strong> {canton.name} </strong></h1>

<div class="card mt-4" style="max-width: 800px; margin: auto;">
  <img
    src="/images/mountain2.jpg"
    class="card-img-top img-fluid rounded shadow"
    alt="trail"
  />
</div>

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {#each hikes as hike}
      <div class="col">
        <a
          href={`/hikes/${hike.hiking_route_id}?canton_id=${canton.canton_id}`}
          class="text-decoration-none"
        >
          <div class="card h-100 shadow border-0 text-center hover-card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-1">{hike.name}</h5>
              <div class="view-details-text">View Details</div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
