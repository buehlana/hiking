import {MongoClient, ObjectId} from 'mongodb'; 
import {DB_URI} from '$env/static/private'; 

const client = new MongoClient(DB_URI); 
await client.connect(); 
const db = client.db('hiking'); 

async function getCantons(){
    let cantons = []; 
    try {
        const collection = db.collection('cantons'); 
        const query = {}; 
        cantons = await collection.find(query).toArray(); 
        cantons.forEach(cantons => {
            cantons._id = cantons._id.toString(); 
        }); 
    } catch (error) {
        // TODO: error handling 
    }
    return cantons; 
}

export default {getCantons}