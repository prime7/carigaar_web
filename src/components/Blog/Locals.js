import React from "react";
import { Card, SimpleGrid, Text, createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "transform 150ms ease, box-shadow 150ms ease",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },
}));

export default function Locals({ locals }) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "md", cols: 2 },
      ]}
    >
      {locals.map((local) => (
        <Card
          key={local.slug}
          component={Link}
          href={`/local/${local.slug}`}
          shadow="sm"
          className={classes.card}
          withBorder
        >
          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          >
            {local.data.date}
          </Text>

          <Text className={classes.title} mt={5}>
            {local.data.title}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
