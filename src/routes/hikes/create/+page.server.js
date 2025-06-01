import db from '$lib/server/db.js';

export async function load() {
    const cantons = await db.getCantons();
    return { cantons };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const cantonName = data.get("canton")?.trim();

        console.log("Raw canton value:", data.get("canton"));
        console.log("Canton to add: " + cantonName);

        if (!cantonName) {
            return { success: false, error: "Canton is required." };
        }

        // Lookup the canton
        const canton = await db.getCantonByName(cantonName);

        if (!canton) {
            console.log("Canton not found " + cantonName);
        }
        //console.log(data);
        const hike = {
            name: data.get("name"),
            canton_id: canton.canton_id,
            duration: data.get("duration"),
            distance: data.get("distance"),
            elevation: data.get("elevation")
        }
        console.log(hike);
        await db.createHike(hike);
        //return { success: true }
    }
}