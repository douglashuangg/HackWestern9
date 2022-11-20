const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://jeffrey:03120312Jeff!@cluster0.emywofb.mongodb.net/HACKWESTERN?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await findOneListingByName(client);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function findOneListingByName(client) {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .findOne({ firstname: "Jeffrey" });

  if (result) {
    console.log(result);
  } else {
    console.log(`No listings found with the name`);
  }
}
