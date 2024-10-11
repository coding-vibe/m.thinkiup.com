import { ReactNode } from 'react';
import { useApiDataContext } from '@/context/ApiDataContext';
import * as generalClasses from '@/styles/general';
import BlackFooter from './BlackFooter';
import Footer from './Footer';
import Header from './Header';
import * as classes from './styles';

interface PageProps {
  children?: ReactNode;
}

export default function Layout({ children }: PageProps) {
  const { globalData } = useApiDataContext();

  return (
    <div css={classes.wrap}>
      {globalData && globalData.isB && <Header />}
      <main css={classes.main}>{children}</main>
      {globalData && globalData.isB ? (
        <Footer />
      ) : (
        <div>
          <div css={generalClasses.mobile}>
            <BlackFooter />
          </div>
          <div css={generalClasses.desktop}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
