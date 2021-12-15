import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";

import styles from "../styles/PostPreview.module.css";

function PostPreview(props) {
  return (
    <div id={styles.post} {...sbEditable(props.blok)}>
      {props.posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <article className={styles.post_preview}>
            <div
              style={{ backgroundImage: `url("${post.thumbnailUrl}")` }}
              className={styles.post_preview_thumbnail}
            ></div>
            <div className={styles.post_preview_content}>
              <h1>{post.title}</h1>
              <p>{post.previewText}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default PostPreview;
