import { useApiDataContext } from '@/context/ApiDataContext';
import { useState, useEffect } from 'react';
import Prelend from './Prelend';

export default function ApiComp() {
  const [isLoading, setIsLoading] = useState(true);
  const [finalLink, setFinalLink] = useState<string | null>(null);
  const { globalData } = useApiDataContext();

  useEffect(() => {
    if (globalData) {
      const getQueryParam = (name: string) => {
        const urlParams = new URLSearchParams(window.location.search);

        return urlParams.get(name);
      };

      const gclid = getQueryParam('gclid');

      const computedLink =
        globalData?.link && gclid
          ? `${globalData.link}${globalData.link.includes('?') ? '&' : '?'}gclid=${gclid}`
          : globalData?.link;

      setFinalLink(computedLink);
      setIsLoading(false);
    }
  }, [globalData]);

  if (isLoading) return <p>Loading...</p>;
  if (!globalData) return <p>No data</p>;

  return (
    <Prelend
      path={finalLink ?? ''}
      title={globalData?.title}
      subtitle={globalData?.subtitle}
      buttonText={globalData?.buttonText ?? 'Play Now'}
    />
  );
}
