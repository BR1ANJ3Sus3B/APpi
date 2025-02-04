import { model,Schema } from "mongoose";
const electronicaShema = new Schema({
    electronica_Id:{
        unique:true,
        require:true,
        type:Number
    },
    nombre:String,
    categoria:String,
    precio:Number,
    modelo:String,
    stock:Number
},{
    versionKey:false,
    timeseries:true,

});
export default model('electronica',electronicaShema);
