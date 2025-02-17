import express from "express"
import userController from "../controllers/userController.js"

const routes = express.Router()

routes.get("/users", userController.listarUsers)
routes.get("/users/:id", userController.listaUserPorId)
routes.post("/users", userController.cadastrarUser)
routes.put("/users/:id", userController.atualizarUser)
routes.delete("/users/:id", userController.excluirUser)

export default routes