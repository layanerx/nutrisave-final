import mongoose from "mongoose"
import { userSchema } from "./userModel.js"

const comentarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectID },
    user: userSchema,
    texto: { type: String, required: true }
}, { versionKey: false })

const comentario = mongoose.model("comentarios", comentarioSchema)

export { comentario, comentarioSchema }