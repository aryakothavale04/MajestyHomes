const mongoose = require("mongoose");
const data = require ("./data.js");
const listing = require ("../models/listing.js");

main()
    .then(()=>{console.log("CONNECTION DONE");})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/majestyhomes');
}

const initData = async ()=>{
    await listing.deleteMany({});
    data.data = data.data.map((obj)=>({...obj ,owner : '69be606ebf83bd55ad7d933d'}));
    await listing.insertMany(data.data);
    console.log("Data Was Initialised");
}

initData();