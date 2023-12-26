// The path module provides utilities for working with file and directory paths.
const path = require("path");

// Base Name ✅
console.log(path.basename("c:/nodejs/index.js"));
// console.log(__filename);
console.log(path.basename(__filename));

// omit extenction ✅
// console.log(path.basename(__filename, ".js"));

// Directory Name ✅
// console.log(path.dirname("c:/nodejs/path/index.js"));
// console.log(path.dirname(__filename));

// Extenction ✅
// console.log(path.extname("c:/nodejs/path/index.js"));
// console.log(path.extname(__filename));

// Join✅
// console.log(path.join("/c:", "huxn-webdev", "course", "golang", "structs"));

// Go Up a level ✅
// console.log(
//   path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..")
// );
// console.log(
//   path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..", "..")
// );

// Normalize ✅
// console.log(path.normalize("c:\\courses\\\\redux-course\\"));
// console.log(
//   path.normalize("c:\\courses\\\\redux-course\\store\\\features\\..")
// );
// console.log(path.win32.normalize("C://projects//react///advance-search//"));

// Parse ✅
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).name);
// console.log(path.parse(__filename).ext);
