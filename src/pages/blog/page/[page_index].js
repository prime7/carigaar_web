import React from "react";
import { client } from "@/api";
import withNavbarContainer from "@/components/Nav";
import Posts from "@/components/Blog/Posts";
import SEO from "@/components/Seo";
import { useRouter } from "next/router";
import { Pagination, Flex, Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));

function BlogPage({ posts, numPages }) {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Flex direction="column" gap="md">
        <SEO title="Blog" />
        <Posts posts={posts} />
        <Pagination
          initialPage={1}
          onChange={(number) => router.push(`/blog/page/${number}`)}
          total={numPages}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </Flex>
    </Container>
  );
}

export async function getStaticPaths() {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });

  const numPages = Math.ceil(posts.items.length / 6);
  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const { total, items } = await client.getEntries({
    content_type: "blogPost",
    skip: page * 6 - 6,
    limit: 6,
  });

  const blogPosts = items.map((entry) => entry.fields);

  return {
    props: {
      posts: blogPosts,
      numPages: Math.ceil(total / 6),
    },
  };
}

export default withNavbarContainer(BlogPage);
