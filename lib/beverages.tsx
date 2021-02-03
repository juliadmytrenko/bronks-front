import { prisma } from './prisma';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();

// const endpoint = "https://api.punkapi.com/v2/";
//
// export const getAllBeverages = async () => {
//     const res = await fetch(endpoint);
//     const data = await res.json();
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return data;
// }




export function getAllBeveragesIds() {
    // id u mnie to slug
    // const slugs = QUERY

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    // return slugs.map(slug => {
    //     return {
    //         params: {
    //             id: slug)
    //         }
    //     }
    // })
}

export async function getBeverageData() {
    // pobierz dane z bazy
    // const data = QUERY
    const data = await prisma.beverage.findMany();
    // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930
    const json = await JSON.parse(JSON.stringify(data));

    // przeparsuj na Stringa
    // const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    // return {
    //     id,
    //     contentHtml,
    //     ...data
    // }
    return json;
}
