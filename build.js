
const fs = require("fs");

fs.copyFileSync("app.js", "artifact.js");
console.log("Build completed successfully.");
