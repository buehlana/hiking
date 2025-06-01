import db from '$lib/server/db.js'; 


export async function load () {
    let hikes = await db.getHikes(); 
    let cantons = await db.getCantons(); 
    return {hikes, cantons}
}



export const actions = {
    delete: async({request}) => {
        const data = await request.formData(); 
        console.log(data); 
        await db.deleteHike(data.get("id")); 
    }
}