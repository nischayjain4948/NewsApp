
import NavLink from "./nav-link";
import Link from "next/link";
export default function MainHeader() {

  return (
    <>
      <header id="main-header">
        <div id="logo">
          <NavLink href="/">NextNews</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink href="/news">News</NavLink>
            </li>
            <li>
              <NavLink href="/archive">Archive</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}