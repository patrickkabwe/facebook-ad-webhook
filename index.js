const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("working...");
});

app.get("/",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT,() => console.log("Backend Running on port: " + PORT));
