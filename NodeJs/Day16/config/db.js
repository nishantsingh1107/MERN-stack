const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Nishant1173:password1173@cluster0.godwpy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "Day16",
}).then(() => {
    console.log("------ ✅ DB connected ------");
}).catch((err) => {
    console.log("------ 🔴 DB connection Error ------");
    console.log(err.message);
});