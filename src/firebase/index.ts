'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseSdks {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
let firebaseServices: FirebaseSdks | null = null;
export function initializeFirebase(): FirebaseSdks {
  if (firebaseServices) {
    return firebaseServices;
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  
  firebaseServices = {
    app: app,
    auth,
    firestore,
  };
  return firebaseServices;
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './errors';
export * from './error-emitter';
export { setDocumentNonBlocking, addDocumentNonBlocking, updateDocumentNonBlocking, deleteDocumentNonBlocking } from './non-blocking-updates';