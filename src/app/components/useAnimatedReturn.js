'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAnimatedReturn = (returnPath) => {
  const router = useRouter();

  useEffect(() => {
    window.history.pushState({}, '', window.location.pathname);

    const handleBackButton = async (e) => {
      window.history.pushState({}, '', window.location.pathname);

      await new Promise(resolve => setTimeout(resolve, 0)); 
      router.push(returnPath);
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };

  }, [router]);
};
