import FirstBlock from '@/components/Outlet/GamePage/FirstBlock';
import { GetStaticProps } from 'next';

function GamePage() {
  return <FirstBlock />;
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- The Game',
    description:
      'Immerse yourself in the thrilling adventure of Altitude X. Take to the skies, complete challenging missions, and become the ultimate pilot.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default GamePage;
