const serviceCrown2Controller_53=require('./serviceCrown2Controller_53');
exports.getCategories=async(req,res)=>{
    try{
        const data=await serviceCrown2Controller_53.getCategories();
        return res.json(data);
        
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}