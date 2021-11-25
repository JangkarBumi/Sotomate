import React from 'react'
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>About</h1>

      <ul>
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

        <li>
          <Link href="/privacy_policy">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/terms_and_policies">
            <a>Terms of Services</a>
          </Link>
        </li>
      </ul>

      <h1>Products</h1>

      <ul>
        <li>
          <Link href="/privacy_policy">
            <a>Facebook Post Scheduler</a>
          </Link>
        </li>
        <li>
          <Link href="/terms_and_policies">
            <a>Tweet Scheduler</a>
          </Link>
        </li>
      </ul>

      <h1>Use Cases</h1>

      <ul>
        <li>
          <Link href="/privacy_policy">
            <a>Social Media Manager</a>
          </Link>
        </li>
        <li>
          <Link href="/terms_and_policies">
            <a>Creator</a>
          </Link>
        </li>
        <li>
          <Link href="/terms_and_policies">
            <a>Small Business owner</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer
