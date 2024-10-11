import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Image from 'next/image';
import * as classes from './style';
import { prelendData } from './prelend.data';
import Button from '../../UI/Button/Button';

interface IPrelendProps {
  path: string;
  title: string;
  buttonText: string;
  subtitle: string;
}

export default function Prelend({ path, title, buttonText, subtitle }: IPrelendProps) {
  useEffect(() => {
    const handleBodyClick = () => {
      window.location.href = path;
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [path]);

  return (
    <section css={classes.hero}>
      <Image
        css={classes.bg}
        src={prelendData.img}
        alt='bg'
        fill
      />

      <div css={classes.body}>
        <div css={classes.content}>
          <Typography
            variant='h1'
            color='initial'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Typography
            variant='h6'
            color='initial'
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          <div css={classes.btns}>
            <Button
              link
              path={path}
              text={buttonText}
              background='#000'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
