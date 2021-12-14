import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORY_BLOK,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
