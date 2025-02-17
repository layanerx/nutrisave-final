import { receita } from "../models/receitaModel.js"

class receitaController {

    static async listarReceitas (req, res){
        try {
            const listaReceitas = await receita.find({});
            res.status(200).json(listaReceitas);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro interno no servidor`});
        }
    }

    static async listarReceitaPorId (req, res){
        try {
            const id = req.params.id;
            const receitaEncontrada = await receita.findById(id);
            res.status(200).json(receitaEncontrada);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição da Receita`});
        }
    }

    static async cadastrarReceita(req, res) {
        try {
            const novaReceita = await receita.create(req.body)
            res.status(201).json(novaReceita)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar receita` })
        }
    }

    static async atualizarReceita (req, res){
        try {
            const id = req.params.id;
            await receita.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Receita atualizada com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização`});
        }
    }

    static async excluirReceita(req, res) {
        try {
            const id = req.params.id
            await receita.findByIdAndDelete(id)
            res.status(200).json({ message: "Receita excluído com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }
}

export default  receitaController 