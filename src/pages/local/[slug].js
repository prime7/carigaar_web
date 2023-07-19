import { client } from "@/api";
import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import { Container, Flex, Title } from "@mantine/core";
import React from "react";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Local({ local }) {
  return (
    <Container size="sm">
      <SEO title={local.title} />
      <article style={{ marginBottom: "50px", marginTop: "50px" }}>
        <Flex wrap="wrap" gap="xs">
          <Title size="h4">
            {local.title}
            <br />
            {local.date}
          </Title>
        </Flex>
        {documentToReactComponents(local.content)}
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
  const local = await client.getEntries({
    content_type: "local",
    "fields.slug": params.slug,
  });
  return { props: { local: local.items[0].fields } };
}
export async function getStaticPaths() {
  const entries = await client.getEntries({
    content_type: "local",
  });

  const locals = entries.items.map((item) => item.fields);
  const paths = locals.map((local) => ({ params: { ...local } }));

  return {
    paths,
    fallback: false,
  };
}
export default withNavbarContainer(Local);
