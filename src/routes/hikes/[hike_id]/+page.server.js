import db from '$lib/server/db.js';

export async function load({ params, url }) {
    console.log(params.hike_id);
    const id = parseInt(params.hike_id);
    const hike = await db.getHike(id)
    
    const cantonId = url.searchParams.get('canton_id'); 
    const canton = await db.getCanton(cantonId);

    return {
        hike, 
        canton
    }
}
