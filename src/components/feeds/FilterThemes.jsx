import React from 'react';
import './Feeds.scss';

function Filter({ selectedTheme, themes, handleChange }) {
  return (
    <div className="wrapper">
      <select
        value={selectedTheme}
        onChange={handleChange}
        className="theme-filter float-right"
      >
        <option value="">Select Theme</option>
        {themes.map(({ id, name }, index) => {
          return (
            <option value={id} key={index}>
              {name}
            </option>
          );
        })}
      </select>
      <p className="fitler-text float-right">Filter by Theme</p>
    </div>
  );
}

export default Filter;
