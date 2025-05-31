<script>
    import { goto } from "$app/navigation";

    function goToGuides() {
        goto("/guides");
    }

    function explore() {
        goto("/cantons");
    }
</script>

<h1>Find Your Perfect Mountain Hike</h1>

<p>
    Discover breathtaking trails, unforgettable views, and hidden paths — all in
    one place. Whether you're an experienced mountaineer or just looking for a
    scenic weekend escape, our platform helps you find the right hike for your
    mood, skill level, and time frame.
</p>
<div class="button-group">
    <button on:click={explore}>Explore Switzerland</button>
    <button on:click={goToGuides}>Private Tour</button>
    
</div>
