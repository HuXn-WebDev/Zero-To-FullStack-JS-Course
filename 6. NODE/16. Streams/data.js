import fs from "fs";

for (let i = 0; i <= 10000; i++) {
  fs.writeFileSync("./test.txt", `${i}\n`, { flag: "a" });
}
