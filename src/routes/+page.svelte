<script>
    import { goto } from "$app/navigation";
    import "./styles.css";

    function goToGuides() {
        goto("/guides");
    }

    function explore() {
        goto("/cantons");
    }
</script>

<h1 class="mt-5 mb-3 fw-bold text-center display-5">
    Find Your Perfect Mountain Hike
</h1>

<h3 class="text-center">
    <strong>
        Discover breathtaking trails, unforgettable views, and hidden paths —
        all in one place.
    </strong>
</h3>

<div class="card mt-4" style="max-width: 800px; margin: auto;">
    <img
        src="/images/main.jpg"
        class="card-img-top img-fluid rounded shadow"
        alt="trail"
    />
</div>

<p class="text-center">
    Whether you're an experienced mountaineer or just looking for a scenic
    weekend escape, our platform helps you find the right hike for your mood,
    skill level, and time frame.
</p>
<div class="button-group">
    <button onclick={explore}>Explore Switzerland</button>
    <button onclick={goToGuides}>Private Tour</button>
</div>
