
const endpoint = "https://api.punkapi.com/v2/";

export const getAllBeers = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return data;
}
