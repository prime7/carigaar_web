import React, { useEffect, useState } from "react";
import withNavbarContainer from "@/components/Nav";
import {
  Card,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import axios from "axios";
import SEO from "@/components/Seo";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },
  image: {
    maxWidth: "30%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));
function Services() {
  const { classes } = useStyles();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://carigaar.ca/api/category/").then((res) => {
      setCategories(
        res.data
          .filter((item) => item.featured === true)
          .filter((val, i) => i < 16) // limiting by 16
      );
    });
  }, []);
  return (
    <Container className={classes.wrapper}>
      <SEO />
      <Title className={classes.title}>Featured Categories</Title>
      <SimpleGrid
        cols={8}
        breakpoints={[
          { maxWidth: "lg", cols: 8, spacing: "lg" },
          { maxWidth: "md", cols: 4, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
        ]}
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            withBorder
            radius="md"
            className={classes.card}
          >
            <Image
              className={classes.image}
              src={category.image}
              alt={category.name}
            />

            <Text size="xs" mt={7}>
              {category.name}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default withNavbarContainer(Services);
