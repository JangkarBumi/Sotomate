import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  // console.log(`User : ${userData.user} Loading: ${userData.loading} error : ${userData.error}`);

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
