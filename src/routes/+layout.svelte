<script>
  let { children } = $props();
  import "./styles.css";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/">
      <img
        src="/mountain_i.png"
        alt="Icon"
        width="40"
        height="40"
        style="background-color: transparent; border: none;"
      /> Swiss Hike Guide</a
    >

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
          <a class="nav-link" href="/cantons">Explore Switzerland</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/guides">Book a private tour</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hikes">All hikes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About us</a>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>

<footer class="bg-light text-dark py-4 border-top">
  <div class="container">
    <div class="row">
      <div class="col-md-3 text-start">
        <ul class="list-unstyled">
          <li><a href="/" class="text-decoration-none text-dark">Home</a></li>
          <li>
            <a href="/hikes" class="text-decoration-none text-dark">Hikes</a>
          </li>
          <li>
            <a href="/guides" class="text-decoration-none text-dark"
              >Our Guides</a
            >
          </li>
          <li>
            <a href="/contact" class="text-decoration-none text-dark">Contact</a
            >
          </li>
        </ul>
      </div>

      <div class="col-md-5 text-center">
        At <b>Swiss Hike Guide</b>, we believe that the best way to
        experience Switzerland is on foot.
        <p class="mb-0">
          <br />
          <b>
            Discover breathtaking trails, unforgettable views, and hidden paths
            — all in one place.
          </b>
        </p>
      </div>

      <div class="col-md-4 text-end">
        <b>Swiss Hike Guide GmbH</b><br />
        Alpenstrasse 12<br />
        8001 Zürich, Switzerland<br />
        +41 44 123 45 67<br />
        <a href="mailto:info@swisshikeguide.ch">info@swisshikeguide.ch</a>
      </div>
    </div>
  </div>
</footer>
