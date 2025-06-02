<script>
  import { goto } from "$app/navigation";
  let { data } = $props();
  const { hike, canton } = data;

  function goToGuides() {
    goto("/guides");
  }
</script>

<div class="container mt-5 text-center">
  <h1>Top the <b>{hike.name}</b></h1>

  <div class="row align-items-center">
    <div class="col-md-6">
      <p>
        <b>Canton:</b>
        <a
          href={`/cantons/${canton.canton_id}`}
          class="text-decoration-none text-dark"
        >
          {canton.name}
        </a>
      </p>
      <p><b>Duration:</b> {hike.duration}</p>
      <p><b>Distance:</b> {hike.distance}</p>
      <p><b>Elevation:</b> {hike.elevation}</p>
    </div>

    <div class="col-md-6 text-center">
      <img
        src="/images/mountain4.jpeg"
        alt="trail"
        class="img-fluid rounded shadow"
        style="max-height: 200px; object-fit: cover; margin-bottom: 40px;"
      />
    </div>
  </div>
</div>

<div class="text-center mt-4">
  <button onclick={goToGuides}>
    Book Private Tour
  </button>
</div>
