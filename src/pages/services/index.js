import React, { useEffect, useState } from "react";
import withNavbarContainer from "@/components/Nav";
import {
  Button,
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
import Link from "next/link";

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
  apply: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing.xl * 3,
    textDecoration: "none",
  },
  controls: {
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 720px)": {
      flexDirection: "column",
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
      <Link href="/apply" className={classes.apply}>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          What do you need done?
        </Button>
      </Link>
      <div className={classes.controls}>
        <a href="https://play.google.com/store/apps/details?id=com.carigaar.app">
          <Image
            src="/play.svg"
            width="150"
            height="60"
            alt="Get it on Play store"
            border="0"
            style={{
              marginRight: 20,
            }}
          />
        </a>
        <a href="https://apps.apple.com/ca/app/carigaar/id1589623263">
          <Image
            src="/apple.svg"
            width="150"
            height="60"
            alt="Get it on Apple store"
            border="0"
          />
        </a>
      </div>
    </Container>
  );
}

export default withNavbarContainer(Services);
