const fs = require("fs");

run();

async function run() {
  fs.writeFile("msg.txt", "Hello World!", (err) => {
    if (err) throw err;
    console.log("File created successfully");
  });

  fs.readFile("msg.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  const content = "Some content!";

  fs.appendFileSync("msg.txt", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Content added!");
  });

  fs.unlink("msg.txt", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File removed");
  });
}
