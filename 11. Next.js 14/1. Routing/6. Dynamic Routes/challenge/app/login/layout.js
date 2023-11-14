"use client";

import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <div>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to main login page</Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
