const express = require('express')
const cors = require('cors')
const logger = require('./utils/logger')
const morgan = require("./middlewares/morgan")
const routes = require("./routes/routes")

const app = express();
app.use(cors());
app.use(morgan);
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

const PORT = process.env.PORT||8080;

const dbConnect = require("./db/db");
// execute database connection
dbConnect();

app.get('/',(req,res)=>{
    res.send("hello from backend");
})
app.use("/products",routes);
app.listen(PORT,()=>{
    logger.info(`application started at port ${PORT}`);
})



