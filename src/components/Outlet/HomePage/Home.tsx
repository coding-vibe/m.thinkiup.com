import FirstBlock from '@/components/Outlet/GamePage/FirstBlock';
import ContentsBlock from '@/components/Outlet/FIRST_PAGE/SecondBlockContents/ContentsBlock';
import FirstPageBlock from '@/components/Outlet/FIRST_PAGE/FirstPageBlockAbout/FirstPageBlock';
import CookieConsent from '@/components/CookiesConsent';
import Disclaimer from '@/components/Outlet/Disclaimer';
import Sponsor from '@/components/Outlet/SponsorBlock/Sponsor';

export default function Home() {
  return (
    <>
      <FirstBlock />
      <ContentsBlock />
      <FirstPageBlock />
      <CookieConsent />
      <Disclaimer />
      <Sponsor />
    </>
  );
}
