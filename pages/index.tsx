import Layout from "../components/layout";
import Box from "@material-ui/core/Box";
import { getAllBeer } from "../lib/beer";
import TilesWithProducts from "../components/tiles-with-products";
import React, { useEffect } from "react";
import { beer } from "../lib/myTypes";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

export async function getStaticProps() {
  const allBeer = await getAllBeer();
  // I need to serialize this shit because of the DateTime type
  // const beer = JSON.parse(JSON.stringify(res));
  // const beer = JSON.parse(JSON.stringify(res, formatDateFunction()));

  return {
    props: {
      allBeer,
    },
  };
}

interface HomeProps {
  allBeer: beer[];
}

export default function Home({ allBeer }: HomeProps) {
  const [session, loading] = useSession();

  useEffect(() => {
    return () => {
      console.log(allBeer);
    };
  }, [session]);

  return (
    <Layout home>
      {session && (
        <section>
          <span>{session.user.name}</span>
          {session.user.image && (
            <img
              src={session.user.image}
              style={{ width: "25px", borderRadius: "50%" }}
            />
          )}
          <span>Signed In</span>
        </section>
      )}

      <section>
        <Box paddingBottom={1}>
          {allBeer.length === 0 && <Box>No products to display</Box>}
          <TilesWithProducts products={allBeer} />
        </Box>
      </section>
    </Layout>
  );
}

// beer.length because an empty array equals to true
