import React, { useMemo, useState } from 'react';
import { useDataApi } from '../hooks/use-data-api';
import { fetchRegionAndCounties } from '../services/api';
import AppHeader from './app-header';
import CountryContainer from './country-container';
import InfoBar from './info-bar';
import RegionContainer from './region-container';

export default function App() {
  const { isLoading, data, error } = useDataApi<
    Record<string, string[]>,
    string
  >({}, '', fetchRegionAndCounties);

  const [selectedRegion, selectRegion] = useState('');

  const regions = useMemo<string[]>(() => {
    return Object.keys(data);
  }, [data]);

  return (
    <div>
      <AppHeader />
      <main>
        <InfoBar />
        <RegionContainer
          regions={regions}
          onSelect={selectRegion}
          selectedRegion={selectedRegion}
        />
        <CountryContainer countries={data[selectedRegion] || []} />
      </main>
    </div>
  );
}
