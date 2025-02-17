import express from "express"
import alimento from "./alimentoRoute.js"
import receita from "./receitaRoute.js"
import user from "./userRoute.js"
import tabela from "./tabelaRoute.js"
import comentario from "./comentarioRoute.js"



const routes = (app) => {
    app.route('/').get((req, res) =>
        res.status(200).send('Bem vindo ao node.js'))
    app.use(express.json(), alimento, receita, user, tabela, comentario)
}

export default routes