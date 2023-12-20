import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

export default async function submitResults(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const body = JSON.parse(req.body);
    const { error, status, statusText } = await supabase.from('test').insert(body);

    if (error) {
        res.status(status).json({ message: statusText });
    }

    res.status(status).json({ message: statusText });
}