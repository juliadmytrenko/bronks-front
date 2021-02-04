import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { getAllBeverages } from "../lib/beverages";
import Beverages from "../components/beverages";
import React from "react";

export async function getStaticProps() {
    const res = await getAllBeverages();
    // I need to serialize this shit because of the DateTime type
    const beverages = JSON.parse(JSON.stringify(res));
    // const beverages = JSON.parse(JSON.stringify(res, formatDateFunction()));

    return {
        props: {
            beverages
        }
    }
}


// muszę najpierw dodać schema graphQL i scalar Datetime
type beverage = {
    id: number;
    slug: string;
    name: string;
    description: string;
    createdAt: Date;
    img: string;
}

interface HomeProps {
    beverages: beverage[];
}

export default function Home({ beverages } : HomeProps) {

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
