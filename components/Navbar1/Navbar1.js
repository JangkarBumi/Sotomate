import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import styles from './Navbar1.module.css';

export default function Navbar() {
  const user = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.push('sign-in');
  };

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <Link href="/">
          <img className={styles.logo} src="/logo.svg" alt="logo" />
        </Link>
        <div>
          {isOpen ? (
            <MdOutlineClose
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <GiHamburgerMenu
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      <ul className={isOpen ? styles.flex: styles.links }>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <Link href="/signup">
            <button className={styles.button}>Signup</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
