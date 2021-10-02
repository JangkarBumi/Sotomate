import { auth, googleAuthProvider } from '@lib/firebase';


export default function Signin ({}) {

  const user = null;

  return (
    <main>
      {user ? <SignOutButton/> : <SignInButton/> }
    </main>
  )
}


function SignInButton(){
  const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleAuthProvider);
  }
  return(
    <button onClick={signInWithGoogle}>
      Sign In with google
    </button>
  )
  // Add Try Catch to handle error
}

function SignOutButton(){
  return <button onClick={() => auth.signOut()}>Sign Out</button>
}