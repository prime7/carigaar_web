import React from "react";
import { getAllPosts, getPostSlugs } from "@/api";
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
  const posts = getPostSlugs();

  const numPages = Math.ceil(posts.length / 6);
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
  const files = getPostSlugs();

  const posts = getAllPosts(["title", "slug", "cover_image", "date", "author"]);
  const numPages = Math.ceil(files.length / 6);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * 6, (pageIndex + 1) * 6);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}

export default withNavbarContainer(BlogPage);
