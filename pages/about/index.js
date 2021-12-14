import Header from "../../components/Header";

import Storyblok from "../../lib/storyblok";

function About(props) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "3rem" }}>&nbsp;</div>
      <div style={{ width: 400, margin: "0 auto" }}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let sbParams = {
    version: "draft",
  };

  if (process.env.ENVIRONMENT === "production") {
    sbParams.version = "published";
  }

  let { data } = await Storyblok.get(`cdn/stories/about`, sbParams);

  return {
    props: {
      title: data.story.content.title,
      content: data.story.content.content,
    },
  };
}

export default About;
