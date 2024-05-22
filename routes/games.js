const gameRouter = require("express").Router();
const { sendAllGames, deleteGame, addGameController } = require("../controllers/games");
const getAllGames = require("../middlewares/games")

gameRouter.get("/games", getAllGames, sendAllGames)
gameRouter.delete("/games/:id", getAllGames, deleteGame);
gameRouter.post("/games", getAllGames, addGameController);

module.exports = gameRouter;