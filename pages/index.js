import Header from "../components/Header";
import PostPreview from "../components/PostPreview";

import Storyblok from "../lib/storyblok";

export default function Home(props) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "3rem" }}>&nbsp;</div>
      <PostPreview posts={props.stories} />
    </>
  );
}

export async function getStaticProps() {
  let sbParams = {
    version: "draft",
    starts_with: "blog/",
  };

  if (process.env.ENVIRONMENT === "production") {
    sbParams.version = "published";
  }

  let { data } = await Storyblok.get("cdn/stories", sbParams);

  return {
    props: {
      stories: data.stories.map((story) => ({
        id: story.slug,
        title: story.content.title,
        previewText: story.content.summary,
        thumbnailUrl: story.content.thumbnail,
      })),
    },
    props: {
      stories: data,
    },
    revalidate: 3600,
  };
}
