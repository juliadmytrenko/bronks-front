import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import { getAllBeverages } from "../lib/beverages";
import Beverages from "../components/beverages";
import React from "react";
import {beverage} from "../lib/myTypes";


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




interface HomeProps {
    beverages: beverage[];
}

export default function Home({ beverages } : HomeProps) {

    return (
        <Layout home>
            <section>
                <Box paddingBottom={1}>
                    <Beverages beverages={beverages}/>
                </Box>
            </section>
        </Layout>
    )
}
