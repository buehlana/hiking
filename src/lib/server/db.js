import {MongoClient, ObjectId} from 'mongodb'; 
import {DB_URI} from '$env/static/private'; 

const client = new MongoClient(DB_URI); 
await client.connect(); 
const db = client.db("hiking"); 

// get all cantons 
async function getCantons(){
    let cantons = []; 
    try {
        const collection = db.collection("cantons"); 
        const query = {}; 
        cantons = await collection.find(query).sort({name:1}).toArray(); 
        cantons.forEach(cantons => {
            cantons._id = cantons._id.toString(); 
        }); 
    } catch (error) {
        // TODO: error handling 
    }
    return cantons; 
}

// get canton by ID
async function getCanton(id) {
  let canton = null;
  try {
    const collection = db.collection("cantons");
    const query = {_id: new ObjectId(id)}; // to filter by id
    canton = await collection.findOne(query);

    if (!canton) {
      console.log("No canton with id " + id);
    } else {
      canton._id = canton._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return canton;
}

async function getHikesByCanton(id) {
    let hikes = []; 
    try {
        const collection = db.collection("hiking_routes"); 
        const numericId = parseInt(id);
        console.log("Querying hikes with canton_id:", numericId);
        const query = {canton_id: numericId}; 
        hikes = await collection.find(query).sort({name:1}).toArray();
        hikes.forEach(hike => {
            hike._id = hike._id.toString(); 
        }); 
    } catch (error) {
        // TODO: error handling 
    }
    return hikes; 
}


export default {
    getCantons, 
    getHikesByCanton, 
    getCanton
}