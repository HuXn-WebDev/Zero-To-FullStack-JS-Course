import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 1. All User Data
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

// 4. Create User
export async function POST(req, res) {
  // Getting Data From User
  let { id, name, email, password } = await req.json();

  // Checking If the data is provided
  if (!name || !email || !password) {
    return NextResponse.json(
      { result: "required field not found" },
      { status: 400 }
    );
  } else {
    // Add the new user to the in-memory array
    users.push({ id, name, email, password });

    // Extract just the users array from the updated data
    const updatedUsersArray = users;

    // Convert the updated users array to a JSON string
    const updatedData = JSON.stringify(updatedUsersArray, null, 2);

    // Write the updated data back to the db.js file
    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData};`,
      "utf-8"
    );

    return NextResponse.json({ success: "User Successfully Created" });
  }
}

// 5. Update User
export async function PUT(req, res) {
  const { id, name, email, password } = await req.json();

  // Find the user in the users array by ID
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  if (name) {
    users[userIndex].name = name;
  }

  if (email) {
    users[userIndex].email = email;
  }

  if (password) {
    users[userIndex].password = password;
  }

  // Update the user data in the db.js file
  const updatedUsersArray = users;
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: "User Successfully Updated" });
}
