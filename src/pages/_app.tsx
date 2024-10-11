import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '@/components/Layout';
import LoadingScreen from '@/components/Outlet/LoadingScreen';
import defaultMeta from '@/constants/meta';
import theme from '@/constants/theme';
import { usePageLoading } from '@/hooks/usePageLoading';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ApiDataProvider } from '@/context/ApiDataContext';

const PRELANDING_PATH = '';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const meta = { ...defaultMeta, ...pageProps.meta };
  const router = useRouter();
  const { isPageLoading } = usePageLoading();
  const isPrelanding = router.pathname === PRELANDING_PATH;

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <title>{meta.title}</title>
        <meta
          name='description'
          content='AeroWay - Your Trusted Companion in the Skies'
        />
        <meta
          name='keywords'
          content={meta.keywords}
        />
        <link
          rel='canonical'
          href='https://m.better-mpg.com'
        />
        <link
          rel='icon'
          href={meta.faviconPath}
        />
      </Head>
      {isPageLoading && <LoadingScreen />}
      {!isPageLoading && isPrelanding && <Component {...pageProps} />}
      {!isPageLoading && !isPrelanding && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApiDataProvider pageProps={pageProps}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApiDataProvider>
        </ThemeProvider>
      )}
    </AppCacheProvider>
  );
}
