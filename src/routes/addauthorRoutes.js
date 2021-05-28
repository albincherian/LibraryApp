const express = require('express');

const addauthorsRouter = express.Router();

function router(nav){

    addauthorsRouter.get('/',function(req,res){
        res.render("addauthors",{
            nav,
            title:'Library'
            
        });
    });

    return addauthorsRouter;
    

}


module.exports = router;