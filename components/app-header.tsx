import React from 'react';
import './app-header.css';

export default function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-title">Utopia Country Highlighter</h1>
      <img
        src="https://utopiamusic.com/logo.png"
        className="app-logo"
        alt="Logo"
      />
    </header>
  );
}
