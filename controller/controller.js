let collection = require('../model/cat');

function postCat(cat, callback){
    //ask model to perform db
    let cat =req.body;
    collection.postCat(cat, (err, result) =>{
        if(!err){
            res.json({statusCode:200,data:result,message:'post success'});
        }
    });
}

function getAllCats(cat, callback){
    collection.getAllCats(cat, (err,result)=>{
            console.log(result);
            if(!err){
                res.json({statusCode:200,data:result,message:'get success'});
            }
        });
}

module.exports = {postCat, getAllCats};