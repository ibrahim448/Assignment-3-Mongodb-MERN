const {client} = require("./config");


const dataUpdate = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        // without condition
        const deleteDataAll = {};

        // with condition
        const deleteDataCondition = {Age : "25Yrs"};
      
        const result = await collectionName.deleteMany(deleteDataAll);
        console.log("Successfully deleted document.");


    }catch(error){

    }finally{
        await client.close();
    }
}

dataUpdate();