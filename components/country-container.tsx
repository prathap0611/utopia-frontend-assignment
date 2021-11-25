import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './country-container.css';

export default function CountryContainer({
  countries,
}: {
  countries: string[];
}) {
  const [selectedCountries, selectCountries] = useState({});

  const onSelectCountry = useCallback(
    (country) => {
      selectCountries({ ...selectedCountries, [country]: true });
    },
    [selectCountries, selectedCountries, countries]
  );

  return (
    <Fragment>
      {countries && countries.length ? (
        <section>
          <h3 className="section-title">Countries</h3>
          <section className="country-selector">
            {countries.map((country) => (
              <div
                className={`country ${
                  selectedCountries[country] ? 'selected' : ''
                }`}
                onClick={() => onSelectCountry(country)}
                key={country}
              >
                {country}
              </div>
            ))}
          </section>
        </section>
      ) : null}
    </Fragment>
  );
}
