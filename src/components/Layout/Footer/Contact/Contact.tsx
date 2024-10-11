import Typography from '@mui/material/Typography';
import { ContactType } from '@/components/Layout/Footer/footerData';
import * as classes from './styles';

interface Props {
  contact: ContactType;
  className?: string;
}

export default function Contact({ contact, className }: Props) {
  const { icon: Icon, text, type } = contact;

  let href;
  if (type === 'phone') {
    href = `tel:${text}`;
  } else if (type === 'email') {
    href = `mailto:${text}`;
  } else {
    href = '';
  }

  return (
    <a
      href={href}
      className={className}
      css={classes.wrap}>
      <div>
        <Icon css={classes.icon} />
      </div>
      <div>
        <Typography
          style={{ maxWidth: '300px' }}
          component='p'
          variant='body1'>
          {text}
        </Typography>
      </div>
    </a>
  );
}
