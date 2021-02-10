import { getSession } from 'next-auth/client';

export default async (req, res) => {
    const session = getSession({req});

    if(session) {
        res.send({content: "Witaj na sekretnet stronie"});

    } else {
        res.send({error: "You need to be signed In"});

    }

}
