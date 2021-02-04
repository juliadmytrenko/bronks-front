import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { getBeverageData } from "../lib/beverages";
import Beverages from "../components/beverages";
import React from "react";

export async function getStaticProps() {
    // const beverages = await getAllBeverages();
    const beverages = await getBeverageData();

    return {
        props: {
            beverages
        }
    }
}

export default function Home({ beverages }) {

    return (
        <Layout home>
            <section>
                <Grid item xs={12}>
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
