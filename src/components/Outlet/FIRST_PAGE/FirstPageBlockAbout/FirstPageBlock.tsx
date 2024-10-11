import Image from 'next/image';
import { Theme, Typography } from '@mui/material';
import Container from '@/components/Outlet/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as generalClasses from '@/styles/general';
import { ImagePath, firstPage } from './FirstPageBlockData';
import * as classes from './style';

export default function FirstPageBlock() {
  const isMobileMainImg = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <div css={generalClasses.layoutPadding}>
      <Container>
        <div css={classes.wrap}>
          <div css={classes.txtContent}>
            <Typography
              css={generalClasses.bold}
              variant='h4'
              component='h4'>
              {firstPage.title1}
            </Typography>
            <Typography
              css={generalClasses.semibold}
              component='p'
              variant='body1'>
              {firstPage.description1}
            </Typography>
          </div>
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? ImagePath.ImageDesk1 : ImagePath.ImageMob1}
            css={classes.img}
          />
        </div>
        <div css={[classes.wrap, classes.wrapRev]}>
          <div css={classes.txtContent}>
            <Typography
              css={generalClasses.bold}
              variant='h4'
              component='h4'>
              {firstPage.title2}
            </Typography>
            <Typography
              css={generalClasses.semibold}
              component='p'
              variant='body1'>
              {firstPage.description2}
            </Typography>
          </div>
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? ImagePath.ImageDesk2 : ImagePath.ImageMob2}
            css={classes.img}
          />
        </div>
        <div style={{ marginBottom: '100px' }}>
          <Typography
            css={generalClasses.bold}
            variant='h4'
            component='h4'
            mb='20px'>
            {firstPage.title3}
          </Typography>
          <Typography
            css={generalClasses.semibold}
            component='p'
            variant='h6'
            mb='50px'>
            {firstPage.description3}
          </Typography>
          <Image
            width={800}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? ImagePath.ImageDesk3 : ImagePath.ImageMob3}
            css={classes.img}
          />
        </div>
      </Container>
    </div>
  );
}
