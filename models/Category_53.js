const db=require('../utils/database');
const Category_53=class Category_53{
    constructor(id,name,size,remote_url,local_url,link_url){
        this.id=id;
        this.name=name;
        this.size=size;
        this.remote_url=remote_url;
        this.local_url=local_url;
        this.local_url=link_url;
    }
    static async fetchAll(){
        try{
           let results=await db.query(`SELECT*from category_53`);
            return results.rows;
        }catch(e){
            console.log('error',e);
        }
    }
};
// const test=async()=>{
//     let results=await Category_53.fetchAll();
//     console.log('results',JSON.stringify(results.rows));
// }
// test();
module.exports=Category_53;