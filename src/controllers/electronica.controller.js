import electronicaDAO from "../DAO/electronicaDao.js";
const electronicaController = {};

electronicaController.getAll = (req, res)=>{
    electronicaDAO.getAll()
    .then((electronica)=>{
    console.log(electronica);
    res.render('../src/views/index.ejs',{electronica});
})
.catch((error)=> {
    res.json({
        data:{
            message:error,
        },
    })
});
};

electronicaController.getOne = (req , res)=>{
    electronicaDAO.getOne(req.params.electronica_Id)
    .then((electronica)=>{
        res.render('../src/views/edit.ejs',{electronica})
    });
};
electronicaController.insert= (req,res)=>{
    electronicaDAO.insert(req.body)
    .then(()=>{
        res.redirect('/api/electronica/getAll');
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })

};

electronicaController.updateOne=(req,res)=>{
   electronicaDAO.updateOne(req.body, req.params.electronica_Id)
    .then(()=>{
        res.redirect('/api/electronica/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })

}

electronicaController.deleteOne = (req,res)=>{
    electronicaDAO.deleteOne(req.params.electronica_Id)
    .then(()=>{
        res.redirect('/api/electronica/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                error:error
            }
        })
        
    });
}

export default electronicaController;
