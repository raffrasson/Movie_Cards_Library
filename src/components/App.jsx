import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
