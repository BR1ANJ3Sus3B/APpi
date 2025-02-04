const electronicaDao ={};
import electronica from "../models/Electronica.js";

electronicaDao.getAll = async () =>{
    return await electronica.find();
};
electronicaDao.getOne = async (electronica_id)=>{
    return await electronica.finOne({electronica_id:electronica_id});
};

electronicaDao.insert=async (electronica_id)=>{
    return await electronica.create(electronica);
};
electronicaDao.updateOne = async (electronica_id)=>{
    return await electronica.findOnerAndUpdate({electronica_id:electronica_id},electronica);
};
electronicaDao.deleteOne = async (electronica_id)=>{
    return await electronica.findOnerAndUpdate({electronica_id:electronica_id});
};



export default electronicaDao;