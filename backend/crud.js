const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jeffrey:03120312Jeff!@cluster0.emywofb.mongodb.net/HACKWESTERN?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();

async function create(firstname, username, password) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .insertOne({
    firstname: firstname,
    username: username,
    password: password,
  });

  if (result) {
    console.log(result);
    validInput = true;
  } else {
    console.log(`Error Creating User`);
  }
}

async function read(username) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .findOne({
    username: username,
  });

  if (result) {
    console.log(result);
  } else {
    console.log(`No Listings Found With that Name`);
  }
}

async function update(username, goal) {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .updateOne(
      { username: username }, 
      { $set: { goal: goal } 
    });

  if (result) {
    console.log(result);
  } else {
    console.log(`Error Updating Goal`);
  }
}

async function destroy(username) {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .deleteOne(
      { username: username }
    );

  if (result) {
    console.log(result);
  } else {
    console.log(`Error Deleting User`);
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
      {$set:
        {
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
  savePosts,
  create,
  read,
  update,
  destroy,
};
