<script>
  import "../styles.css";
  let { data } = $props();
  let cantons = data.cantons;
</script>

<div class="card mt-4" style="max-width: 800px; margin: auto;">
  <img
    src="/images/mountain.jpg"
    class="card-img-top img-fluid rounded shadow"
    alt="trail"
  />
</div>

<h1 class="mt-5 mb-3 fw-bold text-center display-5">
  <img
    src="/swiss.png"
    alt="Icon"
    width="40"
    height="40"
    style="background-color: transparent; border: none;"
  /> Explore Switzerland
</h1>

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {#each cantons as canton}
      <div class="col">
        <a href={`/cantons/${canton.canton_id}`} class="text-decoration-none">
          <div class="card h-80 shadow border-0">
            <div class="card-body text-center hover-card">
              <div class="card-body">
                <h5 class="card-title fw-semibold mb-1">{canton.name}</h5>
                <div class="view-details-text">View Hikes</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
