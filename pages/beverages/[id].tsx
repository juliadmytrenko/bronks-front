import Head from 'next/head'
import Layout from "../../components/layout";
import Date from '../../components/date'
import { getBeverage, getAllBeveragesSlugs } from "../../lib/beverages";

export async function getStaticProps({ params }) {
    const beverage = await getBeverage(params.id)
    return {
        props: {
            beverage
        }
    }
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const slugs = await getAllBeveragesSlugs();

    // const paths = await JSON.parse(JSON.stringify(res));
    // const paths = res.toString();
    // Get the paths we want to pre-render based on posts

    const paths = slugs.map((slug) => (
        {
            params: {
                id: slug
            },
        }));


    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export default function Beverage({ beverage }) {

    return (
        <Layout>
            <Head>
                <title>{beverage.name}</title>
            </Head>
            <article>
                <h1 >{beverage.name}</h1>
                <p >{beverage.description}</p>
                <small>
                    <Date dateString={beverage.createdAt} />
                </small>
                {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            </article>
        </Layout>
    )
}
