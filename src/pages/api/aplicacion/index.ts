import {NextApiRequest, NextApiResponse} from "next";

import ApplicationForm from '@/lib/mongo/models/application-form'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = await req.body;

    if (req.method === 'POST') {
        console.log('BODY', body)

        const form = new ApplicationForm(body)
        form.save().then(() => console.log('ya'))
    }

    res.status(200).json({text: 'Desde aplicacion!'})
}