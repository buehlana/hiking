<script>
    let { children } = $props()
    import './styles.css'
</script>

<nav>
    <a href="/">Home</a>
    <a href="/booking">Book a private hiking tour</a>
    <a href="/contact">Contact us</a>
    <a href="/cantons">View the hikes</a>
</nav>

<div class="container">
    {@render children()}
</div>


<footer> 
    Footer
</footer>