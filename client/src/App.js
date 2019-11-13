import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  
  return (
    <div>
      <Route path="/" component={SavedList} />
      <Route exact path="/" 
        render={(props) => <MovieList {...props} addToSavedList={addToSavedList} />}
      />
      <Route exact path="/movies/:id"
        render={(props) => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
};

export default App;
