import React from 'react';
import Image from 'next/image';

const PulsingLogoLoader = () => {
  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <Image
          src="/logo.svg"
          alt="Loading logo"
          width={150}
          height={150}
          className="pulsing-logo"
        />
      </div>
    </div>
  );
};

export default PulsingLogoLoader;