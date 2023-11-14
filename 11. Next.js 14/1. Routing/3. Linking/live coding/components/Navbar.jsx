import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="links-container">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
