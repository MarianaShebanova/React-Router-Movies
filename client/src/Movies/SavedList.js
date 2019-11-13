import React from 'react';

const SavedList = props => {
  const routeToHome = () => {
    props.history.push("/");
  };
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
      <div className="home-button" onClick={routeToHome}>Home</div>
  </div>
  )
};

export default SavedList;
