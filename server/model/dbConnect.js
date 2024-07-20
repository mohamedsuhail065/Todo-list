const mongoose=require('mongoose')
require('dotenv').config()
async function mainModule(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected")
}

module.exports=mainModule;