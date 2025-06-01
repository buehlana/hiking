import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("hiking");

// get all cantons 
async function getCantons() {
  let cantons = [];
  try {
    const collection = db.collection("cantons");
    const query = {};
    cantons = await collection.find(query).sort({ name: 1 }).toArray();
    cantons.forEach(cantons => {
      cantons._id = cantons._id.toString();
    });
  } catch (error) {
    // TODO: error handling 
  }
  return cantons;
}

// get all hikes 
async function getHikes() {
  let hikes = [];
  try {
    const collection = db.collection("hiking_routes");
    const query = {};
    hikes = await collection.find(query).sort({ name: 1 }).toArray();
    hikes.forEach(hike => {
      hike._id = hike._id.toString();
    });
  } catch (error) {
    // TODO: error handling 
  }
  return hikes;
}

// get canton by ID
async function getCanton(id) {
  let canton = null;
  try {
    const collection = db.collection("cantons");
    const numericId = parseInt(id);
    const query = { canton_id: numericId }; // to filter by id
    canton = await collection.findOne(query);

    if (!canton) {
      console.log("No canton with id " + numericId);
    } else {
      canton._id = canton._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return canton;
}

// get canton id by name
async function getCantonByName(name) {
  try {
    const collection = db.collection("cantons");
    return await collection.findOne({ name: name });
  } catch (error) {
    console.log("getCantonByName error:", error.message);
    return null;
  }

}

// get all the hikes by canton
async function getHikesByCanton(id) {
  let hikes = [];
  try {
    const collection = db.collection("hiking_routes");

    const numericId = parseInt(id);
    const query = { canton_id: numericId };
    hikes = await collection.find(query).sort({ name: 1 }).toArray();
    hikes.forEach(hike => {
      hike._id = hike._id.toString();
    });
  } catch (error) {
    // TODO: error handling 
  }
  return hikes;
}

async function getHike(id) {
  let hike = null;
  try {
    const collection = db.collection("hiking_routes");
    const numericId = parseInt(id);

    const query = { hiking_route_id: numericId }; // to filter by id
    hike = await collection.findOne(query);

    if (!hike) {
      console.log("No hike with id " + numericId);
    } else {
      hike._id = hike._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return hike;

}

// create a hike
async function createHike(hike) {
  try {
    console.log("createdHike func called with " + hike);

    const collection = db.collection("hiking_routes");
    const result = await collection.insertOne(hike);
    console.log("hike inserted " + hike);
    return result.insertedId.toString(); // convert ObjectId to String 
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);

  }
  return null;
}

// delete hike by id
// returns: id of the deleted hike or null, if hike could not be deleted
async function deleteHike(id) {
  try {
    const collection = db.collection("hiking_routes");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// get all guides 
async function getGuides() {
  let guides = [];
  try {
    const collection = db.collection("guides");
    const query = {};
    guides = await collection.find(query).sort({ name: 1 }).toArray();
    guides.forEach(guide => {
      guide._id = guide._id.toString();
    });
  } catch (error) {
    // TODO: error handling 
  }
  return guides;
}

//get a guide
async function getGuide(id) {
  let guide = null;
  try {
    const collection = db.collection("guides");
    guide = await collection.findOne({ id: id });
    if (!guide) {
      console.log("No guide with id " + id);
    } else {
      guide._id = guide._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling 
  }
  return guide;
}


export default {
  getCantons,
  getHikesByCanton,
  getCanton,
  getHikes,
  getHike,
  getCantonByName,
  createHike,
  getGuides,
  getGuide,
  deleteHike
}