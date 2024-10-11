import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { keyframes } from '@mui/system';
import Button from '@/components/Outlet/Button';
import { useState, useEffect } from 'react';
import * as generalClasses from '@/styles/general';
import { MainImagePath, firstBlock, GAMELINK } from './firstBlockData';
import * as classes from './styles';
import ConfirmModal from '../ConfirmModal';

interface Props {
  className?: string;
}

export default function FirstBlock({ className }: Props) {
  const isMobileMainImg = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const [isIframeOpen, setIsIframeOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({ email: '', terms: false });

  useEffect(() => {
    setIsOpenConfirmModal(true);
  }, []);

  const handleEmailFormSubmit = (data: { email: string; terms: boolean }) => {
    localStorage.setItem('formData', JSON.stringify(data));
    setIsOpenConfirmModal(false);
    setIsIframeOpen(true);
  };

  const handleIframeClose = () => {
    setIsIframeOpen(false);
  };

  return (
    <section
      className={className}
      css={[classes.section, generalClasses.sectionWithBackgroundImage]}>
      <div css={[classes.wrap, generalClasses.outletPadding]}>
        <Image
          width={1332}
          height={800}
          alt='main image'
          src={isMobileMainImg ? MainImagePath.ImageDesk : MainImagePath.ImageMob}
          css={classes.img}
        />
        <Button
          size='large'
          text={firstBlock.content.buttonText}
          onClick={() => {
            const savedData = localStorage.getItem('formData');
            if (savedData) {
              const parsedData = JSON.parse(savedData);
              setFormData(parsedData);
              setIsIframeOpen(true);
            } else {
              setIsOpenConfirmModal(true);
            }
          }}
          sx={{
            animation: `${keyframes({
              '0%': { transform: 'scale(1)' },
              '100%': { transform: 'scale(1.4)' },
            })} 0.8s infinite alternate`,
          }}
        />
      </div>
      <ConfirmModal
        open={isOpenConfirmModal}
        onClose={() => setIsOpenConfirmModal(false)}
        onIframeClose={handleIframeClose}
        onSubmit={handleEmailFormSubmit}
        initialData={formData}
        gameLink={GAMELINK}
        isIframeOpen={isIframeOpen}
      />
    </section>
  );
}
