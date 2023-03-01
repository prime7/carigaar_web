import { getAllLocals, getLocalsBySlug } from "@/api";
import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import { Container, Flex, Title } from "@mantine/core";
import React from "react";
import MDX from "@mdx-js/runtime";
import Link from "next/link";

function Local({ local }) {
  console.log(local);
  return (
    <Container size="sm">
      <SEO title={local.data.title} />
      <article style={{ marginBottom: "50px", marginTop: "50px" }}>
        <Flex wrap="wrap" gap="xs">
          <Title size="h4">
            {local.data.title}
            <br />
            {local.data.date}
          </Title>
        </Flex>

        <MDX>{local.content}</MDX>
        <Flex justify="space-between">
          <Link href="/local" passHref>
            Back to Local
          </Link>
        </Flex>
      </article>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const local = getLocalsBySlug(params.slug);
  return { props: { local } };
}
export async function getStaticPaths() {
  const locals = getAllLocals();
  const paths = locals.map((local) => ({ params: { ...local } }));

  return {
    paths,
    fallback: false,
  };
}
export default withNavbarContainer(Local);
