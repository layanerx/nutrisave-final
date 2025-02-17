import {user} from "../models/userModel.js"
 
class userController {

    static async listarUsers(req, res) {
        try { 
            const listausers = await user.find({})
            res.status(200).json(listausers)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro interno no servidor` })
        }
    }

    static async listaUserPorId(req, res) {
        try {
            const id = req.params.id
            const userEncontrado = await userController.findById(id)
            res.status(200).json(userEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do user` })
        }
    }

    static async cadastrarUser (req, res) {
        try {
          const novoUser = await user.create(req.body)
          res.status(201).json({ message: "criado com sucesso"})
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar user` })
        }
      }

    static async atualizarUser (req, res){
        try {
            const id = req.params.id
            await user.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "User atualizado com sucesso"})
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização`})
        }
    }

    static async excluirUser(req, res) {
        try {
            const id = req.params.id
            await user.findByIdAndDelete(id)
            res.status(200).json({ message: "user excluído com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }
}

export default userController