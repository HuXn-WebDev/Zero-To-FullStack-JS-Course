// fs promise API
import * as fs from "fs/promises";

// Creating Directory - Path should be there. 🥂
try {
  await fs.mkdir("c:\\nodejs\\fs");
  console.log("Directory Created ...");
} catch (error) {
  console.log(error);
}

// Path is not required 🥂
// try {
//   await fs.mkdir("c:\\nodejs\\fs\\index", { recursive: true });
//   console.log("Directory Created ...");
// } catch (error) {
//   console.log(error);
// }

// Read content of directory 🥂
// try {
//   const files = await fs.readdir("c:\\nodejs\\fs\\hello");
//   for (let file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Directory 🥂
// try {
//   await fs.rmdir("c:\\nodejs\\fs\\hello");
//   console.log("Directory Removed...");
// } catch (error) {
//   console.log(error);
// }

// Create and Write File 😊
// try {
//   await fs.writeFile("readme.md", "Hello Nodejs :)");
// } catch (error) {
//   console.log(error);
// }

// Read File 😊
// try {
//   const data = await fs.readFile("readme.md");
//   console.log(data); // returns buffer ⚠️
// } catch (error) {
//   console.log(error);
// }

// try {
//   const data = await fs.readFile("readme.md", "utf-8"); // Actual Data
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Append Data Into File
// try {
//   await fs.appendFile("readme.md", "Hello HuXn");
// } catch (error) {
//   console.log(error);
// }

// Copy File 😊
// try {
//   // await fs.copyFile("readme.md", "c:\\nodejs\\fs\\info.txt");
//   await fs.copyFile("readme.md", "info.txt");
//   console.log("File Copied");
// } catch (error) {
//   console.log(error);
// }

// Get File Information 😊
// try {
//   const info = await fs.stat("c:\\nodejs\\fs\\info.txt");
//   // console.log(info); // returns object
//   console.log(info.isDirectory());
//   console.log(info.isFile());
// } catch (error) {
//   console.log(error);
// }
