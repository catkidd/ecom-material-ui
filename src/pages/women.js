import React, { useState, useEffect } from "react";
import MyCard from "../components/Card";
import axios from "axios";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import AddProductButton from "src/components/AddProductButton";

const Page = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/women");
        setFetchedProducts(res.data.data);
      } catch (error) {
        setIsError(error.message);
      }
    };
    getApiData();
  }, []);
  return (
    <>
      <Head>
        <title>Women&apos;s Clothing | Mahango Deal</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <AddProductButton />
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Women&apos;s Clothing</Typography>
            </div>
            <div>
              {isError !== "" && <h2>{isError}</h2>}
              <div className="productsContainer">
                {fetchedProducts.map((prod) => {
                  return <MyCard key={prod.id} 
                    prodData={prod} />;
                })}
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
