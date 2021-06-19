const express = require("express");
const path = require("path")


const app = express();

const Timing = (req, res, next) => {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    if (day > 6 || hour > 17 || hour < 9) {
        res.sendFile(path.join(__dirname, "Timing.html"))
    } else {
        next();
    }
};

app.use(Timing, express.static(path.join(__dirname, 'site')));



app.listen(3000, (err) => {
    if (err) {
        throw err
    }
    else {
        console.log("mreeeguel")
    }
})