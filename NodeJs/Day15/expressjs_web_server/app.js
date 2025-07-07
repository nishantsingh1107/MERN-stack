const express = require("express");
const { getAllDataFromArrayFromFile } = require("./file-helper");
const app = express();

const filePath = "./local_db.js";

app.get('/api/v1/students', async (request, response) => {
    const studentArr = await getAllDataFromArrayFromFile(filePath);
    response.json({
        isSuccess: true,
        message: "List of Students",
        data: studentArr,
    });
});

app.get('/api/v1/products', (request, response) => {
    response.json({
        isSuccess: true,
        message: "List of Products",
        data: [
            {
                title: "Laptop",
                price: 98000,
                category: "electronics",
            },
        ],
    });
});

app.listen(6370, () => {
    console.log("---- server is running ----");
})