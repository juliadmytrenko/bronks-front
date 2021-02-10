import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import { getAllBeverages } from "../lib/beverages";
import Beverages from "../components/beverages";
import React from "react";
import {beverage} from "../lib/myTypes";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

// export async function getStaticProps() {
//     const res = await getAllBeverages();
//     // I need to serialize this shit because of the DateTime type
//     const beverages = JSON.parse(JSON.stringify(res));
//     // const beverages = JSON.parse(JSON.stringify(res, formatDateFunction()));
//
//     return {
//         props: {
//             beverages
//         }
//     }
// }




interface HomeProps {
    beverages: beverage[];
}

export default function Home({ beverages } : HomeProps) {
    const [session, loading] = useSession();

    return (
        <Layout home>
            <nav>
                {!session ? (
                    <button onClick={() => signIn()}>Sign In</button>
                ) : (
                    <>
                        {/*<span>{session.user.name}</span>*/}
                        {/*{session.user.image && (*/}
                        {/*    <img*/}
                        {/*        src={session.user.image}*/}
                        {/*        style={{ width: "25px", borderRadius: "50%" }}*/}
                        {/*    />*/}
                        {/*)}*/}
                        <span>Signed In</span>

                        <button onClick={signOut}>Sign Out</button>
                    </>
                )}
                <button>
                    <Link href="/secret">To the secret</Link>
                </button>
            </nav>
            {/*<section>*/}
            {/*    <Box paddingBottom={1}>*/}
            {/*        <Beverages beverages={beverages}/>*/}
            {/*    </Box>*/}
            {/*</section>*/}
        </Layout>
    )
}
