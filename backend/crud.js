const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://jeffrey:03120312Jeff!@cluster0.emywofb.mongodb.net/HACKWESTERN?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  // try {
  //   await client.connect();
  //   await read(client , "dhuang");
  // } finally {
  //   await client.close();
  // }
}
// main().catch(console.error);

async function create(client , firstname , username , password) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .insertOne({
    firstname: firstname,
    username: username,
    password: password,
  })

  if (result) {
    console.log(result);
    validInput = true;
  } else {
    console.log(`Error Creating User`);
  }
}

async function read(client , username) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .findOne({ 
    username: username
  });

  if (result) {
    console.log(result);
  } else {
    console.log(`No Listings Found With that Name`);
  }
}

async function update(client , username , goal) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .updateOne(
    {username: username},
    {$set: {goal: goal}}
  )

  if (result) {
    console.log(result);
  } else {
    console.log(`Error Updating Goal`)
  }
}

async function destroy(client , username) {
  const result = await client
  .db("HACKWESTERN")
  .collection("Users")
  .deleteOne(
    {username: username}
  )

  if (result) {
    console.log(result);
  } else {
    console.log(`Error Deleting User`)
  }
}

module.exports = {
  create ,
  read ,
  update ,
  destroy ,
};