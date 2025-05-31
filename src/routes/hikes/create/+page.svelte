

<script>
    
  let { form } = $props();
  let formEl; 

  function handleSubmit(){
    alert("You created a new hike!");
    formEl?.reset();
  }
</script>

<a href="/hikes">Back</a>
<h1>Add a hike</h1>
<form onsubmit={handleSubmit} bind:this={formEl}>
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Canton</label>
    <input name="canton" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Duration</label>
    <input name="duration" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Distance</label>
    <input name="distance" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Elevation</label>
    <input name="elevation" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary"> Add Hike </button>
</form>


