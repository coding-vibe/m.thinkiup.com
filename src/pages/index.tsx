import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import ApiComp from '@/components/Outlet/ApiLogic/ApiComp';
import Home from '@/components/Outlet/HomePage/Home';
import { useApiDataContext, ApiData } from '@/context/ApiDataContext';

interface ApiDataContextType {
  data: ApiData | null;
}

export default function HomePage({ data }: ApiDataContextType) {
  const { setGlobalData, globalData } = useApiDataContext();

  useEffect(() => {
    setGlobalData(data);
  }, [data, setGlobalData]);

  return globalData && globalData.isB ? <Home /> : <ApiComp />;
}

const domain = 'https://m.thinkingmagic.com';
const apiEndpoint = `${domain}/api/index.html`;

export const getServerSideProps: GetServerSideProps<{ data: ApiData | null }> = async (
  context: GetServerSidePropsContext,
) => {
  let data: ApiData | null = null;
  const { req } = context;
  const { gclid } = context.query;

  const headers: Record<string, string> = Object.fromEntries(
    Object.entries(req.headers).map(([key, value]) => [key, String(value)]),
  );
  const options = {
    method: 'GET',
    headers,
  };

  try {
    let res;

    const requestUrl = gclid ? `${apiEndpoint}?gclid=${gclid}` : apiEndpoint;

    // eslint-disable-next-line prefer-const
    res = await fetch(requestUrl, options);

    if (res.ok) {
      data = await res.json();
    } else {
      console.error('Error', res.status, await res.text());
    }
  } catch (error) {
    console.error('Error', error);
  }

  return {
    props: {
      data,
    },
  };
};
