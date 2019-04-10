import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Piano from './components/Piano';

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Piano />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
