
const endpoint = "https://api.punkapi.com/v2/";

export const getAllBeverages = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data;
}

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

export async function getBeverageData(id) {
    // pobierz dane z bazy
    // const data = QUERY

    // przeparsuj na Stringa
    // const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    // return {
    //     id,
    //     contentHtml,
    //     ...data
    // }
}
