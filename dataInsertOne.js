const {client} = require("./config");


const insertData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = {Name: "Ibrahim Hossain", Age: "25Yrs", Gender: "Male"};

        const result = await collectionName.insertOne(patientData);
        console.log(`data collection success & _id: ${result.insertedId}`);

    }catch(error){

    }finally{
        await client.close();
    }
}

insertData();