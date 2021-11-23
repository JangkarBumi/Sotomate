import React from 'react'
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>Why Sotomotate?</h1>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a>Features</a>
          </Link>
        </li>

        <li>

        <Link href="/">
          <a>Pricing</a>
        </Link>
        </li>

        <li>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
        </li>
      </ul>



          <Link href="/privacy_policy">
            <a>Privacy Policy</a>
          </Link>

          <Link href="/terms_and_policies">
            <a>Terms of Services</a>
          </Link>

    </footer>
  );
}

export default Footer
