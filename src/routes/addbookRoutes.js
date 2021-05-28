const express = require('express');

const addbooksRouter = express.Router();

function router(nav){
    addbooksRouter.get('/',function(req,res){
        res.render("addbooks",{
            nav,
            title:'Library'
            
        });
    });

    return addbooksRouter;
    

}

module.exports = router;