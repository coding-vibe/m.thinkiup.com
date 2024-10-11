import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { header } from '@/components/Layout/Header/headerData';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Navigation({ className }: Props) {
  return (
    <ul
      className={className}
      css={classes.navigation}>
      {header.navLinks.map(({ label, path }) => (
        <Typography
          component='li'
          css={generalClasses.semibold}
          key={label}
          variant='h6'>
          <Link
            css={classes.hitbox}
            href={path}>
            {label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}
