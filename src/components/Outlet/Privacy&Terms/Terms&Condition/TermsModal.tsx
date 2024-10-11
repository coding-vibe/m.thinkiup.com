import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as generalClasses from '@/styles/general';
import Link from 'next/link';
import * as classes from '@/components/Outlet/Privacy&Terms/style';
import TermsConditionModalContent from './TermsConditionModalContent';

export default function TermsModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [linkHref, setLinkHref] = useState<string>('');

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
    setLinkHref('#');
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setLinkHref('');
  };

  return (
    <>
      <Link
        href={linkHref}
        passHref
        css={classes.modalLink}
        onClick={handleOpenModal}>
        Terms & Conditions
      </Link>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}>
          <Box css={[generalClasses.outletPadding, classes.box]}>
            <TermsConditionModalContent />
          </Box>
        </Modal>
      )}
    </>
  );
}
