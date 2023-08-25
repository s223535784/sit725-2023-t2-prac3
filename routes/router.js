let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/', function(req,res){
    controller.postCat(req, res);
    // let cat = req.body;
    // console.log(cat);
    // insertCat(cat, (err,result) => {
    //     if(!err){
    //         res.json({statusCode:201,data:result,message:'success'});
    //     }
    // });
}); 

router.get('/', function(req,res){
    controller.getAllCats(req, res);
    //try{}
    // getAllCats((err,result)=>{
    //     console.log(result);
    //     if(!err){
    //         res.json({statusCode:200,data:result,message:'success'});
    //     }
        
    // });
});

module.exports = router;