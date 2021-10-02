import Link from 'next/link';

export default function Navbar() {
  const  user = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>HOME</button>
          </Link>
        </li>

        {/* Authenticated User */}
        {user && (
          <>
            <li>
              <Link href="/logout">
                <button> Logout</button>
              </Link>
            </li>
          </>
        )}
        {/* Guest */}
        {!user && (
          <ul>
          <li>
            <Link href="/signin">
              <button>Login</button>
            </Link>
          </li>
           <li>
            <Link href="/signup">
              <button>Signup</button>
            </Link>
          </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
