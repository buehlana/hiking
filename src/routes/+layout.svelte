<script>
    let { children } = $props()
    import './styles.css'
</script>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Swiss Hike Guide</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/cantons">Swiss hiking trails</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/booking">Book a private tour</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="container mt-3">
    {@render children()}
</div>


<footer> 
    Footer
</footer>