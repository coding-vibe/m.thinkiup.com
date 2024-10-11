import Link from 'next/link';
import * as classes from './style';

interface ButtonProps {
  link: boolean;
  path?: string;
  text: string;
  background?: string;
}

export default function Button({ link, text, path = '/', background = 'red' }: ButtonProps) {
  return link ? (
    <Link
      style={{ background }}
      css={classes.link}
      href={path}>
      {text}
    </Link>
  ) : (
    <button
      style={{ background }}
      css={classes.button}
      type='button'>
      {text}
    </button>
  );
}
