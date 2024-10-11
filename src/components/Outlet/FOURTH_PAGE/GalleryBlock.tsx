import ContentsBlock from '@/components/Outlet/FIRST_PAGE/SecondBlockContents/ContentsBlock';
import Container from '@/components/Outlet/Container';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material';
import * as generalClasses from '@/styles/general';
import * as classes from './style';
import { GalleryImage } from './GalleryBlockData';

export default function GalleryBlock() {
  const isMobileMainImg = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <div>
      <Container>
        <ContentsBlock />
        <div css={[classes.imageWrap, generalClasses.layoutPadding]}>
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? GalleryImage.Desktop1 : GalleryImage.Mobile1}
            css={classes.img}
          />
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? GalleryImage.Desktop2 : GalleryImage.Mobile2}
            css={classes.img}
          />
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? GalleryImage.Desktop3 : GalleryImage.Mobile3}
            css={classes.img}
          />
          <Image
            width={438}
            height={375}
            layout='responsive'
            alt='main image'
            src={isMobileMainImg ? GalleryImage.Desktop4 : GalleryImage.Mobile4}
            css={classes.img}
          />
        </div>
      </Container>
    </div>
  );
}
