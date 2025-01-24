// using ES 6 syntax, edit the package.json, add module
//for example, building blog api, blog post

const posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
];


const getPosts = () => posts
export default getPosts;

export const getPostLength = () => posts.length