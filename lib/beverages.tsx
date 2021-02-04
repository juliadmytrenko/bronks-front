import {prisma} from './prisma';


export const getBeverage = async (id: number) => {
    const res = await prisma.beverage.findUnique({
        where: {
            id: id,
        },
    })
    const data = await JSON.parse(JSON.stringify(res)); // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data;
}


export const getAllBeverages = async () => {
    const res = await prisma.beverage.findMany();
    const data = await JSON.parse(JSON.stringify(res)); // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data;
}


export const getAllBeveragesIds = async () => {
    // params.id will be a slug
    const res = await prisma.beverage.findMany({
        select: {
            slug: true,
        }
    });

    const slugs = await JSON.parse(JSON.stringify(res));

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
    return slugs.map(slug => {
        return {
            params: {
                id: slug
            }
        }
    });
}

