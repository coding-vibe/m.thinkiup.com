import { useEffect, useState } from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { keyframes } from '@mui/system';
import Button from '@/components/Outlet/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material';
import { MainImagePaths } from './GamesData';
import * as classes from './style';
import ConfirmModal from '../ConfirmModal';
import { GAMELINK } from '../GamePage/firstBlockData';

interface Props {
  className?: string;
}

export default function GamePage({ className }: Props) {
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
      css={classes.section}>
      <div css={classes.wrap}>
        <Button
          size='large'
          text='play now'
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
        <div css={classes.img}>
        <Image
          width={600}
          height={300}
          css={classes.img}
          layout='responsive'
          alt='main GIF image'
          src={isMobileMainImg ? MainImagePaths.ImageDesk : MainImagePaths.ImageMob}
        />
        </div>
        <Button
          size='large'
          text='play now'
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
