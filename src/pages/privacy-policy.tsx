import GameBlock from '@/components/Outlet/GameBlock';
import PrivacyPolicyModalContent from '@/components/Outlet/Privacy&Terms/PrivacyPolicy/PrivacyPolicyModalContent';
import * as generalClasses from '@/styles/general';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function PrivacyPolicyPage() {
  return (
    <div>
      <GameBlock />
      <div css={generalClasses.layoutPadding}>
        <PrivacyPolicyModalContent />
      </div>
      <Disclaimer />
      <Sponsor />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Privacy Policy',
    description: 'Read our privacy policy to understand how we handle your data.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default PrivacyPolicyPage;
