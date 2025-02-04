import mongoose from "mongoose";
mongoose.connect('mongodb+srv://Brian:2425@cluster0.iypvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((db)=>console.log("Mongo atlas connected"))
.catch((erro)=>console.error(error));

export default mongoose;