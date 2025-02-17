import {comentario} from "../models/comentarioModel.js"

class comentarioController {
    static async listarComentarios(req, res) {
        try {
            const listacomentarios = await comentario.find({});
            res.status(200).json(listacomentarios)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro interno no servidor` })
        }
    }

    static async listarComentarioPorId(req, res) {
        try {
            const userEncontrado = await user.findById(comentario.user);
            const comentarioCompleto = { ...comentario, user: { ...userEncontrado._doc }};
            const comentarioCriado = await comentario.create(comentarioCompleto);
            res.status(201).json({message: "comentario cadastrado com sucesso", comentario: comentarioCriado});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar comentario`});
        }
    }

    static async cadastrarComentario(req, res) {
        const novocomentario = req.body
        try {
            res.status(201).json({ message: "criado com sucesso", tabela: novocomentario, receita: novocomentario })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar comentario` });
        }
    }

    static async atualizarComentario(req, res) {
        try {
            const id = req.params.id
            await comentario.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "comentario atualizado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização` })
        }
    }

    static async excluirComentario(req, res) {
        try {
            const id = req.params.id
            await comentario.findByIdAndDelete(id)
            res.status(200).json({ message: "comentario excluído com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }
}


export default comentarioController 