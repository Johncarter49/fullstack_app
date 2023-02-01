const express = require("express");
const app = express();
const homeRoute = require("./routes/homeRoute")
const useRoute = require("./routes/useRoute")
const cors = require('cors');


//json

app.use(express.json());
app.use(cors());


app.use("/", homeRoute);
app.use("/user", useRoute);



app.listen(7000,()=>{
    console.log("server start on port 7000");
})