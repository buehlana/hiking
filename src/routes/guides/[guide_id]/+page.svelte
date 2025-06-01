<script>
    let { data } = $props();
    const { guide } = data;
    let formEl;

    let person = $state({
        first: "",
        last: "",
        email: "",
        date: "",
        message: "",
    });

    function handleSubmit() {
        alert("Thank you for your request!");
        formEl?.reset();
    }
</script>

<h1>Book a tour with {guide.first_name} {guide.last_name}</h1>
<h5>Language: <strong> {guide.language}</strong></h5>
<h5>Phone number: <strong> {guide.phone} </strong></h5>

<div class="container mt-3">
    <form onsubmit={handleSubmit} method="POST" bind:this={formEl}>
        <div class="mb-3">
            <label class="form-label" for="first"> First Name</label>
            <input
                class="form-control"
                id="first"
                type="text"
                bind:value={person.first}
                required
            />
        </div>

        <div class="mb-3">
            <label class="form-label" for="last"> Last Name</label>
            <input
                class="form-control"
                id="last"
                type="text"
                bind:value={person.last}
                required
            />
        </div>

        <div class="mb-3">
            <label class="form-label" for="email">E-mail address</label>
            <input
                class="form-control"
                id="email"
                type="email"
                bind:value={person.email}
                required
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

        <button type="submit" style="margin-bottom: 40px;">
            Request a tour</button
        >
    </form>
</div>
