import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function ToTop() {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      (document.getElementById('top') as HTMLDivElement).scrollIntoView();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
  }, []);

  return null;
}
