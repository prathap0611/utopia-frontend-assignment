interface countryDetails {
  name: string;
  region: string;
}

function aggregateRegions(
  countries: countryDetails[]
): Record<string, string[]> {
  return countries.reduce((agg, { region, name }) => {
    if (!agg[region]) {
      agg[region] = [];
    }
    agg[region].push(name);
    return agg;
  }, {});
}

export async function fetchRegionAndCounties() {
  try {
    const response = await fetch(
      'https://cdn.utopiamusic.com/code-test/frontend/countries.json',
      { mode: 'cors', method: 'GET' }
    );
    const countries = await response.json();
    return aggregateRegions(countries);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
}
