const express = require("express");
const app = express();
const port = 3000;

app.use("/about", function (request, response) {

    response.send("О сайте")
}),

app.use("/prosucts/create", function (request, response) {

    response.send("Добавление товара")
}),

app.use("/products/:id", function (request, response) {

    response.send(`Товар ${request.params.id}`);
}),

app.use("/products", (request, response) => {

    response.send("Список товаров");
}),

app.use("/", (request, response) => {

    response.send("Главная страница");
}),

app.listen(port, "127.0.0.1", function () {
        console.log("Сервер работает на http://localhost:%s", port)
});

// let accounts = [
//     {
//         "id": 1,
//         "username": "Виталик",
//         "role": "admin"
//     },
//     {
//         "id": 2,
//         "username": "Димон",
//         "role": "guest"
//     },
//     {
//         "id": 3,
//         "username": "Игорёк",
//         "role": "guest"
//     }
// ]