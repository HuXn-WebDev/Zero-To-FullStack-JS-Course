// File System - Callback API
import * as fs from "fs";

// Creating Directory
fs.mkdir("c:\\nodejs\\filesystem", (error) => {
  if (error) throw error;
  console.log("Directory Created...");
});

// Creating Directory - Path not required
// fs.mkdir("c:\\nodejs\\test\\demo", { recursive: true }, (error) => {
//   if (error) throw error;
//   console.log("Directory Created...");
// });

// Read content of directory
// fs.readdir("c:\\nodejs\\", (error, files) => {
//   if (error) throw error;
//   for (const file of files) {
//     console.log(file);
//   }
// });

// Remove Directory - Directory should be empty.
// fs.rmdir("c:\\nodejs\\fs", (error) => {
//   if (error) throw error;
//   console.log("Directory Removed");
// });

// Create & Write File
// fs.writeFile("readme.txt", "Hello Nodejs", (error) => {
//   if (error) throw error;
//   console.log("File Created ...");
// });

// Read File
// fs.readFile("readme.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// Append data into file
// fs.appendFile("readme.txt", "HuXn WebDev", (error) => {
//   if (error) throw error;
//   console.log("Data Appended ...");
// });

// Copy File
// fs.copyFile("readme.txt", "info.txt", (error) => {
//   if (error) throw error;
//   console.log("File Copied ...");
// });

// Get file information
// fs.stat("info.txt", (error, stats) => {
//   if (error) throw error;
//   console.log(stats.isDirectory());
//   console.log(stats.isFile());
// });
