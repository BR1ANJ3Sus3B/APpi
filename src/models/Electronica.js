import { model,Schema } from "mongoose";
const electronicaShema=new Schema({
    electronica_Id:{
        unique:true,
        require:true,
        type:Number
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,
    average:Number
},{
    versionKey:true,
    timeseries:true,

});
export default model('electronica',electronicaShema);
