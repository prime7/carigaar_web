import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Title } from "@mantine/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  return (
    <article style={{ marginBottom: "50px", marginTop: "50px" }}>
      <Flex wrap="wrap" gap="xs">
        <Image
          src={post.cover.fields.file.url}
          width={800}
          height={400}
          alt="Banner image"
        />
        <Title size="h4">
          {post.title} - {post.date}
        </Title>
      </Flex>
      {documentToReactComponents(post.content)}
      <Flex justify="space-between">
        <Link href="/blog" passHref>
          Back to blog list
        </Link>
      </Flex>
    </article>
  );
};

export default PostDetail;
