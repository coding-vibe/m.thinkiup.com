import Image from 'next/image';
import * as classes from './styles';

const IMAGE_DIMENSIONS = {
  height: 200,
  width: 200,
};

export default function LoadingScreen() {
  return (
    <div>
      <div css={classes.wrap} />
      <Image
        alt='infinity_loader'
        css={classes.infinityLoader}
        height={IMAGE_DIMENSIONS.height}
        src='/icons/preloader.svg'
        width={IMAGE_DIMENSIONS.width}
      />
    </div>
  );
}
