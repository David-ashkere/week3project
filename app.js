const express = require("express");
const path = require("path");
const mainRoute = require("./routes/main");
const gameRouter = require("./routes/games");
const bodyParser = require("body-parser");
const app = express();
const cors = require("./middlewares/cors");

const PORT = 3000;

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "/public")),
    mainRoute,
    gameRouter
)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})