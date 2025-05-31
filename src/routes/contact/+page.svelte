<script>
    import "../styles.css";
    let { form } = $props();
    let formEl;

    function handleSubmit() {
        alert("Thank you for contacting us!");
        formEl?.reset();
    }

    let user = $state({
        first: "",
        last: "",
        email: "",
        message: "",
    });
</script>


<form onsubmit={handleSubmit} method="POST" bind:this={formEl}>
    <h1 class="form-title">Contact Us</h1>
	<div class="form-group">
		<label class = "form-label" for="first">First Name</label>
		<input type="text" name="first" id="first" required />
	</div>

	<div class="form-group">
		<label class = "form-label" for="last">Last Name</label>
		<input type="text" name="last" id="last">
	</div>

	<div class="form-group">
		<label class = "form-label" for="email">E-mail address</label>
		<input type="email" name="email" id="email" required />
	</div>

	<div class="form-group">
		<label class = "form-label" for="message">Message</label>
		<textarea name="message" id="message" rows="5" required></textarea>
	</div>

	<button type="submit">Send</button>
</form>





