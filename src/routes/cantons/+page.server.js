import db from '$lib/server/db.js'; 


export async function load () {
    return {
        cantons: await db.getCantons()
    }
}

