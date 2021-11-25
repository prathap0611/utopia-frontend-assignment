import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import './style.css';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
