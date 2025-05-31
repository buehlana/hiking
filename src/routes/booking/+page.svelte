<script>
    import '../styles.css'; 

    let person = $state ({
        first:"",
        last:""
    }); 

    function requestSubmit(){
        
        alert("Your Booking Request has been submitted " + person.first + " " + person.last); 
    }
</script>

<div class="containe mt-3">
    <h1>Book a tour</h1>

    <form  onsubmit={requestSubmit}>
        <div class = "mb-3">
            <label class = "form-label" for ="first"> First Name</label>
            <input 
            class="form-control"
            id="first"
            type="text"
            bind:value = {person.first}
            />
        </div>

        <div class = "mb-3">
            <label class = "form-label" for ="last"> Last Name</label>
            <input 
            class="form-control"
            id="last"
            type="text"
            bind:value = {person.last}
            />
        </div>

        <button class="btn btn-primary" type = "submit"> Book a tour</button>
    </form>

    <p class = "mt-3"> Tour Booked: {person.first} {person.last}  </p>

    
</div>

