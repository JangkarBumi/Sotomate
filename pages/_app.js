import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  // console.log(`User : ${userData.user} Loading: ${userData.loading} error : ${userData.error}`);

  const router = useRouter();

  const { user } = userData;

  useEffect(() => {
    if (user && !user.emailVerified) {
      router.push('/email-verification');
    }
    // if (user && user.emailVerified) {
    //   router.push('/dashboard');
    // }
  }, [user]);

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
