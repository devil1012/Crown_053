const serviceCrown2Controller_53=require('./serviceCrown2Controller_53');
exports.getCategories=async(req,res)=>{
    try{
        let results=await serviceCrown2Controller_53.getCategories();
        console.log('results',JSON.stringify(results));
        res.render('crown2_53', { 
            data:results,
            title: 'Crown2_53',
            id:'204410053',
            name:'Zachary Lin'});
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}