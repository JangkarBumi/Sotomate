import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
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
  );
}

export default Footer
