import { auth, firestore } from '@lib/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
    }
    return unsubscribe;
  }, [user]);

  return { user, loading, error };
}
