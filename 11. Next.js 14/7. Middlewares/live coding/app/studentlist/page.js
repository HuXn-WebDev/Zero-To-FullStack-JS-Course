"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StudentList = () => {
  const users = ["huxn", "jordan", "hasan", "john"];

  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link href={`/studentlist/${user}`}>{user}</Link>
          </li>
        ))}

        {/* <li>
          <Link href="/studentlist/huxn">HuXn</Link>
        </li>
        <li>
          <Link href="/studentlist/jordan">Jordan</Link>
        </li>
        <li>
          <Link href="/studentlist/hasan">Hasan</Link>
        </li>
        <li>
          <Link href="/studentlist/john">John</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default StudentList;
