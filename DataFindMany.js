const {client} = require("./config");


const findManyData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

         // without condition
         const findDataNoCondition = {};
         // with condition
         const findPatientData = {Age : "26Yrs"};
 
         const options = {
             // sort matched documents in descending order by rating
             sort: { Id: 1 },
             // Include only the `title` and `imdb` fields in the returned document
             projection: { _id: 0, Name: 1, Age: 1, Gender: 1},
           };
 
         const result = collectionName.find(findPatientData, options);
 
         if((await result.countDocuments)===0){
             console.log("data not found");
         }
         else{
             const users = await result.toArray();
             await users.map(user=>console.log(user));
         }

    }catch(error){

    }finally{
        await client.close();
    }
}

findManyData();