import Electronica from "../models/Electronica.js";
const electronicaDAO ={};

electronicaDAO.getAll = async () =>{
    return await Electronica.find();
};
electronicaDAO.getOne = async (electronica_Id)=>{
    return await Electronica.findOne({electronica_Id:electronica_Id});
};

electronicaDAO.insert=async (electronica)=>{
    return await Electronica.create(electronica);
};
electronicaDAO.updateOne = async (electronica,electronica_Id)=>{
    return await Electronica.findOneAndUpdate({electronica_Id:electronica_Id},electronica);
};
electronicaDAO.deleteOne = async (electronica_Id)=>{
    return await Electronica.findOneAndDelete({electronica_Id:electronica_Id});
};



export default electronicaDAO;