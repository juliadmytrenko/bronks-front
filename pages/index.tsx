import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { getAllBeverages } from "../lib/beverages";
import Beverages from "../components/beverages";
import React from "react";

export async function getStaticProps() {
    const beverages = await getAllBeverages();

    return {
        props: {
            beverages
        }
    }
}


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


// <small>
//     <Date dateString={date} />
// </small>
