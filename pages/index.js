import { getSortedPostsData } from '../lib/posts'
import Layout, {siteTitle} from "../components/layout";
import Link from 'next/link'
import Date from '../components/date'
import { Button } from '@material-ui/core';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section >
                <h2>Blog</h2>
                <Button color="primary">Hello World</Button>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
