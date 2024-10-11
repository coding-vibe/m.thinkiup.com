import Image from 'next/image';
import Container from '@/components/Outlet/Container';
import { Typography } from '@mui/material';
import * as generalClasses from '@/styles/general';
import { disclaimer, ImagePath } from './DisclaimerData';

export default function Disclaimer() {
  return (
    <div css={generalClasses.layoutPadding}>
      <Container>
        <Typography
          css={generalClasses.bold}
          variant='h4'
          component='h4'
          mb='20px'>
          {disclaimer.title}
        </Typography>
        <Image
          src={ImagePath.svgPath}
          alt='18img'
          width={46}
          height={46}
          style={{
            marginBottom: '20px',
          }}
        />
        <Typography
          css={generalClasses.semibold}
          component='p'
          variant='body1'>
          {disclaimer.description}
        </Typography>
      </Container>
    </div>
  );
}
