import React from 'react';
import { useDataApi } from '../hooks/use-data-api';
import { fetchRegionAndCounties } from '../services/api';
import AppHeader from './app-header';
import InfoBar from './info-bar';

export default function App() {
  const { isLoading, data, error } = useDataApi<
    Record<string, string[]>,
    Record<string, unknown>
  >({}, {}, fetchRegionAndCounties);

  console.log(data);

  return (
    <div>
      <AppHeader />
      <main>
        <InfoBar />
      </main>
    </div>
  );
}
