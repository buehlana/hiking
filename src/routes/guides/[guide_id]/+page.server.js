import db from '$lib/server/db.js';

export async function load({ params}) {
    console.log(params); 
    const id = parseInt(params.guide_id);
    const guide = await db.getGuide(id)

    return {guide}
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const booking = {
            first: data.get("first"),
            last: data.get("last"),
            date: data.get("date"),
            hike: data.get("hike"),
            email: data.get("emal"),
            message: data.get("message")
        };
        return { success: true };
    }
};