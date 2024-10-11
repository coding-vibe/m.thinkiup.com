import GameBlock from '@/components/Outlet/GameBlock';
import AboutBlock from '@/components/Outlet/SECOND_PAGE';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function AboutPage() {
  return (
    <>
      <GameBlock />
      <AboutBlock />
      <Disclaimer />
      <Sponsor />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- About Us',
    description: 'Get in touch with us for any queries or support.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default AboutPage;
