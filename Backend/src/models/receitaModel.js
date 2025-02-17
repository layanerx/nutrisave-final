import mongoose, { mongo } from "mongoose"

const receitaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    link: { type: String, required: true },
    imagem: { type: String, required: true }
}, { versionKey: false })

const receita = mongoose.model("receitass", receitaSchema)

export { receita, receitaSchema }