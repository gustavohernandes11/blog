import { Grid, GridItem } from "@chakra-ui/react";
import { MenuBar } from "components/_mobile/MenuBar";
import { MenuModal } from "components/_mobile/MenuModal";
import { Aside } from "layout/Aside";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
    return (
        <Grid
            w="100%"
            maxW="100vw"
            h="100%"
            maxH={[null, null, null, "100vh"]}
            overflow="hidden"
            mb={["60px", null, null, "unset"]}
            gridTemplateColumns={{
                base: "1fr",
                lg: "300px 1fr",
            }}
            gridTemplateAreas={{
                base: `"aside" "main"`,
                lg: `"aside main"`,
            }}
        >
            <GridItem
                area="main"
                overflowY="auto"
                className="content"
                maxH="100vh"
            >
                <GridItem area="header">
                    <Header />
                </GridItem>
                {children}
                <GridItem area="footer">
                    <Footer />
                </GridItem>
            </GridItem>
            <GridItem area="aside">
                <Aside />
            </GridItem>
            <MenuBar />
            <MenuModal />
        </Grid>
    );
};
