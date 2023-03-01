import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const localsDirectory = join(process.cwd(), "_locals");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getLocalSlugs() {
  return fs.readdirSync(localsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getLocalsBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(localsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content, slug: realSlug };
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts
    .filter((post) => post.publish !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllLocals() {
  const slugs = getLocalSlugs();
  const locals = slugs.map((slug) => getLocalsBySlug(slug));

  return locals;
}
