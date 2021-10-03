import { UserContext } from '@lib/context';
import { auth, googleAuthProvider } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function Signin() {
  const { user } = useContext(UserContext);

  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }

  return (
    <main>
      {!user && (
        <>
          <SignInButton />
          <Login />
        </>
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

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

const Login = ({ login, isAuthenticated }) => {
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

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
