const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jeffrey:03120312Jeff!@cluster0.emywofb.mongodb.net/HACKWESTERN?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
// async function main() {
//   try {
//     await client.connect();
//     // await client
//     //   .db("HACKWESTERN")
//     //   .collection("Users")
//     //   .updateMany({}, { $set: { postData: [{ posts: "", goals: "" }] } });
//     // await findOneListingByName(client);
// //   } finally {
// //     await client.close();
// //   }
//   }
// }
// main().catch(console.error);

async function findOneListingByName() {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .findOne({ firstname: "Collin" });

  if (result) {
    console.log(result);
  } else {
    console.log(`No listings found with the name`);
  }
}

async function savePosts(posts) {
  //   const result = await client.db("HACKWESTERN").collection("Users").save(posts);
  let user = await client
    .db("HACKWESTERN")
    .collection("Users")
    .findOne({ username: posts.username });
  console.log(posts);
  console.log(user);
  //   let userId = user._id

  //   let newEmail = "asdf@asdf.com"

  let result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .updateOne(
      { username: user.username },
      {
        $set: {
          postData: posts.postData,
        },
      }
    );

  //   if (updated) {
  //       console.log("updated")
  //   }
  if (result) {
    console.log(result);
  } else {
    console.log(`Save failed`);
  }
}

module.exports = {
  findOneListingByName,
  savePosts,
};
