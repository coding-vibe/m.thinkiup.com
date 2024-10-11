import Link from 'next/link';
import Typography from '@mui/material/Typography';
import * as generalClasses from '@/styles/general';
import { useApiDataContext } from '@/context/ApiDataContext';
import Contact from './Contact';
import Logo from './Logo';
import Navigation from './Navigation';
import { footer } from './footerData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  const { globalData } = useApiDataContext();

  return (
    <footer
      className={className}
      css={[classes.footer, generalClasses.layoutPadding]}>
      <div css={classes.wrap}>
        <div css={classes.navWrap}>
          <Logo css={classes.logo} />
          {globalData?.isB && <Navigation />}
          {globalData?.isB && (
            <Link href={footer.termsCondition.route}>
              <Typography
                component='p'
                sx={{ mt: '14px' }}
                variant='body1'>
                {footer.termsCondition.label}
              </Typography>
            </Link>
          )}
          <Typography
            component='p'
            css={classes.copyRight}
            variant='body1'>
            {footer.copyRight}
          </Typography>
        </div>
        <div css={classes.contactsWrap}>
          {footer.contactsBlock.contacts.map((item) => (
            <Contact
              key={item.text}
              css={classes.contact}
              contact={item}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
