import Link from "next/link";
import styles from "../styles/PostPreview.module.css";

function PostPreview(props) {
  // console.log(props.posts.stories);

  return (
    <div id={styles.post}>
      {props.posts.stories.map((post) => (
        <Link href={post.slug} key={post.slug}>
          <article className={styles.post_preview}>
            <div
              style={{ backgroundImage: `url("${post.content.thumbnail}")` }}
              className={styles.post_preview_thumbnail}
            ></div>
            <div className={styles.post_preview_content}>
              <h1>{post.content.title}</h1>
              <p>{post.content.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default PostPreview;
