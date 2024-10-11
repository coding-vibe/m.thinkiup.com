import Image from 'next/image';
import Container from '@/components/Outlet/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Theme } from '@mui/material';
import * as generalClasses from '@/styles/general';
import { product, MainImagePath } from './ProductBlockData';
import * as classes from './style';

export default function ProductBlock() {
  const isMobileMainImg = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <div css={generalClasses.layoutPadding}>
      <Container>
        <Image
          width={800}
          height={375}
          layout='responsive'
          alt='main image'
          src={isMobileMainImg ? MainImagePath.Desktop : MainImagePath.Mobile}
          css={classes.img}
        />
        <div>
          <Typography
            css={generalClasses.bold}
            variant='h4'
            component='h4'
            mt='50px'>
            {product.title}
          </Typography>
          <Typography
            component='p'
            variant='body1'
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </Container>
    </div>
  );
}
