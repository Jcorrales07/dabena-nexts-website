import {NextApiRequest, NextApiResponse} from "next";
import {redirect} from "next/navigation";

// Se crea un endpoint creando carpetas pages/api al mismo nivel de app
// dentro de api, van a estar los archivos, como se llamen tus archivos...
// esas van a ser tus endpoints

// Por default siempre se hace un GET
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Un GET bien hecho!'})
}

// redirect solo sirve con functions GET() POST() etc
// redirect('platzi.com')