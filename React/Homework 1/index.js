// fetch ile verileri çekmek.
// async function getData(userId) {
//   const user = await (
//     await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//   ).json();

//   const post = await (
//     await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//   ).json();

//   console.log("userId: ", user, "posts: ", post);
// }
// getData(2);

import getData from "./app.js";

console.log(getData);
