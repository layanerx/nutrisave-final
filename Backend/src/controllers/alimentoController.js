import tabelaController from "./tabelaController.js"
import { alimento } from "../models/alimentoModel.js"

class alimentoController {
    static async listarAlimentos(req, res) {
        try {
            const listaAlimentos = await alimento.find({});
            res.status(200).json(listaAlimentos)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro interno no servidor` })
        }
    }

    static async listarAlimentoPorId(req, res) {
        try {
            const id = req.params.id
            const alimentoEncontrado = await alimentoController.findById(id)
            res.status(200).json(alimentoEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do alimento` })
        }
    }

    static async cadastrarAlimento(req, res) {
        const novoAlimento = req.body

        try {
            const tabelaEncontrada = await tabelaController.cadastrarTabela(novoAlimento.tabela)
            const receitaEncontrada = await receitaController.cadastrarReceita(novoAlimento.receita)
            const alimentoCompletoTabela = await { ...novoAlimento, tabela: { ...tabelaEncontrada._doc } }
            const alimentoCompletoReceita = await { ...novoAlimento, receita: { ...receitaEncontrada._doc } }
            const alimentoCriado = await alimento.create(alimentoCompletoTabela, alimentoCompletoReceita)
            res.status(201).json({ message: "criado com sucesso", tabela: novoAlimento, receita: novoAlimento })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar alimento` });
        }
    }

    static async atualizarAlimento(req, res) {
        try {
            const id = req.params.id
            await alimento.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Alimento atualizado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização` })
        }
    }

    static async excluirAlimento(req, res) {
        try {
            const id = req.params.id
            await alimento.findByIdAndDelete(id)
            res.status(200).json({ message: "Alimento excluído com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }
}

export default alimentoController
