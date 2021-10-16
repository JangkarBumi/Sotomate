import Loader from '@components/Loader';
import { UserContext } from '@lib/context';
import { auth, googleAuthProvider } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';

export default function Signin() {
  const { user, loading } = useContext(UserContext);

  const router = useRouter();

  return (
    <main>
      <Head>
        <title>Sign In | Sotomate</title>
        <meta property="og:title" content="Sign In" />
      </Head>

      {loading ? (
        <Loader show />
      ) : (
        !user && (
          <>
            <SignInButton />
            <Login />
          </>
        )
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return <button onClick={signInWithGoogle}>Sign In with google</button>;
  // Add Try Catch to handle error
}

const Login = () => {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link href="/sign-up">Sign Up</Link>
      </p>
    </>
  );
};
