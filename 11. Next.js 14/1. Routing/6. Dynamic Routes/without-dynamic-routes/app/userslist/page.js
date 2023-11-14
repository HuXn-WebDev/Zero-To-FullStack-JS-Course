"use client";
import Link from "next/link";

const UsersList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link href="/userslist/alex">Alex</Link>
        </li>
        <li>
          <Link href="/userslist/jordan">Jordan</Link>
        </li>
        <li>
          <Link href="/userslist/huxn">HuXn</Link>
        </li>
        <li>
          <Link href="/userslist/john">John</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
