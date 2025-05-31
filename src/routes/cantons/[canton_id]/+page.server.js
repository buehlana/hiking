
import db from '$lib/db.js'

export function load ({params}){

    let cantons = db.getCanton(params.canton_id)

    return canton
}