import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoPaths, Routes } from '@/components/Layout/Footer/footerData';
import * as generalClasses from '@/styles/general';

interface Props {
  className?: string;
}

const DESKTOP_LOGO_DIMENSIONS = {
  height: 50,
  width: 280,
};

const MOBILE_LOGO_DIMENSIONS = {
  height: 30,
  width: 210,
};

export default function Logo({ className }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetHash = event.currentTarget.hash;
    const targetElement = targetHash ? document.querySelector(targetHash) : null;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={Routes.Home_Page}
      onClick={handleClick}>
      <div css={generalClasses.desktop}>
        <Image
          alt='desktop logo'
          className={className}
          height={DESKTOP_LOGO_DIMENSIONS.height}
          src={LogoPaths.Desktop}
          width={DESKTOP_LOGO_DIMENSIONS.width}
        />
      </div>
      <div css={generalClasses.mobile}>
        <Image
          alt='mobile logo'
          className={className}
          css={{ cursor: 'pointer' }}
          height={MOBILE_LOGO_DIMENSIONS.height}
          src={LogoPaths.Mobile}
          width={MOBILE_LOGO_DIMENSIONS.width}
        />
      </div>
    </Link>
  );
}
