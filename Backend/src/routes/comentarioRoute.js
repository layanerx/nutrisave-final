import express from "express"
import comentarioController from "../controllers/comentarioController.js"

const routes = express.Router()

routes.get("/comentarios", comentarioController.listarComentarios)
routes.get("/comentarios/:id", comentarioController.listarComentarioPorId)
routes.post("/comentarios", comentarioController.cadastrarComentario)
routes.put("/comentarios/:id", comentarioController.atualizarComentario)
routes.delete("/comentarios/:id", comentarioController.excluirComentario)

export default routes