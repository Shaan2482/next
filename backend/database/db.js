import mongoose from "mongoose";

const connection={};

const dbConnect=async ()=>{
if(connection.isconnected){
    console.log("Alredy Connected")
    return
}
if(mongoose.connections.length>0){
    connection.isconnected=mongoose.connections[0].readyState;
    if(connection.isconnected===1){
        console.log("Use Previous Connection")
        return
    }
    await mongoose.disconnect()
}
const db=await mongoose.connect(process.env.MONGODB_URI);
console.log("New Connection");
connection.isconnected=db.connections[0].readyState;
}

// const dbDisconnect=async()=>{
// if(connection.isconnected){
//     if(process.env.NODE_ENV==='production'){
//         await mongoose.disconnect();
//         connection.isconnected=false
//     }else{
//         console.log("Not Disconnected")
//     }
// }
// }

export default dbConnect;