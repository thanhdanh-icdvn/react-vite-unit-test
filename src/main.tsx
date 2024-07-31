import './css/style.css';
import './css/montserrat.css';
import 'flatpickr/dist/flatpickr.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

async function enableMocking() {
  if (!import.meta.env.VITE_ENABLE_MSW) {
    return;
  }

  const { browserWorker } = await import('./mocks/browser.ts');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return browserWorker.start();
}
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  );
});
