<script>
  import { goto } from "$app/navigation";
  export let data;
  const { hike, canton } = data;

  function goToGuides() {
    goto("/guides");
  }
</script>

<div class="container mt-5 text-center">
  <h1>Top the <strong>{hike.name}</strong></h1>

  <div class="row align-items-center">
    <div class="col-md-6">
      <p>
        <strong>Canton:</strong>
        <a
          href={`/cantons/${canton.canton_id}`}
          class="text-decoration-none text-dark"
        >
          {canton.name}
        </a>
      </p>
      <p><strong>Duration:</strong> {hike.duration}</p>
      <p><strong>Distance:</strong> {hike.distance}</p>
      <p><strong>Elevation:</strong> {hike.elevation}</p>
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
  <button on:click={goToGuides} style="margin-bottom: 40px;">
    Book Private Tour
  </button>
</div>
