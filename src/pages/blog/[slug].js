import React from "react";
import { getAllPosts, getPostBySlug } from "@/api";
import withNavbarContainer from "@/components/Nav";
import PostDetail from "@/components/Blog/PostDetail";
import { useRouter } from "next/router";
import SEO from "@/components/Seo";
import { Container } from "@mantine/core";

function Post({ post, categories }) {
  const slug = useRouter().query.slug;

  return (
    <Container size="sm">
      <SEO title={post.title} url={slug} description={post.excerpt} />
      <PostDetail
        post={post}
        author={post.author}
        slug={slug}
        categories={categories}
      />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "content",
    "cover_image",
    "date",
    "author",
  ]);

  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const paths = posts.map((post) => ({ params: { ...post } }));

  return {
    paths,
    fallback: false,
  };
}

export default withNavbarContainer(Post);
