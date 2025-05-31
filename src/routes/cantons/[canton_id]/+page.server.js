import db from '$lib/server/db.js'; 

export async function load ({params}) {
	
	const id = params.canton_id
	const canton = await db.getCanton(id)
	const hikes = await db.getHikesByCanton(id)
	return {
		canton,
		hikes
	}
}



