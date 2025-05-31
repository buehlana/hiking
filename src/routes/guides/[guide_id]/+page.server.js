import db from '$lib/server/db.js';

export async function load({ params}) {
    console.log(params); 
    const id = parseInt(params.guide_id);
    const guide = await db.getGuide(id)

    return {guide}
}