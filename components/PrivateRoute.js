import Loader from '@components/Loader';
import { UserContext } from '@lib/context';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const PrivateRoute = (props) => {
  const router = useRouter();
  const { user, loading } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      router.push('sign-in');
    }
    if (user && !user.emailVerified) {
      router.push('email-verification');
    }
  }, [user]);

  return loading ? <Loader show /> : user && props.children;
};

export default PrivateRoute;
