import GameBlock from '@/components/Outlet/GameBlock';
import ProductBlock from '@/components/Outlet/THIRD_PAGE/ProductBlock';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function ProductPage() {
  return (
    <>
      <GameBlock />
      <ProductBlock />
      <Disclaimer />
      <Sponsor />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Product',
    description:
      'Discover the innovative features of Altitude X. Learn how our product can elevate your experience and take you to new heights.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default ProductPage;
