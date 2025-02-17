import mongoose from "mongoose"
import { receitaSchema } from "./receitaModel.js"
import { tabelaSchema } from "./tabelaModel.js"

const alimentoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    receita: receitaSchema,
    tabela: tabelaSchema,
    imagem: { type: String, required: true }
}, { versionKey: false })

const alimento = mongoose.model("alimentos", alimentoSchema)

export { alimento, alimentoSchema } 