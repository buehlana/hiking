import db from '$lib/db.js'; 


export async function load () {
    return {
        cantons: await db.getCantons()
    }
}
