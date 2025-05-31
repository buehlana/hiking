<script>
	export let data; 
	const {guide} = data; 
    let formEl;

    let person = {
        first: "", 
        last: "",
        date: "", 
        message: ""
    }

    function requestSubmit(){
        alert("Thank you for request!");
        formEl?.reset();
    }
</script>

<h1>Book a tour with {guide.first_name} {guide.last_name}</h1>
<div class="containe mt-3">
    

    <form  onsubmit={requestSubmit} method="POST" bind:this={formEl}>
        <div class = "mb-3">
            <label class = "form-label" for ="first"> First Name</label>
            <input class="form-control" id="first" type="text" bind:value = {person.first} required
            />
        </div>

        <div class = "mb-3">
            <label class = "form-label" for ="last"> Last Name</label>
            <input 
            class="form-control"
            id="last"
            type="text"
            bind:value = {person.last} required
            />
        </div>

        <div class="mb-3">
			<label class="form-label" for="date">Requested Date of Tour</label>
			<input
				class="form-control"
				id="date"
				type="date"
				bind:value={person.date}
			/>
		</div>

        <div class="mb-3">
			<label class="form-label" for="message">Message</label>
			<textarea
				class="form-control"
				id="message"
				rows="4"
				placeholder="Add any special notes..."
				bind:value={person.message}
			></textarea>
		</div>

        <button type = "submit"> Request a tour with {guide.first_name} {guide.last_name}</button>
    </form>
    
</div>