import Loader from '@components/Loader';
import { UserContext } from '@lib/context';
import { auth, googleAuthProvider } from '@lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function Signin() {
  const { user, loading } = useContext(UserContext);

  const router = useRouter();

  // if (user) {
  //   router.push('/dashboard');
  // }

  return (
    <main>
      {loading ? (
        <Loader show />
      ) : (
        !user && (
          <>
            <SignUpButton />
            <SignUp />
          </>
        )
      )}
    </main>
  );
}

function SignUpButton() {
  const signUpWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return <button onClick={signUpWithGoogle}>Sign Up with google</button>;
  // Add Try Catch to handle error
}

const SignUp = () => {
  // const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  // useEffect(() => {
  //   if (user) {
  //     router.push('/dashboard');
  //   }
  // }, [user]);

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create new account
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
        <input type="submit" className="btn btn-primary" value="Sign Up" />
      </form>
      <p className="my-1">
        Already have an account? <Link href="/sign-in">Sign In</Link>
      </p>
    </>
  );
};
