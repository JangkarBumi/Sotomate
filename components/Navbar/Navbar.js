import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const user = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.push('sign-in');
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={[styles.navbar]}>

<div>
      <Link href="/">
        <h1>Sotomate</h1>
      </Link>

      <ul className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
</div>

      <ul className={isOpen ? styles.show : styles.hide}>
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
                <button className={styles.signin_button}>Login</button>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <button className={styles.signup_button}>Signup</button>
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
