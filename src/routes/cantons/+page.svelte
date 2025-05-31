<script>
    import Canton from "$lib/Canton.svelte";
    import '../styles.css'; 
    let {data} = $props()
    let cantons = data.cantons

</script>
<h1> Hiking Trails in Switzerland</h1>

<Canton>
    
</Canton>

<div>
    <table class = "table">
        <thead>
            <tr>
                <th> Id</th>
                <th> Name</th>
                <th> Location</th>
                <th> Length</th>
                <th> Duration</th>
            </tr>
        </thead>
        <tbody>
            {#each cantons as canton}
            <tr>
                <td>
                    <a href="/cantons/" + cantons._id>
                    {canton._id}
                    </a>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>


</div>