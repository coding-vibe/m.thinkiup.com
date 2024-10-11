import { Typography } from '@mui/material';
import Container from '@/components/Outlet/Container';
import Link from 'next/link';
import * as generalClasses from '@/styles/general';
import { LinkTXT, LINK } from './ContentBlockData';
import * as classes from './styles';

export default function ContentsBlock() {
  return (
    <div css={generalClasses.outletPadding}>
      <Container>
        <div css={classes.wrap}>
          <Typography css={generalClasses.bold} variant='h5'>CONTENTS</Typography>
          {LinkTXT.map(({ key, text }) => (
            <Link
              href={LINK}
              passHref
              target='blank'
              key={key}>
              <Typography
                variant='h6'
                component='span'
                mb='15px'
                css={[classes.link, generalClasses.bold]}
                rel='noopener noreferrer'
                style={{ cursor: 'pointer' }}>
                {text}
              </Typography>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
