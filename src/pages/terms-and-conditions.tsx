import TermsConditionModalContent from '@/components/Outlet/Privacy&Terms/Terms&Condition/TermsConditionModalContent';
import GameBlock from '@/components/Outlet/GameBlock';
import * as generalClasses from '@/styles/general';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';
import { GetStaticProps } from 'next';

function TermsAndConditions() {
  return (
    <div>
      <GameBlock />
      <div css={generalClasses.layoutPadding}>
        <TermsConditionModalContent />
      </div>
      <Disclaimer />
      <Sponsor />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Terms and Conditions',
    description:
      'Read through Altitude X`s terms and conditions. Understand our policies regarding usage, privacy, and responsibilities.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default TermsAndConditions;
