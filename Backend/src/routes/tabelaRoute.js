import express from "express"
import tabelaController from "../controllers/tabelaController.js"

const routes = express.Router()

routes.get("/tabelas", tabelaController.listarTabelas)
routes.get("/tabelas/:id", tabelaController.listarTabelaPorId)
routes.post("/tabelas", tabelaController.cadastrarTabela)
routes.put("/tabelas/:id", tabelaController.atualizarTabela)
routes.delete("/tabelas/:id", tabelaController.excluirTabela)

export default routes