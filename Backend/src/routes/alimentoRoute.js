import express from "express"
import alimentoController from "../controllers/alimentoController.js"

const routes = express.Router()

routes.get("/alimentos", alimentoController.listarAlimentos)
routes.get("/alimentos/:id", alimentoController.listarAlimentoPorId)
routes.post("/alimentos", alimentoController.cadastrarAlimento)
routes.put("/alimentos/:id", alimentoController.atualizarAlimento)
routes.delete("/alimentos/:id", alimentoController.excluirAlimento)

export default routes