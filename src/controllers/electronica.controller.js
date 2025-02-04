
import  electronicaDao from " ../DAO/electronicaDao.js";
import { response } from "express";

const electronicaController = {};



electronicaController.getAll = (req, res)=>{
    electronicaDao
    .getAll()
    .then((eletronica)=>{
    console.log(eletronica);
       
    res.render('../src/views/index.ejs',{electronica});
})
.catch((error)=> {
    res.json({
        data:{
            message:error,
        },
    });
});
};

electronicaController.getOne = (req , res)=>{
    electronicaDao
    .getOne(req,params.electronica_id)
    .then((electronica)=>{
        res.render('../src/views/edit.js',{electronica})
    });
};
electronicaController.insert= (req,res)=>{
    electronicaDao
    insert(req.body)
    .then((electronica)=>{
        res.redirect('/api/electronica/getAll');
    })

};

electronicaController.updateOne = (req , res)=>{
    electronicaDao
    .updateOne(req.params.electronica_id,req.body)
    .then((eletronica)=>{
        res.redirect('api/electronica/getAll');
    })
    .catch((error) => {
        res.json({
            data:{message:error}
        });
    });
};

electronicaController.deleteOne = (res,req)=>{
    electronicaDao
    .deleteOne(req.params.electronica_id)
    .then((response)=>{
        req.redirect('/api/electronica/getAll')
    })
    .catch((erro)=>{
        data:{
            message: error;
        }
    });
}

electronicaController.insert = (res,req)=>{
    electronicaDao
    .insert(req.body)
    .then((electronica)=>{
        res.redirect('/api/electronica/getAll')
    })
}


export default electronicaController;
