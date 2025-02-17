import { tabela } from "../models/tabelaModel.js"

class tabelaController {


    static async listarTabelas (req, res){
        try {
            const listaTabelas = await tabela.find({});
            res.status(200).json(listaTabelas);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro interno no servidor`});
        }
    }

    static async listarTabelaPorId (req, res){
        try {
            const id = req.params.id;
            const tabelaEncontrada = await tabela.findById(id);
            res.status(200).json(tabelaEncontrada);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição da Tabela`});
        }
    }

    static async cadastrarTabela(req, res) {
        try {
            const novaTabela = await tabela.create(req.body)
            res.status(201).json(novaTabela.id)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar tabela` })
        }
    }
    static async atualizarTabela (req, res){
        try {
            const id = req.params.id;
            await tabela.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Tabela atualizada com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização`});
        }
    }

    static async excluirTabela(req, res) {
        try {
            const id = req.params.id
            await tabela.findByIdAndDelete(id)
            res.status(200).json({ message: "Tabela excluído com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }
}


export default tabelaController 