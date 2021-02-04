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
    const beverages = await getAllBeveragesSlugs();

    // const paths = await JSON.parse(JSON.stringify(res));
    // const paths = res.toString();
    // Get the paths we want to pre-render based on posts

    const paths = beverages.map((beverage) => (
        {
            params: {
                id: beverage.slug
            },
        }));


    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// console.log(getStaticPaths());

export default function Beverage({ beverage }) {

    return (
        <Layout>
            <Head>
                <title>{beverage.name}</title>
            </Head>
            <article>
                <h1 >{beverage.name}</h1>
                <p >{beverage.description}</p>
                {/*<div>*/}
                {/*    <Date dateString={beverage.date} />*/}
                {/*</div>*/}
                {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            </article>
        </Layout>
    )
}
