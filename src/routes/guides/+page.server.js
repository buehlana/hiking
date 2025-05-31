import db from '$lib/server/db.js'; 


export async function load () {
    return {
        guides: await db.getGuides()
    }
}