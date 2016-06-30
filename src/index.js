import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCX_ZSBeeU47pYxzXpEkAS1e56Htx9UlQ0'

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)guillermo jacquez

ReactDOM.render(<App />, document.querySelector('.container'));
