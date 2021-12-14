import Header from "../../components/Header";
import Storyblok from "../../lib/storyblok";
import styles from "../../styles/Post.module.css";

function PostDetails(props) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "3rem" }}>&nbsp;</div>
      <div id="post">
        <div
          className={styles.post_thumbnail}
          style={{ backgroundImage: `url("${props.thumbnail}")` }}
        ></div>
        <section className={styles.post_content}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  let sbParams = {
    version: "draft",
    starts_with: "blog/",
  };

  if (process.env.ENVIRONMENT === "production") {
    sbParams.version = "published";
  }

  let { data } = await Storyblok.get("cdn/stories", sbParams);

  return {
    fallback: "blocking",
    paths: data.stories.map((story) => ({
      params: { postId: story.slug },
    })),
  };
}

export async function getStaticProps(context) {
  const postId = context.params.postId;

  let sbParams = {
    version: "draft",
  };

  if (process.env.ENVIRONMENT === "production") {
    sbParams.version = "published";
  }

  let { data } = await Storyblok.get(`cdn/stories/blog/${postId}`, sbParams);

  return {
    props: {
      title: data.story.content.title,
      content: data.story.content.content,
      thumbnail: data.story.content.thumbnail,
    },
  };
}

export default PostDetails;
