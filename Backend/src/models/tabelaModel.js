import mongoose from "mongoose"

const tabelaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectID },
    url: { type: String, required: true }
}, { versionKey: false })


const tabela = mongoose.model("tabelas", tabelaSchema)

export { tabela, tabelaSchema }