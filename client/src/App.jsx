import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import axios from 'axios';

import './App.css';

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const fetchYelpData = async () => {
    try {
      const resp = await axios.get('/api/businesses');
      setBusinesses(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(fetchYelpData, []);

  return (
    <AppContextProvider>
      <div>
        {businesses.length &&
          businesses.map((business) => {
            return (
              <div key={business.id}>
                <h2>{business.name}</h2>
                <img src={business.image_url} alt="business-pic" />
              </div>
            );
          })}
      </div>
    </AppContextProvider>
  );
};

export default App;
