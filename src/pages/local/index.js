import { client } from "@/api";
import Locals from "@/components/Blog/Locals";
import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import { Container, createStyles, Flex } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));
function LocalNews({ locals }) {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Flex direction="column" gap="md">
        <SEO />
        <Locals locals={locals} />
      </Flex>
    </Container>
  );
}
export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "local",
  });
  return { props: { locals: entries.items } };
}

export default withNavbarContainer(LocalNews);
