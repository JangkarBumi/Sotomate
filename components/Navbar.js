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
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <button>HOME</button>
          </Link>
        </li>

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
