export const SITE = {
  website: "https://luisdoesdev.com/", // replace this with your deployed domain
  author: "Luis Torruella",
  profile: "https://luisdoesdev.com/about/",
  desc: "Using systems...",
  title: "@luisdoesdev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
