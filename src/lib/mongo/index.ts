import mongoose from "mongoose";

const {MONGODB_URI} = process.env;

export default function connect() {
    mongoose.connect(MONGODB_URI).then(() => console.log('Connexion hecha correctamente')).catch(e => console.error(e))
}
