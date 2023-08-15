import axios from "axios";
import fetch from "node-fetch";

async function getData(userId) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  console.log("userId: ", user, "posts: ", posts);
  return { user, posts };
}
getData(1);

export default getData;
