const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

require("./config/db");
const { product, Product } = require("./models/productSchema.js");

const app = express();

app.use(express.json()) //This will convey to expressJs to read the body of the request in the JSON format

app.get("/", (request, response) => {
    response.json({
        isSuccess: true,
        message: "Server is running.....",
        data: {
            name: "Keyboard",
            price: 1500,
            catagory: "Computer",
        },
    });
});

app.post("/api/v1/products", async (request, response) => {
    try {
        const data = request.body;
        const newProduct = await Product.create(data);
        response.status(201);
        response.json({
            isSuccess: true,
            message: "Product Created",
            data: {
                product: newProduct,
            },
        });

    } catch (err) {
        console.log("------ 🔴 Error occured in post products ------");
        console.log(err.message);
        response.status(500);
        response.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {
                errMessage: err.message,
            },
        });
    }
});


app.listen(2900, () => {
    console.log("---- Server Started ----");
});
