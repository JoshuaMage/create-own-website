import express from "express";
//import bodyParser from "body-parser";
//import morgan from "morgan";

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extends: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    res.render("hompage.ejs")

})





app.listen(port, () => {
    console.log(`server running on port ${port}`);
});