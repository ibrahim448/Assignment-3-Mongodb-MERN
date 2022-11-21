const {client} = require("./config");


const insertManyData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = [
            {Name: "Rasel Ahmed", Age: "25Yrs", Gender: "Male"},
            {Name: "Sabuj", Age: "26Yrs", Gender: "Male"},
            {Name: "Nipa", Age: "26Yrs", Gender: "Female"},
            {Name: "fatema", Age: "26Yrs", Gender: "Female"},
        ];

        const options = { ordered: true };

        const result = await collectionName.insertMany(patientData);
        console.log(`data collection success & _id: ${result.insertedCount}`);

    }catch(error){

    }finally{
        await client.close();
    }
}

insertManyData();