const express = require('express');
const cors = require("cors");
require('dotenv').config();


const app= express()
const routes = require('./Routes')
const bodyParser = require('body-parser');
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});
app.use("/api",routes);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));



//const sampleRoutes = require('./Routes');
//app.use('/api',sampleRoutes);

const path = require('path');
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

