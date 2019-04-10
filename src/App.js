import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Piano from './components/Piano';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <h1 id="appTitle">Preston</h1>
        <Piano />
        <div style={{ marginTop: 30}}>
          <Piano />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
