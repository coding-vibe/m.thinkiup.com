import GameBlock from '@/components/Outlet/GameBlock';
import ContentsBlock from '@/components/Outlet/FIRST_PAGE/SecondBlockContents/ContentsBlock';
import Form from '@/components/Outlet/ContactUsSection/Form';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function ContactUsPage() {
  return (
    <div>
      <GameBlock />
      <ContentsBlock />
      <Form />
      <Disclaimer />
      <Sponsor />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Contact Us',
    description: 'Get in touch with us for any queries or support.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default ContactUsPage;
