import mongoose, {mongo} from "mongoose"


async function conectaNaDatabase(){
    mongoose.connect('mongodb://localhost:27017')
    return mongoose.connection
}
export default conectaNaDatabase