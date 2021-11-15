const Categery_53=require('../models/Category_53');
exports.getCategories=async(req,res)=>{
    try{
        return await Categery_53.fetchAll();
    }catch(err){
        console.log('getCategories',err);
    }
}