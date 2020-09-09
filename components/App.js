import "./App.scss";

import React from "react";
import CharityDonation from "./CharityDonation";
import Home from "./Home";
import NewDonation from './NewDonation';


const App = () => {
  return (
    <div>
      <Home />
      <div className="latestDonor">
        <NewDonation/>
        
      </div>
      <CharityDonation />
    </div>
  );
};

export default App;
