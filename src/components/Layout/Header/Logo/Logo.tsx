import Image from 'next/image';
import Link from 'next/link';
import { LogoPaths, Routes } from '@/components/Layout/Header/headerData';
import * as generalClasses from '@/styles/general';

interface Props {
  className?: string;
}

const DESKTOP_LOGO_DIMENSIONS = {
  height: 30,
  width: 300,
};

const MOBILE_LOGO_DIMENSIONS = {
  height: 30,
  width: 150,
};

export default function Logo({ className }: Props) {
  return (
    <Link href={Routes.Home_Page}>
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
          height={MOBILE_LOGO_DIMENSIONS.height}
          src={LogoPaths.Mobile}
          width={MOBILE_LOGO_DIMENSIONS.width}
        />
      </div>
    </Link>
  );
}
