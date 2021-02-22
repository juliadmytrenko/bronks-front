import prisma from './prisma';



export const getBeer = async (slug: string) => {
    const res = await prisma.beer.findUnique({
        where: {
            product_slug: slug
        },
        include: {
            product: {
                include: {
                    prices: {
                        orderBy: {
                            price_now: 'asc',
                        },
                    }
                }
            },
        }
    });


    const data = await JSON.parse(JSON.stringify(res)); // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data;
}


export const getAllBeer = async () => {
    const res = await prisma.beer.findMany({
        include: {
            product: true
        },
    });
    const allBeer = await JSON.parse(JSON.stringify(res)); // temporary solution: https://github.com/vercel/next.js/issues/11993#issuecomment-617916930


    if (!allBeer) {
        return {
            notFound: true,
        }
    }

    return allBeer;
}


export const getAllBeerSlugs = async () => {
    // params.id will be a slug
    const res = await prisma.beer.findMany();

    const allBeer = await JSON.parse(JSON.stringify(res));

    const slugs = allBeer.map(slug => slug.product_slug);

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

