import GameBlock from '@/components/Outlet/GameBlock';
import GalleryBlock from '@/components/Outlet/FOURTH_PAGE';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function GaleryPage() {
  return (
    <>
      <GameBlock />
      <GalleryBlock />
      <Disclaimer />
      <Sponsor />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Gallery',
    description: 'Explore our extensive gallery featuring stunning images and moments captured by Altitude X.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default GaleryPage;
