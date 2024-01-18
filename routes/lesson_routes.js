const LessonsRouter = require("express").Router();
const lessonsController = require("../controller/lessons_controller");

LessonsRouter.post("/lessons/addLessons", lessonsController.addLessons);
LessonsRouter.get("/lessons/getLessons", lessonsController.getAllLessons);
LessonsRouter.put("/lessons/updateLessons/:id", lessonsController.updateAvailableSpace);
LessonsRouter.get("/search", lessonsController.searchLessons);

module.exports = LessonsRouter;
