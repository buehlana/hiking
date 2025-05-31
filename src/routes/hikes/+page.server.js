import db from '$lib/server/db.js'; 


export async function load () {
    return {
        hikes: await db.getHikes() 
        
    }
}

export const actions = {
    delete: async({request}) => {
        const data = await request.formData(); 
        console.log(data); 
        await db.deleteHike(data.get("id")); 
    }
}