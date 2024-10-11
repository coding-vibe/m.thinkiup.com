import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import * as generalClasses from '@/styles/general';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));

  return (
    <header>
      <div
        className={className}
        css={[classes.header, generalClasses.layoutPadding]}>
        <nav css={classes.nav}>
          <Logo />
          <Navigation css={generalClasses.desktop} />

          <IconButton
            edge='start'
            color='inherit'
            css={generalClasses.mobile}
            aria-labelledby='open-mobile-menu'
            aria-label='open mobile menu'
            onClick={() => setIsMobileMenuOpen(true)}>
            <MenuIcon
              fontSize={isTablet ? 'large' : 'medium'}
              sx={{ color: (theme: Theme) => theme.palette.text.primary }}
            />
          </IconButton>
        </nav>
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
