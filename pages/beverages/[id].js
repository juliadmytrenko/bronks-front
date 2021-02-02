import Head from 'next/head'
import { getAllBeveragesIds, getBeverageData } from '../../lib/posts'
import Layout from "../../components/layout";
import Date from '../../components/date'

export async function getStaticProps({ params }) {
    // const beverage = await getBeverageData(params.id)
    // return {
    //     props: {
    //         beverage
    //     }
    // }
}

export async function getStaticPaths() {
    // get all possible id values
    // const paths = getAllBeveragesIds()
    // return {
    //     paths,
    //     fallback: false
    // }
}

export default function Beverage({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 >{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}
