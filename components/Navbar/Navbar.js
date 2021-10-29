import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const user = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.push('sign-in');
  };

  return (
    <nav className={[styles.navbar]}>
      <ul>
          <Link href="/">
            <h1>Sotomate</h1>
          </Link>

        {/* <ul> */}
          <li>
            <span>Pricing</span>
          </li>
          <li>
            <span>Features</span>
          </li>
          <li>
            <span>About</span>
          </li>
        {/* </ul> */}

        {/* Authenticated User */}
        {user.user && (
          <ul>
            <li>
              <Link href="/dashboard">
                <button>Dashboard</button>
              </Link>
            </li>
            <li>
              <button onClick={signOut}> Logout</button>
            </li>
          </ul>
        )}
        {/* Guest */}
        {!user.user && (
          <ul>
            <li>
              <Link href="/sign-in">
                <button id="login">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <button id="signup">Signup</button>
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
