import React from "react";
import { Card, SimpleGrid, Text, createStyles, Image } from "@mantine/core";
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

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },
  author: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

export default function Posts({ posts }) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "md", cols: 2 },
      ]}
    >
      {posts.map((post) => (
        <Card
          key={post.title}
          component={Link}
          href={`/blog/${post.slug}`}
          shadow="sm"
          className={classes.card}
          withBorder
        >
          <Card.Section>
            <Image
              src={post.cover.fields.file.url}
              alt={post.cover.fields.title}
              fill="true"
              height={130}
            />
          </Card.Section>

          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          >
            {post.date}
          </Text>

          <Text className={classes.title} mt={5}>
            {post.title}
          </Text>
          <Card.Section className={classes.author}>
            <Text>{post.author}</Text>
          </Card.Section>
        </Card>
      ))}
    </SimpleGrid>
  );
}
