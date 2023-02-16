import React from "react";
import MDX from "@mdx-js/runtime";
import Link from "next/link";
import Image from "next/image";
import { Text, Flex, Title } from "@mantine/core";

const PostDetail = ({ post }) => {
  const components = {
    Image: (props) => <Image {...props} width="600" height="400" alt="asd" />,
  };
  return (
    <article style={{ marginBottom: "50px", marginTop: "50px" }}>
      <Flex wrap="wrap" gap="xs">
        <Image
          src={post.cover_image}
          width={800}
          height={400}
          alt="Banner image"
        />
        <Title size="h4">
          {post.title} - {post.date}
        </Title>
      </Flex>

      <MDX components={components}>{post.content}</MDX>
      <Flex justify="space-between">
        <Link href="/blog" passHref>
          Back to blog list
        </Link>
      </Flex>
    </article>
  );
};

export default PostDetail;
