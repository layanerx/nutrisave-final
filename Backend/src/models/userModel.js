import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectID },
    nome: { type: String, required: true },
    foto: { type: String, required: false },
    userName: { type: String, required: true },
    senha: { type: String, require: true }
}, { versionKey: false })


const user = mongoose.model("users", userSchema)

export { user, userSchema }