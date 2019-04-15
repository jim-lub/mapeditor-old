import { useContext } from 'react';

import { FirebaseContext } from 'lib/firebase';

export const useFirebase = () => {
  return useContext(FirebaseContext);
}
