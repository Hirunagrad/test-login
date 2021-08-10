const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser')


const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;



app.listen(PORT, ()=>{
    console.log(`app is up and running ${PORT}`);
});


app.use(cors({
    origin: ["http://localhost:3000"],//it acsess to backend port 3001
    credentials:true,//it acsess tokens
}));



try{

    mongoose.connect(process.env.MONGO_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("MongoDB Connected");

}catch(err){
    console.log(err);
}




app.use("/sign",userRouter);

