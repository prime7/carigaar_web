import React from "react";
import { client } from "@/api";
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
      <PostDetail post={post} author={post.author} slug={slug} />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return { props: { post: post.items[0].fields } };
}

export async function getStaticPaths() {
  const entries = await client.getEntries({
    content_type: "blogPost",
  });

  const posts = entries.items.map((item) => item.fields);
  const paths = posts.map((post) => ({ params: { ...post } }));

  return {
    paths,
    fallback: false,
  };
}

export default withNavbarContainer(Post);
