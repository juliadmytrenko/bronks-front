import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from "next-auth/adapters";
import prisma from '../../../lib/prisma';


const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }), // set sync to falce when in production
    debug: process.env.NODE_ENV === "development",
    secret: process.env.AUTH_SECRET,
    jwt: {
        encryption: true,
        secret: process.env.JWT_SECRET,
    },
}

export default (req : NextApiRequest, res : NextApiResponse) => NextAuth(req, res, options);
