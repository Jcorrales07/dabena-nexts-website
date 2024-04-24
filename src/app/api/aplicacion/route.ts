import connectDB from '@/lib/db'
import {NextRequest, NextResponse} from "next/server";
import ApplicationForm from "@/models/application-form";

// Como tengo que hacer si, quiero hacer otro GET, pero con una accion diferente?
// Osea un GET que solo me consiga una aplicacion en especifico y no todos

// Solucion: Lo que se me ocurre ahora es que tengo que crear un subfolder con el nombre de la ruta y hacer toda la logica ahi.
export async function GET(req: NextRequest, res: NextResponse) {
    await connectDB()

    try {
        const allAplications = await ApplicationForm.find({})
        return NextResponse.json({data: allAplications}, {status: 200})
    } catch (e) {
        return NextResponse.json({data: null}, {status: 500})
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    await connectDB()
    try {
        const body = await req.json()
        console.log(body)
        const newApplication = await ApplicationForm.create(body)
        return NextResponse.json({data: newApplication}, {status: 200})
    } catch (e) {
        return NextResponse.json({data: null}, {status: 500})
    }
}