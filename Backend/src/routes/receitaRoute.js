import express from "express"
import receitaController from "../controllers/receitaController.js"

const routes = express.Router()

routes.get("/receitas", receitaController.listarReceitas)
routes.get("/receitas/:id", receitaController.listarReceitaPorId)
routes.post("/receitas", receitaController.cadastrarReceita)
routes.put("/receitas/:id", receitaController.atualizarReceita)
routes.delete("/receitas/:id", receitaController.excluirReceita)

export default routes