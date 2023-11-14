"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      {pathName !== "/login/loginadmin" ? (
        <ul>
          <li>
            <Link href="/login/loginadmin">Login Admin</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/login/loginuser">Login Regular User</Link>
          </li>
        </ul>
      )}
      {children}
    </div>
  );
};

export default Layout;
