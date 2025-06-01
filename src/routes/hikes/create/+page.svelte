<script>
  let { data, form } = $props();
  let formEl;
  let cantons = data.cantons;

  function handleSubmit() {
    alert("You created a new hike!");
    formEl?.reset();
  }
</script>

<a href="/hikes" class="text-decoration-none text-dark">View all hikes</a>
<h1><strong>Add a hike to our database</strong></h1>
<form method="POST" onsubmit={handleSubmit}>
  <div class="mb-3">
    <label for="" class="form-label">Name of the hike</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Canton</label>
    <select name="canton" class="form-control" required>
      <option value=""> Select a canton</option>
      {#each cantons as canton}
        <option value={canton.name}>{canton.name}</option>
      {/each}
    </select>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Duration</label>
    <select name="duration" class="form-control" required>
      <option value="">Select duration</option>
      <option value="1h">1h</option>
      <option value="2h">2h</option>
      <option value="3h">3h</option>
      <option value="4h+">4h+</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Distance</label>
    <select name="distance" class="form-control" required>
      <option value="">Select distance</option>
      <option value="1 km">1 km</option>
      <option value="5 km">5 km</option>
      <option value="10 km">10 km</option>
      <option value="15+ km">15+ km</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Elevation</label>
    <select name="elevation" class="form-control" required>
      <option value="">Select elevation</option>
      <option value="100 m">100 m</option>
      <option value="500 m">500 m</option>
      <option value="1000 m">1000 m</option>
      <option value="1500+ m">1500+ m</option>
    </select>
  </div>
  <div class="text-center" style="margin-bottom: 70px">
    <button type="submit"> Add Hike </button>
  </div>
</form>

{#if form?.success}
  <bind:this>{formEl}</bind:this>
{/if}
