import Layout, {siteTitle} from "../components/layout";
import Link from 'next/link'
import Date from '../components/date'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {getAllBeverages} from "../lib/beverages";
import Beverages from "../components/beverages";

export async function getStaticProps() {
    const beverages = await getAllBeverages();

    return {
        props: {
            beverages
        }
    }
}

export default function Home({ beverages }) {
    return (
        <Layout home>
            <section >
                <Grid item xs={12} spacing={1}>
                    <Box paddingBottom={1}>
                        <Beverages/>
                    </Box>
                </Grid>
            </section>
        </Layout>
    )
}


// <small>
//     <Date dateString={date} />
// </small>
