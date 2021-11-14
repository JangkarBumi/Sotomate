import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
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
      <h1>Nav</h1>
       <a className="logo" href="/"><img src="/logo.svg" alt="logo"/></a>
    </div>
  );
}
