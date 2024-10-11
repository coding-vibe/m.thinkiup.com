import SubmissionSucces from '@/components/Outlet/SubmissionSucces';
import { GetStaticProps } from 'next';

function SubmissionSuccess() {
  return <SubmissionSucces />;
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'AeroWay- Submission Success',
    description:
      'Your submission was successful! Thank you for getting in touch with Altitude X. We will review your submission and respond shortly.',
  };

  return {
    props: {
      meta,
    },
  };
};

export default SubmissionSuccess;
