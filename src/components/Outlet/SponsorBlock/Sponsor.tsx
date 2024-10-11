import Image from 'next/image';
import Link from 'next/link';
import * as classes from './style';
import { Sponsors } from './SponsorData';

export default function Sponsor() {
  return (
    <div css={classes.logoWrap}>
      <div css={classes.scrollContainer}>
        {Sponsors.concat(Sponsors).map((sponsor) => (
          <Link
            key={sponsor.id}
            href={sponsor.link}
            passHref
            target='_blank'
            css={classes.logo}>
            <Image
              alt='sponsors logo'
              layout='responsive'
              width={210}
              height={90}
              src={sponsor.logo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
