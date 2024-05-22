const gameRouter = require("express").Router();
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
} = require("../middlewares/games")

gameRouter.get("/games", getAllGames, sendAllGames)
gameRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdatedGames);
gameRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);

module.exports = gameRouter;