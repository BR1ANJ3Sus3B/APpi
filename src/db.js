import mongoose from "mongoose";
mongoose.connect('mongodb+srv://Brian:2425@cluster0.iypvp.mongodb.net/TECNO?retryWrites=true&w=majority&appName=Cluster0')
.then((db)=>console.log("Mongo atlas connected"))
.catch((error)=>console.error(error));

export default mongoose;