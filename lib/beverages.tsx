import prisma from './prisma';





export const getBeverage = async (slug: string) => {
    const res = await prisma.beverage.findUnique({
        where: {
            slug: slug,
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
    const beverages = await prisma.beverage.findMany();
    // const data = await JSON.parse(JSON.stringify(res)); // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930


    if (!beverages) {
        return {
            notFound: true,
        }
    }

    return beverages;
}


export const getAllBeveragesSlugs = async () => {
    // params.id will be a slug
    const res = await prisma.beverage.findMany({
        select: {
            slug: true,
        }
    });

    const slugs = res.map(slug => slug.slug);

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
    //             id: slug
    //         }
    //     }
    // });
    return slugs;
}

