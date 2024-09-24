'use client';


import DigitalBusinessCard from '../../components/DigitalBusinessCard';
import { useState, useEffect } from 'react';
import PulsingLogoLoader from '../../components/PulsingLogoLoader'


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const randomLoadingTime = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000)

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, randomLoadingTime);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PulsingLogoLoader />;
  }

  return (
    <DigitalBusinessCard />
  );

}
