import Button from '@/components/Outlet/Button';
import * as generalClasses from '@/styles/general';
import { useApiDataContext } from '@/context/ApiDataContext';
import * as classes from './style';

export default function BlackFooter() {
  const { globalData } = useApiDataContext();

  if (!globalData) return <p>No data</p>;

  const getQueryParam = (name: string) => {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(name);
  };

  const gclid = getQueryParam('gclid');

  const finalLink =
    globalData?.link && gclid
      ? `${globalData.link}${globalData.link.includes('?') ? '&' : '?'}gclid=${gclid}`
      : globalData?.link;

  return (
    <div css={generalClasses.layoutPadding}>
      <div css={classes.btnWrap}>
        <Button
          css={classes.btn1}
          href={finalLink}
          text='Play Now'
        />
        <Button
          css={classes.btn2}
          href={finalLink}
          text='Registration'
        />
      </div>
    </div>
  );
}
