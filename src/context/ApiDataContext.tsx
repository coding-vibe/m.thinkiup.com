import React, { createContext, useContext, ReactNode, useState, useMemo } from 'react';

export interface ApiData {
  isB: boolean;
  link: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface ApiDataContextType {
  globalData: ApiData | null;
  setGlobalData: React.Dispatch<React.SetStateAction<ApiData | null>>;
}

const ApiDataContext = createContext<ApiDataContextType | undefined>(undefined);

export function ApiDataProvider({ children, pageProps }: { children: ReactNode; pageProps: { globalData?: ApiData } }) {
  const [globalData, setGlobalData] = useState<ApiData | null>(pageProps.globalData || null);

  const value = useMemo(() => ({ globalData, setGlobalData }), [globalData]);

  return <ApiDataContext.Provider value={value}>{children}</ApiDataContext.Provider>;
}

export function useApiDataContext() {
  const context = useContext(ApiDataContext);
  if (context === undefined) {
    throw new Error('useApiDataContext must be used within an ApiDataProvider');
  }

  return context;
}
