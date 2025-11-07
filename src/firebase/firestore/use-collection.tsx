'use client';

import { useState, useEffect, useRef } from 'react';
import {
  onSnapshot,
  query,
  Query,
  QuerySnapshot,
  FirestoreError,
} from 'firebase/firestore';
import type { WithId } from '@/firebase';

export function useCollection<T = any>(
  q: Query | null | undefined
): { data: WithId<T>[] | null; isLoading: boolean; error: Error | null } {
  const [data, setData] = useState<WithId<T>[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const initialLoadingDone = useRef(false);

  useEffect(() => {
    if (!q) {
      setData(null);
      setIsLoading(false);
      setError(null);
      initialLoadingDone.current = false;
      return;
    }

    if (!initialLoadingDone.current) {
      setIsLoading(true);
    }
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot) => {
        const results = snapshot.docs.map(doc => ({
          ...(doc.data() as T),
          id: doc.id,
        }));
        setData(results);
        if (!initialLoadingDone.current) {
          setIsLoading(false);
          initialLoadingDone.current = true;
        }
        setError(null);
      },
      (err: FirestoreError) => {
        console.error('useCollection error:', err);
        setError(err);
        setIsLoading(false);
      }
    );

    // Set loading to false once the listener is attached.
    // This provides a faster perceived load time.
    if (!initialLoadingDone.current) {
        setIsLoading(false);
    }

    return () => {
      unsubscribe();
      initialLoadingDone.current = false;
    }
  }, [q]);

  return { data, isLoading, error };
}
