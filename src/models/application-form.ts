import mongoose, {Schema, Document} from "mongoose";

export interface ApplicationForm extends Document {
    nombre: string;
    apellido: string;
    correo: string;
    numero: string;
    genero: string;
    cumple: Date;
    identidad: string;
    domicilio: string;
    comentario: string;
}

const ApplicationFormSchema: Schema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    numero: {type: String, required: true},
    genero: {type: String, required: true},
    cumple: {type: Date, required: true},
    identidad: {type: String, required: true, unique: true},
    domicilio: {type: String, required: true},
    comentario: {type: String, required: false},
}, {timestamps: true});

export default mongoose.model<ApplicationForm>("ApplicationForm", ApplicationFormSchema);