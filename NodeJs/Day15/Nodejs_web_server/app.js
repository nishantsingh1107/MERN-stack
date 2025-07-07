const http = require("http");

const app = http.createServer((request, response) => {
    console.log("---- request recived ----", request.url);
    response.setHeader("Content-Type", "application/json");

    if (request.method === "GET") {
        switch (request.url) {
            case "/api/v1/students": {
                const obj = {
                    isSuccess: true,
                    message: "Students List Fetched Successfully",
                    data: { name: "Nishant", city: "Jaipur", score: 98 },
                };
                response.end(JSON.stringify(obj, null, 4));
                break;
            }
            case "/api/v1/products": {
                const obj = {
                    isSuccess: true,
                    message: "Products List Fetched Successfully",
                    data: { title: "Laptop", price: 98000, category: "Electronics" },
                };
                response.end(JSON.stringify(obj, null, 4));
                break;
            }
            default: {
                response.end({
                    isSuccess: false,
                    message: "Invalid API endpoint",
                });
            }
        }
    }
    else {
        console.log(Object.keys(request));
        response.end("work in progress....");
    }
});

app.listen(6370, () => {
    console.log("---- Server is running ----");
}); 