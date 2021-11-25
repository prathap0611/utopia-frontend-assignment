import React, { Fragment, useCallback } from 'react';
import './region-container.css';

export default function RegionContainer({
  regions,
  onSelect,
  selectedRegion,
}: {
  regions: string[];
  onSelect: (region: string) => void;
  selectedRegion: string;
}) {
  return (
    <Fragment>
      <h3 className="section-title">Regions</h3>
      <section className="region-selector">
        {regions.map((region) => (
          <div
            className={`region ${region === selectedRegion ? 'selected' : ''}`}
            onClick={() => onSelect(region)}
            key={region}
          >
            {region}
          </div>
        ))}
      </section>
    </Fragment>
  );
}
